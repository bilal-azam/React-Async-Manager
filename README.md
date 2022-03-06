## Usage with TypeScript

1. Import the package:

    ```
    import AsyncManager from 'react-async-manager';
    ```

2. Use it in your TypeScript component:

    ```
    import React from 'react';
    import AsyncManager from 'react-async-manager';

    type Data = {
        id: number;
        name: string;
    };

    const fetchData = async (): Promise<Data[]> => {
        const response = await fetch('https://api.example.com/data');
        return response.json();
    };

    const MyComponent: React.FC = () => {
        const [state, fetchData] = AsyncManager.useAsyncState<Data[]>('data', { loading: false, data: null, error: null });

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