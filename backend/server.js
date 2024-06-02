import express from 'express';
import {connectDB} from './config/db.js';
import exchangeRateRoutes from './routes/exchangeRateRoutes.js';
import cors from 'cors';

connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from this origin
}));

app.use('/api/exchange-rates', exchangeRateRoutes);


const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));