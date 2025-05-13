export const priceChange = (change: string): string => {
  const value = parseFloat(change);

  if (value >= 0.01) {
    return 'dark:text-green-500 text-[#0c9945]';
  } else if (value <= -0.01) {
    return 'dark:text-red-500 text-[#912025]';
  } else {
    return 'text-gray-400';
  }
};
