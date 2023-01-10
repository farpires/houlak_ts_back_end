import axios from 'axios';
import getToken from './token';
import CONFIG from '../config';
import { IToken } from '../models/IToken';
import { TGetArtist } from '../models/ISearch';
const { BASE_URL } = CONFIG;


const getArtist = async (searchKey: string, resourceType: string): Promise<TGetArtist> => {
    try {
        const token: IToken = await getToken();
        const response = await axios.get(`${BASE_URL}/v1/search?q=${resourceType}&type=${searchKey}`,
            { headers: { Authorization: `Bearer ${token.access_token}` } });

        return response.data.artists.items[0]
    } catch (error) {
        throw error
    }
};

export default getArtist;
