// Combine both throttling and debouncing for optimal performance
import { throttleEvent, debounceEvent } from '../features/throttling';
export function optimizedEventHandling(callback, options) {
    const throttled = throttleEvent(callback, options.interval);
    const debounced = debounceEvent(throttled, options.delay);
    return debounced;
}