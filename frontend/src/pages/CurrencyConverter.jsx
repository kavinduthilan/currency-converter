import { useState } from 'react'

const CurrencyConverter = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="currency-converter-content">
        <div>Amount</div>
        <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <div>From</div>
        <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <div>To</div>
        <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <button>Convert</button>
      </div>
    </div>
  )
}

export default CurrencyConverter
