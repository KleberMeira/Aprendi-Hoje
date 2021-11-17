import express, { application } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App {

    public express: express.Application

    constructor(){
        this.express = express()

        this.middlewares()
        //this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database (): void{
        mongoose.connect('mongodb://localhost:27017/tsnode'), {
            userNewUrlParse: true
        }
    }

    private routes (): void {
        this.express.get('/', (req, res) => {
            return res.send('Hello Word')
        })
    }


}

export default new App().express