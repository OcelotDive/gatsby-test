import React, { useEffect, useState } from "react";


import Key from "../../keys";
import comStyles from "./comStyles.module.css"; 


const Commodities = () => {

    const majorCommoditiesUrl = 'https://financialmodelingprep.com/api/v3/quote/GCUSD,SIUSD,CLUSD,KCUSX,CUSX,SBUSX,NGUSD,LCUSX,HGUSD,PLUSD,CCUSD,OUSX';

    let [commoditiesList, setCommoditiesList] = useState([]);

    useEffect(() => {
        fetch(`${majorCommoditiesUrl}${Key.fmpk}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCommoditiesList(data);
        });
      }, []);

      

    return (
        <>
        <h4 className="pageHeader">MAJOR COMMODITIES</h4>
        <main className="mainContentContainer">
        <table>
            <tbody>
                <tr>
                    <th className="tableHeader">SYMBOL</th>
                    <th className="tableHeader" >NAME<span></span></th>
                    <th className="tableHeader" >PRICE <span></span></th>
                    <th className="tableHeader" >CHANGE <span></span></th>
                    <th className="tableHeader">CHANGE(%)</th>
                </tr>

             { commoditiesList.map(com => {
                const changeClass = com.change > 0 ? "pricePositive" : com.change <  0 ? "priceNegative" : "priceNull";
                return (
                 <tr>
                    <td className="priceNull">{com.symbol}</td>
                    <td className="priceNull">{com.name}</td>
                    <td className="priceNull">${com.price.toFixed(2)}</td>
                    <td className={changeClass}>{com.change}</td>
                    <td className={changeClass}>({com.changesPercentage})</td>
                </tr>
                )
                })
            }
            </tbody>
        </table>
        </main>
        </>
    )
}


export default Commodities;