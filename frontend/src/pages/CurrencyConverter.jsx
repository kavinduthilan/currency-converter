import { useState } from 'react'
import './CurrencyConverter.scss'
import axios from 'axios'

const CurrencyConverter = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convertedCurrency = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/exchange-rates/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      setConvertedAmount(amount * rate);
      //console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
    } catch (error) {
      console.error(error);
    }
    
   }

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="currency-converter-content">
        <div className='amount'>
          <p>Amount</p>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <div className='from'>
          <p>From</p>
          <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        
        <div className='to'>
          <p>To</p>
          <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
      <button onClick={convertedCurrency}>Convert</button>
      <div className='result'>
        {convertedAmount >0 && <div>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</div>}
      </div>
    </div>
  )
}

export default CurrencyConverter


