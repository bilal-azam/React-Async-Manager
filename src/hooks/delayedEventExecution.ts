// Develop a feature to execute events with a delay
export function useDelayedEvent(delay, event) {
    useEffect(() => {
        setTimeout(() => {
            event();
            console.log('Event executed after a delay of', delay, 'milliseconds');
        }, delay);
    }, [delay, event]);
}