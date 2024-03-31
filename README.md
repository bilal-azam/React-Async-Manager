# Enhanced Documentation

## New Features

### Feature X

**Feature X** provides a way to ... [Provide a detailed description of Feature X].

#### Usage

```
import { useAsyncManager } from 'react-async-manager';

const MyComponent: React.FC = () => {
    const AsyncManager = useAsyncManager();
    const [state, fetchData] = AsyncManager.useAsyncState('data', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchData(fetchData);
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
```

### Performance Improvements

**Performance Improvements** include optimizations such as ... [Describe performance improvements].

#### How to Benefit

By using the latest version, you’ll benefit from ... [Detail the benefits].