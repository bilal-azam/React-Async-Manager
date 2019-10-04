import { useState, useEffect, Suspense } from 'react';

export function useAsync(asyncFunction, dependencies = []) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        asyncFunction().then(response => {
            setData(response);
            setLoading(false);
        }).catch(error => {
            setError(error);
            setLoading(true);
        });
    }, [...dependencies, asyncFunction]);

    if (isLoading) throw new Suspense();
    return { data, error };
}