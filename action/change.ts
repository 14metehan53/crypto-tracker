export const percentChange = (change: string): string => {
  const value = parseFloat(change);

  if (value >= 0.005) {
    return 'dark:text-green-500 text-[#0c9945] dark:bg-[#00c95069] bg-[#00c950c5]';
  } else if (value <= -0.005) {
    return 'dark:text-red-500 text-[#912025] dark:bg-[#fb2c3669] bg-[#fb2c3669]';
  } else {
    return 'text-gray-600 bg-gray-400';
  }
};
