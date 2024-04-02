## Custom Hooks

### Creating Custom Hooks with AsyncManager

You can create custom hooks that leverage AsyncManager:

```
import { useAsyncManager } from 'react-async-manager';

const useCustomData = (url: string) => {
    const AsyncManager = useAsyncManager();
    const [state, fetchData] = AsyncManager.useAsyncState('customData', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchData(() => fetch(url).then(res => res.json()));
    }, [url, fetchData]);

    return state;
};

const MyComponent: React.FC = () => {
    const state = useCustomData('https://api.example.com/data');

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