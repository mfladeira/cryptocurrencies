import axios from "axios";
import { CryptoCurrency } from "../interfaces/CryptoCurrency";

const api = axios.create({
    baseURL: 'https://api.coincap.io/v2/',
    headers: {
        'Authorization': 'Bearer c2515cbf-22b5-4f66-9c66-f53263f558a4'
    }
})

const getCrypto = async (limit: number = 10): Promise<{ data: CryptoCurrency[] } | undefined> => {
    try {
        const cryptos = await api.get<{ data: CryptoCurrency[] }>(`assets?limit=${limit}`);
        return cryptos.data;
    } catch (e) {
        console.error(e)
    }
}

export { getCrypto };