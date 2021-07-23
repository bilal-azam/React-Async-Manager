// Add onError event hook for handling fetch errors
import { EventHooks } from '../architecture/eventHooks';
EventHooks.onError((error) => {
    console.log('Error occurred:', error);
});