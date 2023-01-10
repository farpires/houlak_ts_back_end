import { Request, Response } from "express";
import { TGetArtistData } from "../models/IArtist";
import { TGetArtist } from "../models/ISearch";
import getArtistData from "../service/artist";
import getArtists from "../service/search";


export const getArtist = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const artist: TGetArtist = await getArtists('artist', `${name}`);
        const albumInformation: TGetArtistData = await getArtistData(artist.id, 'albums');
        res.status(200).json(albumInformation)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'contact admin',
        })
    }

}
