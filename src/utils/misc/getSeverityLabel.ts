export const getSeverityLabel = (severity: number): string => {
  switch (severity) {
    case 1:
      return 'low';
    case 2:
      return 'medium';
    case 3:
      return 'high';
    default:
      return 'unknown';
  }
};
