// Add additional features to enhance user feedback
export function detailedProgressReport(stepDetails) {
    const detailReport = stepDetails.map(detail => `${detail.step}: ${detail.description}`);
    return detailReport.join('\n');
}