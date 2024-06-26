import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';

import {getConnection} from './database/connection.js'
import { routes } from './routes/index.js'
import './model/index.model.js'
import './model/relations.model.js'
export class Server {
    #app;

    constructor() {
        this.#app = express();
        this.configuration();
        this.middlewares();
        this.routes();
        getConnection();
    }
    configuration() {
        this.#app.set('port', 3000);
    }

    middlewares() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        this.#app.use(morgan('dev'));
        this.#app.use(cors());
        this.#app.use(express.static(path.join(__dirname, './resource/imagesdb')));
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
