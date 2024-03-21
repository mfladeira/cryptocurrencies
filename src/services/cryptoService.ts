import axios from "axios";
import { CryptoCurrency } from "../interfaces/CryptoCurrency";

const api = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/',
    headers: {
        'x-cg-demo-api-key': 'CG-DrSbYuNnf1xBb55LVEkwjRSy'
    }
})

const getCrypto = async (limit: number = 10): Promise<CryptoCurrency[] | undefined> => {
    try {
        const cryptos = await api.get<CryptoCurrency[]>('markets', {
            params: {
                vs_currency: 'usd',
                per_page: limit,
                page: 1
            }
        });

        return cryptos.data;
    } catch (e) {
        console.error(e)
    }
}

const getMarketChartOfCrypto = async (idCrypto: string): Promise<Array<CryptoMarketChart> | undefined> => {
    try {
        const marketChart = await api.get<{ prices: Array<CryptoMarketChart> }>(`${idCrypto}/market_chart`, {
            params: {
                vs_currency: 'usd',
                days: 2
            }
        })

        return marketChart.data.prices.slice(23);
    } catch (e) {
        console.error(e)
    }
}

export { getCrypto, getMarketChartOfCrypto };