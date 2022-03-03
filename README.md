# react-async-manager

A React package for managing asynchronous operations and state in a simple and effective way.

## Installation

```
npm install react-async-manager
```

## Usage

1. Import the package:

    ```
    import AsyncManager from 'react-async-manager';
    ```

2. Use it in your component:

    ```
    import React from 'react';
    import AsyncManager from 'react-async-manager';

    const fetchData = async () => {
        const response = await fetch('https://api.example.com/data');
        return response.json();
    };

    const MyComponent = () => {
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

## License

MIT License. See the [LICENSE](LICENSE) file for details.