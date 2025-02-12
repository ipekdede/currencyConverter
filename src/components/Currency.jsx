import '../css/currency.css'

import { LuCircleArrowRight } from "react-icons/lu";
import axios from 'axios'
import { useState } from 'react';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_PHGeJ3MHbBtFNg7GfIn1GO4YckBatnbn0SEFoqbE";

function Currency() {

  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState ();

  const exchange = async () => {
    // console.log(amount)
    // console.log(fromCurrency)
    // console.log(toCurrency)
    // console.log(result)
    const response= await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
    console.log(response.data.data[toCurrency]) //console a baktığımızda data sını içindeki datada mevcut veriler o yüzden .data.data dedik
    const result = (response.data.data[toCurrency] * amount).toFixed(2)
    setResult(result)
  }

  return (
    <div className='currency-div'>
      <div className='title'>
        <h3>CURRENCY CONVERTER</h3>
      </div>
      <div style={{marginTop: '25px'}}>
        <input 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number" className='amount'/>
        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
          <option>USD</option>
          <option>EUR</option>
          <option>TL</option>
        </select>

        <LuCircleArrowRight className='iconArrow' />

        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
          <option>TL</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result'/>
      </div>
      <div>
        <button 
        onClick={exchange}
        className='exchange-button'>CONVERT</button>
      </div>
    </div>
  )
}

export default Currency