import { Request, Response } from 'express'

import User from '../schema/User'

class UserController{

    //Retorna todos os usuarios
    public async index (req: Request, res: Response): Promise<Response> {
        
        console.log('Buscando Usuarios');
        
        const users = await User.find()

        return res.json(users)

    }

    public async create (req: Request, res: Response): Promise<Response>{

        console.log('Inserindo Novo Usuario');
        
        const user = await User.create(req.body)

        return res.json(user)
    }

    public async buscarPorEmail(req: Request, res: Response): Promise<Response>{

        console.log('Buscando por Id');

        console.log('res',req.body);
        

        const user = await User.find({firstName: "Kleber"})

        return res.json(user)

    }

}

export default new UserController()