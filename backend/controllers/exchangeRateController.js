import { ExchangeRateModel } from "../models/exchangeRateModel.js";
import { getExchangeRates} from "../services/exchageRateService.js";

export const fetchAndSaveRates = async (req, res) => {
    try {
        const { base } = req.params;
        const data = await getExchangeRates(base);

        let exchangeRate = await ExchangeRateModel.findOne({ base: base.toUpperCase() });

        if (exchangeRate) {
            exchangeRate.rates = data.rates;
            exchangeRate.date = new Date();
        } else {
            exchangeRate = new ExchangeRateModel({
                base: base.toUpperCase(),
                rates: data.rates,
            });
        }

        await exchangeRate.save();

        res.json(exchangeRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
