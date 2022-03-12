import { renderHook, act } from '@testing-library/react-hooks';
import AsyncManager from '../AsyncManager';

describe('AsyncManager Comprehensive Tests', () => {
    it('should correctly handle multiple async operations', async () => {
        const mockAction1 = jest.fn().mockResolvedValue('data1');
        const mockAction2 = jest.fn().mockResolvedValue('data2');

        const { result, waitForNextUpdate } = renderHook(() => AsyncManager.useAsyncState('data1', { loading: false, data: null, error: null }));
        const { result: result2, waitForNextUpdate: waitForNextUpdate2 } = renderHook(() => AsyncManager.useAsyncState('data2', { loading: false, data: null, error: null }));

        act(() => {
            result.current[1](mockAction1);
            result2.current[1](mockAction2);
        });

        expect(result.current[0].loading).toBe(true);
        expect(result2.current[0].loading).toBe(true);

        await waitForNextUpdate();
        await waitForNextUpdate2();

        expect(mockAction1).toHaveBeenCalled();
        expect(mockAction2).toHaveBeenCalled();
        expect(result.current[0].data).toBe('data1');
        expect(result2.current[0].data).toBe('data2');
    });

    it('should allow error handling customization', async () => {
        const mockAction = jest.fn().mockRejectedValue(new Error('Custom error'));
        const onError = jest.fn();
        
        const { result, waitForNextUpdate } = renderHook(() => AsyncManager.useAsyncState('test', { loading: false, data: null, error: null }));

        act(() => {
            result.current[1](mockAction, onError);
        });

        expect(result.current[0].loading).toBe(true);

        await waitForNextUpdate();

        expect(onError).toHaveBeenCalledWith(new Error('Custom error'));
        expect(result.current[0].loading).toBe(false);
        expect(result.current[0].error.message).toBe('Custom error');
    });
});