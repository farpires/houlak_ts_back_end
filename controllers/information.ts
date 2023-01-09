import { Request, Response } from "express";
import Information from "../models/information";

export const postInformation = async (req: Request, res: Response) => {

    const {body} = req;
    
    try {
        const result = await Information.create(body);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
        msg: 'contact admin',
        })
    }    
}