import { Request, Response } from "express";

export const getArtist = (req: Request, res: Response) => {

    const { name } = req.params;
    
    res.json({
        msg: 'getArtist',
        name
    })
}
