import { renderHook, act } from '@testing-library/react-hooks';
import AsyncManager from '../AsyncManager';

describe('AsyncManager Comprehensive Tests', () => {
    it('should handle async operations and state updates correctly', async () => {
        const mockAction = jest.fn().mockResolvedValue('data');
        const { result, waitForNextUpdate } = renderHook(() => AsyncManager.useAsyncState('test', { loading: false, data: null, error: null }));

        act(() => {
            result.current[1](mockAction);
        });

        expect(result.current[0].loading).toBe(true);
        
        await waitForNextUpdate();

        expect(mockAction).toHaveBeenCalled();
        expect(result.current[0].data).toBe('data');
        expect(result.current[0].loading).toBe(false);
    });

    it('should call onError callback when action fails', async () => {
        const mockAction = jest.fn().mockRejectedValue(new Error('Test error'));
        const onError = jest.fn();
        const { result, waitForNextUpdate } = renderHook(() => AsyncManager.useAsyncState('test', { loading: false, data: null, error: null }));

        act(() => {
            result.current[1](mockAction, onError);
        });

        expect(result.current[0].loading).toBe(true);
        
        await waitForNextUpdate();

        expect(onError).toHaveBeenCalledWith(new Error('Test error'));
        expect(result.current[0].error).toBeInstanceOf(Error);
    });
});