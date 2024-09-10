/**
 * Creates a debounced function that delays invoking the provided function until at least
 * 'wait' milliseconds have passed since the last time the debounced function was invoked.
 * 
 * @param {Function} fn - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} - A new debounced function
 */
export function debounce(fn, wait) {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        fn(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  