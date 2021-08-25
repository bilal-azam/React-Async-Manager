// Testing the implemented throttling and debouncing features
describe('Throttle and Debounce Tests', () => {
    it('should throttle frequent calls', () => {
        const call = jest.fn();
        const throttled = throttleEvent(call, 100);
        throttled();
        throttled();
        expect(call).toHaveBeenCalledTimes(1);
    });
    it('should debounce rapid calls', () => {
        const call = jest.fn();
        const debounced = debounceEvent(call, 100);
        debounced();
        debounced();
        jest.advanceTimersByTime(100);
        expect(call).toHaveBeenCalledTimes(1);
    });
});