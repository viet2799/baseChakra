export const formatMoney = (text: number) => {
  const textFormat = text.toFixed(2);
  return `$${textFormat}`;
};
