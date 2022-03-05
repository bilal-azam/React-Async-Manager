import { useState, useCallback } from 'react';

type State<T> = {
    loading: boolean;
    data: T | null;
    error: Error | null;
};

class AsyncManager {
    private setState: React.Dispatch<React.SetStateAction<any>> = () => {};

    private async runAsync<T>(action: () => Promise<T>, key: string) {
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
            (action: () => Promise<T>) => this.runAsync(action, key)
        ] as [State<T>, (action: () => Promise<T>) => void];
    }
}

export default new AsyncManager();