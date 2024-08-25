export const convertAmount = (amount) => {
  return amount?.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    style: "currency",
    currency: "USD",
  });
};
