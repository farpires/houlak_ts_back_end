import axios from "axios";
import CONFIG from "../config";
import { TGetToken } from "../models/IToken";
const { url, clientId, clientSecret } = CONFIG.TOKEN;


const getToken = async (): Promise<TGetToken> => {
    try {

        const authBtoa: string = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64');
        const data: string = 'grant_type=client_credentials';
        const response = await axios.post(url as string, data,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${authBtoa}`
                }
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export default getToken;