export function formatAmount(amount: number): string {
  if (amount < 10) {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6,
    });
  } else {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

export function formatToXDecimalPlaces(
  amount: number,
  decimalPlaces: number,
): string {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}
