// Initial setup for request throttling
export function throttleEvent(callback, interval) {
    let lastExecution = Date.now() - interval;
    return (...args) => {
        const now = Date.now();
        if (now - lastExecution >= interval) {
            lastExecution = now;
            callback(...args);
        }
    };
}