import React, { useEffect, useState } from "react";
import CryptoImage from "./CryptoImage";

import Key from "../../keys";



const CryptoCurrency = () => {

    const cryptoCurrencyUrl = "https://financialmodelingprep.com/api/v3/cryptocurrencies";

    let [dataList, setDataList] = useState([]);
    let [nameSorted, setNameSorted] = useState(false);
    let [priceSorted, setPriceSorted] = useState(false);
    let [changeSorted, setChangeSorted] = useState(false);
    const nameClass = !nameSorted ? "triDown" : "triUp";
    const priceClass = !priceSorted ? "triDown" : "triUp";
    const changeClass = !changeSorted ? "triDown" : "triUp";

    useEffect(() => {
        fetch(`${cryptoCurrencyUrl}${Key.fmpk}`)
        .then((response) => response.json())
        .then((data) => {
         
          setDataList(data.cryptocurrenciesList);
        });
      }, []);


      const nameSort = () => {
          console.log("name")
        if(!nameSorted) {
        dataList.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) {return -1}
            if(a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
            return 0; 
        })
        setPriceSorted(false);
        setChangeSorted(false);
        setNameSorted(!nameSorted);
    }
    else {
            dataList.sort((a, b) => {
                if(a.name > b.name) { return -1}
                if(a.name < b.name) {return 1}
                return 0; 
            })
            setPriceSorted(false);
            setChangeSorted(false);
            setNameSorted(!nameSorted);
    }
        setDataList([...dataList]);
    }

    const priceSort = () => {
        if(!priceSorted) {
        dataList.sort((a, b) => Number(a.price)-Number(b.price));
        }
        else {
            dataList.sort((a, b) => Number(b.price)-Number(a.price));
        }
        setNameSorted(false);
        setChangeSorted(false);
        setPriceSorted(!priceSorted);
        setDataList([...dataList]);
    }

    const changeSort = () => {
        if(!changeSorted) {
        dataList.sort((a, b) => Number(a.changes)-Number(b.changes));
        }
        else {
            dataList.sort((a, b) => Number(b.changes)-Number(a.changes));
        }
        setNameSorted(false);
        setPriceSorted(false);
        setChangeSorted(!changeSorted);
        setDataList([...dataList]);
    }

      

    return (
        <>
        <h4 className="pageHeader">Cryptocurrency</h4>
        <main className="mainContentContainer">
        <table>
            <tbody>
                <tr>
                <th className="tableHeader">Symbol</th>
                    <th className="tableHeader" onClick={nameSort}>NAME<span className={nameClass}></span></th>
                    <th className="tableHeader" onClick={priceSort}>PRICE <span className={priceClass}></span></th>
                    <th className="tableHeader" onClick={changeSort}>CHANGE <span className={changeClass}></span></th>
                    <th className="tableHeader">CHANGE(%)</th>
                </tr>

             { dataList.map(crypto => {
                
                const changeClass = crypto.changes > 0 ? "pricePositive" : crypto.changes <  0 ? "priceNegative" : "priceNull";
                return (
                 <tr key={crypto.name}>
                 <td className="priceNull">{crypto.ticker}</td>
                    <td className="priceNull">{crypto.name}</td>
                    <td className="priceNull">${crypto.price.toFixed(2)}</td>
                    <td className={changeClass}>{crypto.changes}</td>
                    <td className={changeClass}>({((crypto.changes /crypto.price) * 100).toFixed(2)})</td>
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


export default CryptoCurrency;