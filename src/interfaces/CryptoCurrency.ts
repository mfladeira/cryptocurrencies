export interface CryptoCurrency {
	id: string;
	market_cap_rank: string;
	symbol: string;
	name: string;
	current_price: string;
	image: string,
	price_change_percentage_24h: number,
	high_24h: number,
	low_24h: number,
	total_volume: number
}