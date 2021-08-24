// Final testing for retry logic
describe('Retry Logic Tests', () => {
    it('should retry failed operations', () => {
        const operation = jest.fn().mockImplementation(() => throw new Error('Failed'));
        expect(operation).toThrow('Failed');
        expect(retryOperation).toHaveBeenCalled();
    });
});