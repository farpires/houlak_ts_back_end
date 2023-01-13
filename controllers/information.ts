import { Request, Response } from "express";
import Information from "../models/information";

export const postInformation = async (req: Request, res: Response) => {
    try {
        const { artistName } = req.body;
        const ip:string | undefined = req.header('x-forwarded-for') || req.socket.remoteAddress; // or you can req.ip
        const userDate: Date = new Date();
        res.json(await Information.create({ip,userDate,artistName}));
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'contact admin',
        })
    }
}