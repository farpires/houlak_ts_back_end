import { Request, Response } from "express";

export const postInformation = (req: Request, res: Response) => {

    const {body} = req;
    
    res.json({
        msg: 'postInformation',
        body
    })
}