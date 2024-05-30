import axios from 'axios';

export const getExchangeRates = async (base) => {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${base}`);
    return response.data;
};
