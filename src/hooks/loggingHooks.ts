// Enhance event hooks with detailed logging capabilities
export function useLoggingHook(eventName, action) {
    useEffect(() => {
        console.log(`Event ${eventName} triggered`, action);
    }, [eventName, action]);
}