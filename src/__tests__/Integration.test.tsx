import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import AsyncManager from '../AsyncManager';

const MockComponent: React.FC = () => {
    const [state, fetchData] = AsyncManager.useAsyncState('test', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchData(() => Promise.resolve('mock data'));
    }, [fetchData]);

    return (
        <div>
            {state.loading ? <p>Loading...</p> : <p>Data: {state.data}</p>}
        </div>
    );
};

test('should display loading and then data', async () => {
    render(<MockComponent />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText('Data: mock data')).toBeInTheDocument();
    });
});