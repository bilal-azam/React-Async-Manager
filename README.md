## Usage with Context API

### Setting Up Context

Wrap your application with the `AsyncManagerProvider`:

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AsyncManagerProvider } from 'react-async-manager';

ReactDOM.render(
    <AsyncManagerProvider>
        <App />
    </AsyncManagerProvider>,
    document.getElementById('root')
);
```

### Using AsyncManager with Context

In your components:

```
import React from 'react';
import { useAsyncManager } from 'react-async-manager';

const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};

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

export default MyComponent;
```