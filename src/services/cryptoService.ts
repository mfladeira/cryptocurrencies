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
        const cryptos = await api.get<CryptoCurrency[]>(`markets?limit=${limit}`, {
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

export { getCrypto };