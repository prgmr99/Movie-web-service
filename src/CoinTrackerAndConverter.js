import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [usd, setUsd] = useState(0);
    const [btc, convertToBtc] = useState(0);
    const onChange = (event) => setUsd(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(setUsd === 0) {
            return;
        }
        convertToBtc((current) => usd/(current));
        setUsd(0);
    }
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
                convertToBtc(json[0].quotes.USD.price);
            }); 
    }, [])
    return (<div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        <form onSubmit={onSubmit}>
            <input 
                value={usd} 
                onChange={onChange} 
                type="number" 
                placeholder="Input USD"
            />
        </form>
        {loading ? <strong>Loading...</strong> : 
        <select>
            {coins.map((coin, index) => (
                <option key={index}>
                    {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} - ${usd / coin.quotes.USD.price} {coin.symbol} 
                </option>
            ))}
        </select>}
        
        <h3>{btc}</h3>
    </div>);
}

export default App;