export const usdToIdr = (amount: number): string => {
	const exchangeRate = 15000;
	const idrAmount = Math.round(amount * exchangeRate);
	return `Rp${idrAmount.toLocaleString("id-ID")}`;
};
