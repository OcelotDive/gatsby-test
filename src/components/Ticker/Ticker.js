import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Key from "../../keys";
import tickerStyles from "./tickerStyles.module.css";

const Ticker = () => {
    
    const tickerUrl = "https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,MSFT,NVDA";
    let [tickerData, setTickerData] = useState([]);

    useEffect(() => {
    fetch(`${tickerUrl}${Key.fmpk}`)
    .then((response) => response.json())
    .then((data) => {
        console.log("ticker data", data)
      setTickerData(data);
    }) 
 
}, []);

    const getSymbols = (tickerData) => {
     return   tickerData.map(symbol => {
            let changeClass = symbol.change > 0 ? "positiveChange" : symbol.change < 0 ? "negativeChange" : "stockQuote";
            return (
         <div className={tickerStyles.tickerStock} key={symbol.symbol}>
         <Link style={{textDecoration: "none", display: "flex"}} to={`/company-page/#${symbol.symbol}`}>   
         <span className={tickerStyles.stockQuote} >{symbol.symbol} {symbol.price}
         <span className={tickerStyles[changeClass]}> {symbol.change} ({symbol.changesPercentage})</span>
         </span>
         </Link>
         </div>
            )
            })
        }

    return (  
     <section className={tickerStyles.ticker}>
        <div className={tickerStyles.tickerWrapper}>
            {getSymbols(tickerData)}   
        </div>
        <div className={tickerStyles.tickerWrapper2}>
            {getSymbols(tickerData)}
        </div>
     </section>   
    )
}



export default Ticker;