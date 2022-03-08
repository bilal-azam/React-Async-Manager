## Advanced Usage

### Handling Multiple Async Operations

You can handle multiple asynchronous operations by using different keys for each operation:

```
import React from 'react';
import AsyncManager from 'react-async-manager';

const fetchData1 = async () => { ... };
const fetchData2 = async () => { ... };

const MyComponent: React.FC = () => {
    const [state1, fetch1] = AsyncManager.useAsyncState('data1', { loading: false, data: null, error: null });
    const [state2, fetch2] = AsyncManager.useAsyncState('data2', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetch1(fetchData1);
        fetch2(fetchData2);
    }, [fetch1, fetch2]);

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

### API

- **AsyncManager.useAsyncState(key: string, initialState: State<T>): [State<T>, (action: () => Promise<T>) => void]**
  - key: Unique key for the state.
  - initialState: Initial state for the async operation.
  - Returns: Current state and a function to trigger the async action.