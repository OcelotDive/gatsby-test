import React from "react";
import Utils from "../../../utils";
import companyStyles from "../company.module.css";
const BalanceStatement = ({balanceStatements}) => {




function handleCsvClick() {
	Utils.exportTableToCsv("table.csv");
};




    return (
        <>
        <h4 className={companyStyles.statementHeader}>Balance Sheet</h4>

<section className={companyStyles.financialTableContainer}>
    <button className={companyStyles.downloadToCsvButton} onClick={handleCsvClick}>Download To Csv</button>
    <table className={companyStyles.financialTable} >
            <tbody>
        <tr>
            <th>Year</th>
            {balanceStatements.map(statement => {
             return  <td className={companyStyles.thData}>
                    {statement.date.substring(0, 4)}
                    </td>
            })}
        </tr>
        <tr>
            <th>Cash and cash equivalents</th>
            {balanceStatements.map(statement => {
             return <td> 
                    {Utils.format(parseInt(statement["Cash and cash equivalents"] / 1000000).toFixed(2))}
                    </td>
            })}
            
        </tr>
        <tr>
            <th>Short-term investments</th>
            {balanceStatements.map(statement => {
             return   <td>
                     {Utils.format(parseInt(statement["Short-term investments"] / 1000000).toFixed(2))}
                      </td>
            })}
            
        </tr>
        <tr>
            <th>Cash and short-term investments</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Cash and short-term investments"] / 1000000).toFixed(2))}
                   </td>
            })}

        </tr>
        <tr>
            <th>Receivables</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Receivables"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Inventories</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Inventories"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Property, Plant & Equipment Net</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Property, Plant & Equipment Net"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Goodwill and Intangible Assets</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Goodwill and Intangible Assets"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Long-term investments</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Long-term investments"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Tax Assets</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Tax assets"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Total non-current Assets</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Total non-current assets"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Total Current Assets</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Total current assets"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Total Assets</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Total assets"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Payables</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Payables"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Short-term debt</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Short-term debt"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Total current liabilities</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(parseInt(statement["Total current liabilities"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Long-term debt</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Long-term debt"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Total debt</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Total debt"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Deferred revenue</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Deferred revenue"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Tax Liabilities</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Tax Liabilities"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Deposit Liabilities</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Deposit Liabilities"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Total non-current liabilities</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Total non-current liabilities"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Total liabilities</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Total liabilities"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Other comprehensive income</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Other comprehensive income"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Retained earnings (deficit)</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Retained earnings (deficit)"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Total shareholders equity</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Total shareholders equity"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Investments</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Investments"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Net Debt</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Net Debt"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Other Assets</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Other Assets"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Other Liabilities</th>
            {balanceStatements.map(statement => {
            return <td>
                    {Utils.format(Number(statement["Other Liabilities"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
     
        </tbody>
    </table>

</section>
        </>
    )
}

export default BalanceStatement;