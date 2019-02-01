import { useState, useEffect } from 'react';

export function useAsync(asyncFunction, dependencies = []) {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        asyncFunction().then(response => {
            setData(response);
            setLoading(false);
        }).catch(error => {
            setError(error);
            setLoading(false);
        });
    }, dependencies);

    return { isLoading, data, error };
}