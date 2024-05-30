import express from 'express';
import {connectDB} from './config/db.js';
import exchangeRateRoutes from './routes/exchangeRateRoutes.js';

connectDB();

const app = express();

app.use('/api/exchange-rates', exchangeRateRoutes);


const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));