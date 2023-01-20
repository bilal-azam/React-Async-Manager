// Implement a hook to respond to network status changes
export function useOnNetworkChange(callback) {
    useEffect(() => {
        const handleNetworkChange = () => {
            const onlineStatus = navigator.onLine ? 'online' : 'offline';
            callback(onlineStatus);
            console.log('Network status changed:', onlineStatus);
        };

        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);

        return () => {
            window.removeEventListener('online', handleNetworkChange);
            window.removeEventListener('offline', handleNetworkChange);
        };
    }, []);
}