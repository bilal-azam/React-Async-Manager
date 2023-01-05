// Enhance the onError event hook for better error handling capabilities
import { EventHooks } from '../architecture/eventHooks';
EventHooks.onError((error) => {
    console.error('Enhanced error handling:', error);
    // Additional error handling logic
});