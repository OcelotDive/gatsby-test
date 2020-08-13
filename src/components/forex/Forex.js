import React, { useEffect, useState } from "react";
import ForexImage from "./ForexImage";

import Key from "../../keys";
import forexStyles from "./forexStyles.module.css"; 


const Forex = () => {

    const forexUrl = "https://financialmodelingprep.com/api/v3/forex";
    let [forexList, setForexList] = useState([]);



    useEffect(() => {
        fetch(`${forexUrl}${Key.fmpk}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.forexList)
          setForexList(data.forexList);
        });
      }, []);


    const sortPair = () => {
        let sorted = forexList.sort((a, b) => {
            if(a.ticker < b.ticker) { return -1}
            if(a.ticker > b.ticker) {return 1}
            return 0;
            setForexList([...sorted])
        })
        console.warn(sorted);
    }

    return (
        <>
        <h4 className="pageHeader">WORLD CURRENCIES - FOREIGN EXCHANGE RATES</h4>
        <main className="mainContentContainer">
        <section className={forexStyles.tableContainer}>
    <table>
        <tbody>
        <tr>
            <th className={forexStyles.tableHeader}></th>
            <th className={forexStyles.tableHeader}>PAIR <span className={forexStyles.triDown} onClick={sortPair}></span></th>
            <th className={forexStyles.tableHeader}>PRICE <span className={forexStyles.triDown}></span></th>
            <th className={forexStyles.tableHeader}>CHANGE <span className={forexStyles.triDown}></span></th>
            <th className={forexStyles.tableHeader}>CHANGE(%)</th>
        </tr>

        { forexList.map(forex => {
        const changeClass = forex.changes > 0 ? "forexPricePositive" : forex.changes <  0 ? "forexPriceNegative" : "forexPriceNull";
        return (
        <tr key={forex.ticker}>
           <td className={forexStyles.forexImage}> <ForexImage src={forex.ticker.replace('/', '') + ".png"} /></td>
            <td className={forexStyles.forexPriceNull}>{forex.ticker}</td>
            <td className={forexStyles.forexPriceNull}>{forex.ask}</td>
            <td className={forexStyles[changeClass]}>{forex.changes.toFixed(4)}</td>
            <td className={forexStyles[changeClass]}>({((forex.changes.toFixed(4) / (forex.ask)) * 100).toFixed(2)})</td>
        </tr>
        )
            })
            }
            </tbody>
    </table>
</section>
        </main>
        </>
    )
}


export default Forex;