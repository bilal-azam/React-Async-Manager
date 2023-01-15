// Create a new event hook to manage cleanup operations before a component unmounts
export function useOnBeforeUnmount(callback) {
    useEffect(() => {
        return () => {
            callback();
            console.log('Component is about to unmount, cleanup initiated.');
        };
    }, []);
}