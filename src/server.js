import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import {Connection} from './models/products.model'
import { routes } from './routes/index'


export class Server {
    #app;

    constructor() {
        this.#app = express();
        this.configuration();
        this.middlewares();
        this.routes();
        Connection();
    }
    configuration() {
        this.#app.set('port', 3000);
    }

    middlewares() {
        this.#app.use(morgan('dev'));
        this.#app.use(cors());
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: false }))
    }
    routes() {
        this.#app.use('/Api', routes.productRoutes)
    }

    listen() {
        this.#app.listen(this.#app.get('port'), () => {
            console.log(`El servidor esta corriendo en el puerto ${this.#app.get('port')}`)
        })
    }

}
