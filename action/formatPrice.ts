export const formatPrice = (price: string | number): string => {
  const numericValue = Number(price);
  if (isNaN(numericValue)) return price.toString();

  if (numericValue >= 1000) {
    return numericValue.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return numericValue.toFixed(2);
};
