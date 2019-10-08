import { renderHook } from '@testing-library/react-hooks';
import { Suspense } from 'react';
import { useAsync } from '../src/hooks/useAsync';

describe('useAsync hook with Suspense', () => {
    it('should suspend while loading', async () => {
        const mockFetch = jest.fn(() => new Promise(resolve => setTimeout(() => resolve('Data loaded'), 1000)));
        const { result, waitForNextUpdate } = renderHook(() => useAsync(mockFetch));

        expect(() => result.current.data).toThrow(Suspense);
        await waitForNextUpdate();
        expect(result.current.data).toBe('Data loaded');
    });
});