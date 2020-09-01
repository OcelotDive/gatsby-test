import React, { useState } from "react";

import companyStyles from "./company.module.css";

const CompanyAccounts = () => {

let [activeAccountsButton, setActiveAccountsButton] = useState([0,0,0,0]);

const handleAccountsClick = (e) => {

    switch(e.target.innerHTML) {
        case ("Income Statement"):
            activeAccountsButton[0] === 1 ? setActiveAccountsButton([0,0,0,0]) : setActiveAccountsButton([1,0,0,0]);
        break;
        case ("Balance Sheet"):
            activeAccountsButton[1] === 1 ? setActiveAccountsButton([0,0,0,0]) : setActiveAccountsButton([0,1,0,0]);
        break;
        case ("Cash Flow"):
            activeAccountsButton[2] === 1 ? setActiveAccountsButton([0,0,0,0]) : setActiveAccountsButton([0,0,1,0]);
        break;
        case ("Financial Ratios"):
            activeAccountsButton[3] === 1 ? setActiveAccountsButton([0,0,0,0]) : setActiveAccountsButton([0,0,0,1]);
        break;
        default:
            setActiveAccountsButton([0,0,0,0]);
        break;    
    }
}

    return (
        <>
        <section className={companyStyles.accountsContainer}>
            <div className={companyStyles.accountsButtonContainer} onClick={handleAccountsClick}>
            <button className={activeAccountsButton[0] === 1 ? "globalAccountsButton highlighted" : "globalAccountsButton"} type="button" aria-label="graphButton" name="graphButton">Income Statement</button>
            <button className={activeAccountsButton[1] === 1 ? "globalAccountsButton highlighted" : "globalAccountsButton"} type="button" aria-label="graphButton" name="graphButton">Balance Sheet</button>
            <button className={activeAccountsButton[2] === 1 ? "globalAccountsButton highlighted" : "globalAccountsButton"} type="button" aria-label="graphButton" name="graphButton">Cash Flow</button>
            <button className={activeAccountsButton[3] === 1 ? "globalAccountsButton highlighted" : "globalAccountsButton"} type="button" aria-label="graphButton" name="graphButton">Financial Ratios</button>
          </div>
        </section>
        </>
    )
}

export default CompanyAccounts;