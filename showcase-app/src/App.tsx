// showcase-app/src/App.tsx
import React from 'react';
import { useAsyncManager } from 'react-async-manager';

const fetchExampleData = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};

const ShowcaseComponent: React.FC = () => {
    const AsyncManager = useAsyncManager();
    const [state, fetchData] = AsyncManager.useAsyncState('exampleData', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchData(fetchExampleData);
    }, [fetchData]);

    if (state.loading) return <p>Loading...</p>;
    if (state.error) return <p>Error: {state.error.message}</p>;

    return (
        <div>
            <h1>Showcase Data:</h1>
            <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
    );
};

const App: React.FC = () => (
    <div>
        <h1>AsyncManager Showcase</h1>
        <ShowcaseComponent />
    </div>
);

export default App;