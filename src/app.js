import express from 'express'
import config from './config/config';

import productsRoutes from './routes/products.routes'

const app = express();

//settings
app.set('port', config.port)

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/Api/products/',productsRoutes)
export default app