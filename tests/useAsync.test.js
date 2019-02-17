import { renderHook } from '@testing-library/react-hooks';
import { useAsync } from '../src/hooks/useAsync';

describe('useAsync hook', () => {
    it('should handle loading state correctly', async () => {
        const mockFetch = jest.fn(() => Promise.resolve('Data loaded'));
        const { result, waitForNextUpdate } = renderHook(() => useAsync(mockFetch));

        expect(result.current.isLoading).toBeTruthy();
        await waitForNextUpdate();
        expect(result.current.isLoading).toBeFalsy();
        expect(result.current.data).toBe('Data loaded');
    });
});