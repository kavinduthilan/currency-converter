import axios from 'axios';

const getExchageRates = async (base) => {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${base}`);
    return response.data;
};

export default getExchageRates;