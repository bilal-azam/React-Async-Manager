import { useState, useEffect } from 'react';

export function useAsync(asyncFunction, dependencies = []) {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        asyncFunction().then(response => {
            setData(response);
            setLoading(false);
        }).catch(error => {
            setError(error);
            setLoading(true);
        });
    }, dependencies);

    return { isLoading, data, error };
}