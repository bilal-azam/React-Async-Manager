## Detailed Examples

### Example with Multiple Async Actions

```
import React from 'react';
import { useAsyncManager } from 'react-async-manager';

const fetchData1 = async () => { ... };
const fetchData2 = async () => { ... };

const MyComponent: React.FC = () => {
    const AsyncManager = useAsyncManager();
    const [state1, fetch1] = AsyncManager.useAsyncState('data1', { loading: false, data: null, error: null });
    const [state2, fetch2] = AsyncManager.useAsyncState('data2', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetch1(fetchData1);
        fetch2(fetchData2);
    }, [fetch1, fetch2]);

    if (state1.loading || state2.loading) return <p>Loading...</p>;
    if (state1.error || state2.error) return <p>Error: {state1.error?.message || state2.error?.message}</p>;

    return (
        <div>
            <h1>Data 1:</h1>
            <pre>{JSON.stringify(state1.data, null, 2)}</pre>
            <h1>Data 2:</h1>
            <pre>{JSON.stringify(state2.data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;
```

### Handling Error States Gracefully

```
import React from 'react';
import { useAsyncManager } from 'react-async-manager';

const fetchData = async () => { ... };

const MyComponent: React.FC = () => {
    const AsyncManager = useAsyncManager();
    const [state, fetchData] = AsyncManager.useAsyncState('data', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchData(fetchData, (error) => {
            // Handle error
            console.error('Error:', error.message);
        });
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