import AsyncManager from '../AsyncManager';
import { renderHook, act } from '@testing-library/react-hooks';

describe('AsyncManager', () => {
    it('should handle async actions correctly', async () => {
        const mockAction = jest.fn().mockResolvedValue('data');
        const { result, waitForNextUpdate } = renderHook(() => AsyncManager.useAsyncState('test', { loading: false, data: null, error: null }));

        act(() => {
            result.current[1](mockAction);
        });

        expect(result.current[0].loading).toBe(true);

        await waitForNextUpdate();

        expect(mockAction).toHaveBeenCalled();
        expect(result.current[0].loading).toBe(false);
        expect(result.current[0].data).toBe('data');
        expect(result.current[0].error).toBe(null);
    });

    it('should handle errors correctly', async () => {
        const mockAction = jest.fn().mockRejectedValue(new Error('Failed'));
        const { result, waitForNextUpdate } = renderHook(() => AsyncManager.useAsyncState('test', { loading: false, data: null, error: null }));

        act(() => {
            result.current[1](mockAction);
        });

        expect(result.current[0].loading).toBe(true);

        await waitForNextUpdate();

        expect(mockAction).toHaveBeenCalled();
        expect(result.current[0].loading).toBe(false);
        expect(result.current[0].data).toBe(null);
        expect(result.current[0].error.message).toBe('Failed');
    });
});