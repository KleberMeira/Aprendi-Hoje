
import { Request, Response } from "express";

const users = [
    { name: 'Kleber', email: 'kleber@gmail.com'},
]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    }
};