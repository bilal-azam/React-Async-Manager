## Advanced Error Handling

You can customize error handling by providing an onError callback:

```
import React from 'react';
import AsyncManager from 'react-async-manager';

const fetchData = async () => {
    throw new Error('Custom error');
};

const handleError = (error: Error) => {
    console.error('Error occurred:', error.message);
};

const MyComponent: React.FC = () => {
    const [state, fetchData] = AsyncManager.useAsyncState('data', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchData(fetchData, handleError);
    }, [fetchData]);

    if (state.loading) return <p>Loading...</p>;
    if (state.error) return <p>Error: {state.error.message}</p>;

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;
```