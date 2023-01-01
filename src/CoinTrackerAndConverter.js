import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [usd, setUsd] = useState(0);
    const [amount, setAmount] = useState(0);
    const onChange = (event) => setUsd(event.target.value);
    const onSelect = (event) => {
        setAmount(event.target.value);
        setUsd(0);
    }
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
                //convertToBtc(json[0].quotes.USD.price);
            }); 
    }, [])
    return (<div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        <input 
            value={usd} 
            onChange={onChange} 
            type="number" 
            placeholder="Input USD"
        />
        {loading ? <strong>Loading...</strong> : 
        <select onChange={onSelect}>
            {coins.map((coin, index) => (
                <option 
                    key={index}
                    value={coin.quotes.USD.price}
                    id={coin.name}
                    symbol={coin.symbol}>
                    {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} {coin.symbol} 
                </option>
            ))}
        </select>}
        
        <h3>{usd/amount}</h3>
    </div>);
}

export default App;