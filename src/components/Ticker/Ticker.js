import React from "react";
import PropTypes from "prop-types";

import tickerStyles from "./tickerStyles.module.css";

const Ticker = ({ticker}) => {

    const getSymbols = (ticker) => {
     return   ticker.map(symbol => {
            let changeClass = symbol.change > 0 ? "positiveChange" : symbol.change < 0 ? "negativeChange" : "stockQuote";
            return (
            <span className={tickerStyles.stockQuote} key={symbol.symbol}>{symbol.symbol} {symbol.price}
            <span className={tickerStyles[changeClass]}> {symbol.change} ({symbol.changesPercentage})</span>
            </span>
            )
            })
        }

    return (  
     <section className={tickerStyles.ticker}>
        <div className={tickerStyles.tickerWrapper}>
            {getSymbols(ticker)}   
        </div>
        <div className={tickerStyles.tickerWrapper2}>
            {getSymbols(ticker)}
        </div>
     </section>   
    )
}

Ticker.propTypes = {
    ticker: PropTypes.arrayOf(PropTypes.object)
}

export default Ticker;