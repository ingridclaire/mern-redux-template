import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import path from 'path';
import cors from 'cors';
import colors from 'colors'
import routes from './routes';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const PORT = process.env.PORT || 5000;

dotenv.config()
connectDB()

const app = express();
app.use(express.json())
app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('api is running...');
})



app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));