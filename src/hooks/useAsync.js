import { useState, useEffect } from 'react';

export function useAsync(asyncFunction, dependencies = []) {
    const [isLoading, setLoading] = useState(true);
    const controller = new AbortController();

    useEffect(() => {
        setLoading(true);
        asyncFunction(controller.signal).then(response => {
            setData(response);
            setLoading(false);
        }).catch(error => {
            if (error.name !== 'AbortError') {
                setError(error);
            }
            setLoading(false);
        });

        return () => controller.abort();
    }, [...dependencies, asyncFunction]);

    return { isLoading, data, error };
}