import Queue from '../lib/Queue';

export default{
    async store(req, res){
        const {name, email, password} = req.body


        const user = {
            name,
            email,
            password,
        };

        //enviar um email --> Retorna uma promisse

        //Adicionar job RegistrationMail na Fila
        await Queue.add({user})

        return res.json(user);

  }
};