import express from 'express';
import { fetchAndSaveRates } from '../controllers/exchangeRateController.js';

const router = express.Router();

router.get('/:base', fetchAndSaveRates);

export default router;