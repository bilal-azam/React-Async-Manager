// Implement the backend logic to handle progress reporting
export function updateProgress(step, total) {
    const progress = (step / total) * 100;
    return progress;
}