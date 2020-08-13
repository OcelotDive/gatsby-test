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


    return (
        <>
        <h4 className="pageHeader">WORLD CURRENCIES - FOREIGN EXCHANGE RATES</h4>
        <main className="mainContentContainer">
        <section className={forexStyles.tableContainer}>
    <table>
        <tbody>
        <tr>
            <th></th>
            <th>PAIR</th>
            <th>PRICE</th>
            <th>CHANGE</th>
            <th>CHANGE(%)</th>
        </tr>

        { forexList.map(forex => {
    
        return (
        <tr>
            <ForexImage src={forex.ticker.replace('/', '') + ".png"} />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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