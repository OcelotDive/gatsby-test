import React, { useState, useEffect } from "react";
import IncomeStatement from "./statements/IncomeStatement";
import BalanceStatement from "./statements/BalanceStatement";
import Key from "../../keys";
import companyStyles from "./company.module.css";
import axios from "axios"

const CompanyAccounts = ({symbol}) => {
let [activeAccountsButton, setActiveAccountsButton] = useState([0,0,0,0]);
let [incomeStatements, setIncomeStatements] = useState([]);
let [balanceStatements, setBalanceStatements] = useState([]);

      const annualIncomeStatementUrl = 'https://financialmodelingprep.com/api/v3/financials/income-statement/';
       const annualBalanceStatementUrl = 'https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/';
        const annualCashFlowStatement = 'https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/';
        const ratioUrl = 'https://financialmodelingprep.com/api/v3/financial-ratios/';


        const scroll = () => {
            setTimeout(() => {
                window.scrollTo(0, 870);
            }, 0)
        }
      

     useEffect(() => {
         if(activeAccountsButton[0] === 1) {
        const fetchData = async () => {
          const result = await axios(`${annualIncomeStatementUrl}${symbol}${Key.fmpk}`,);
            if(Object.keys(result.data).length > 0) {
            setIncomeStatements(result.data.financials.slice(0, 11))
            }
        }
        fetchData();
    }
        else if (activeAccountsButton[1] === 1) {
            const fetchData = async () => {
                const result = await axios(`${annualBalanceStatementUrl}${symbol}${Key.fmpk}`,);
                console.warn("this is balance", result)
                  if(Object.keys(result.data).length > 0) {
                    setBalanceStatements(result.data.financials.slice(0, 11));
                  }
              }
              fetchData();
        }

          }, [activeAccountsButton])



const handleAccountsClick = (e) => {

    switch(e.target.innerHTML) {
        case ("Income Statement"):
            activeAccountsButton[0] === 1 ? setActiveAccountsButton([0,0,0,0]) : setActiveAccountsButton([1,0,0,0]);
            scroll();
        break;
        case ("Balance Sheet"):
            activeAccountsButton[1] === 1 ? setActiveAccountsButton([0,0,0,0]) : setActiveAccountsButton([0,1,0,0]);
            scroll();
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
        {activeAccountsButton[0] === 1 ? <IncomeStatement incomeStatements={incomeStatements}/>
        : 
        activeAccountsButton[1] === 1 ? <BalanceStatement balanceStatements={balanceStatements} />
        :
        <div></div>
        }
        </>
    )
}

export default CompanyAccounts;