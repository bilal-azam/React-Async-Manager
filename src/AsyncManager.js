// src/AsyncManager.js
import { useState, useCallback } from 'react';

class AsyncManager {
    constructor() {
        this.state = {};
        this.setState = () => {};
    }

    setStateCallback(setState) {
        this.setState = setState;
    }

    async runAsync(action, key) {
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

    useAsyncState(key, initialState) {
        const [state, setState] = useState({
            [key]: initialState
        });
        this.setStateCallback(setState);

        return [state[key], (action) => this.runAsync(action, key)];
    }
}

export default new AsyncManager();