export const formatMcap = (Mcap: number) => {
  if (Mcap >= 1_000_000_000_000) {
    return (Mcap / 1_000_000_000_000).toFixed(2) + 'T';
  } else if (Mcap >= 1_000_000_000) {
    return (Mcap / 1_000_000_000).toFixed(2) + 'B';
  } else if (Mcap / 1_000_000) {
    return (Mcap / 1_000_000).toFixed(2) + 'M';
  } else if (Mcap / 1_000) {
    return (Mcap / 1_000).toFixed(2) + 'K';
  }
  return Mcap.toString();
};
