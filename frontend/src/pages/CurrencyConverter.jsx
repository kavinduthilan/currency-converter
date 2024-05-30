import { useState } from 'react'
import './CurrencyConverter.scss'

const CurrencyConverter = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

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
      <button>Convert</button>
    </div>
  )
}

export default CurrencyConverter
