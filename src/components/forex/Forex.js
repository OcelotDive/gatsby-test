import React, { useEffect, useState } from "react";
import ForexImage from "./ForexImage";

import Key from "../../keys";
import forexStyles from "./forexStyles.module.css"; 


const Forex = () => {

    const forexUrl = "https://financialmodelingprep.com/api/v3/forex";
    
    let [forexList, setForexList] = useState([]);
    let [pairSorted, setPairSorted] = useState(false);
    let [priceSorted, setPriceSorted] = useState(false);
    let [changeSorted, setChangeSorted] = useState(false);
  
    const pairClass = !pairSorted ? "triDown" : "triUp";
    const priceClass = !priceSorted ? "triDown" : "triUp";
    const changeClass = !changeSorted ? "triDown" : "triUp";

    useEffect(() => {
        fetch(`${forexUrl}${Key.fmpk}`)
        .then((response) => response.json())
        .then((data) => {
          setForexList(data.forexList);
        });
      }, []);


    const sortPair = (param) => {
        if(!pairSorted) {
        forexList.sort((a, b) => {
            if(a.ticker < b.ticker) { return -1}
            if(a.ticker > b.ticker) {return 1}
            return 0; 
        })
        setPriceSorted(false);
        setChangeSorted(false);
        setPairSorted(!pairSorted);
    }
    else {
            forexList.sort((a, b) => {
                if(a.ticker > b.ticker) { return -1}
                if(a.ticker < b.ticker) {return 1}
                return 0; 
            })
            setPriceSorted(false);
            setChangeSorted(false);
            setPairSorted(!pairSorted);
    }
        setForexList([...forexList]);
    }

    const priceSort = (param) => {
        if(!priceSorted) {
        forexList.sort((a, b) => Number(a.ask)-Number(b.ask));
        }
        else {
            forexList.sort((a, b) => Number(b.ask)-Number(a.ask));
        }
        setPairSorted(false);
        setChangeSorted(false);
        setPriceSorted(!priceSorted);
        setForexList([...forexList]);
    }

    const changeSort = (param) => {
        if(!changeSorted) {
        forexList.sort((a, b) => Number(a.changes)-Number(b.changes));
        }
        else {
            forexList.sort((a, b) => Number(b.changes)-Number(a.changes));
        }
        setPairSorted(false);
        setPriceSorted(false);
        setChangeSorted(!changeSorted);
        setForexList([...forexList]);
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
            <th className={forexStyles.tableHeader} onClick={sortPair}>PAIR <span className={forexStyles[pairClass]}></span></th>
            <th className={forexStyles.tableHeader} onClick={priceSort}>PRICE <span className={forexStyles[priceClass]}></span></th>
            <th className={forexStyles.tableHeader} onClick={changeSort}>CHANGE <span className={forexStyles[changeClass]}></span></th>
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