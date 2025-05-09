export const formatVolume = (volume: number) => {
  if (volume >= 1_000_000_000) {
    return (volume / 1_000_000_000).toFixed(2) + 'B';
  } else if (volume / 1_000_000) {
    return (volume / 1_000_000).toFixed(2) + 'M';
  } else if (volume / 1_000) {
    return (volume / 1_000).toFixed(2) + 'K';
  }
  return volume.toString();
};
