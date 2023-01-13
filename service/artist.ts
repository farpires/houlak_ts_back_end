import CONFIG from "../config";
import getToken from "./token";
import axios from 'axios';
import { IToken } from "../models/IToken";
import { IArtistData, TGetArtistData } from "../models/IArtist";
const { BASE_URL } = CONFIG;

const getArtistData = async (artistId: string, dataType: string): Promise<TGetArtistData> => {
    try {

        const albunes: IArtistData[] = []
        const token: IToken = await getToken();
        const artistData = await axios.get(`${BASE_URL}/v1/artists/${artistId}/${dataType}`,
            { headers: { 'Authorization': `Bearer ${token.access_token}` } });
        const items = artistData.data.items
        for (let i = 0; i < items.length; i++) {
            let info = await axios.get(`${items[i].href}`,
                { headers: { 'Authorization': `Bearer ${token.access_token}` } });
            albunes.push({
                artists: info.data.artists,
                images: info.data.images,
                label: info.data.label,
                name: info.data.name,
                popularity: info.data.popularity,
                external_urls: info.data.external_urls.spotify,
            });

        };
        albunes.sort(function (a, b) { return b.popularity - a.popularity });
        return albunes;
    } catch (error) {
        throw error
    }
};


export default getArtistData;