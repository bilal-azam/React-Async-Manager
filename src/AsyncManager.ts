// src/AsyncManager.ts
import { useState, useCallback } from 'react';

type State<T> = {
    loading: boolean;
    data: T | null;
    error: Error | null;
};

class AsyncManager {
    private setState: React.Dispatch<React.SetStateAction<any>> = () => {};

    private async runAsync<T>(action: () => Promise<T>, key: string, onError?: (error: Error) => void) {
        this.setState(prevState => ({
            ...prevState,
            [key]: { loading: true, error: null, data: null }
        }));
        
        try {
            const data = await action();
            this.setState(prevState => ({
                ...prevState,
                [key]: { loading: false, data }
            }));
        } catch (error) {
            if (onError) onError(error);
            this.setState(prevState => ({
                ...prevState,
                [key]: { loading: false, error }
            }));
        }
    }

    setStateCallback(setState: React.Dispatch<React.SetStateAction<any>>) {
        this.setState = setState;
    }

    useAsyncState<T>(key: string, initialState: State<T>) {
        const [state, setState] = useState({
            [key]: initialState
        });
        this.setStateCallback(setState);

        return [
            state[key] as State<T>,
            useCallback((action: () => Promise<T>, onError?: (error: Error) => void) => this.runAsync(action, key, onError), [key])
        ] as [State<T>, (action: () => Promise<T>, onError?: (error: Error) => void) => void];
    }
}

export default new AsyncManager();