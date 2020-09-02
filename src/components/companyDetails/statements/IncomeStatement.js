import React from "react";
import Utils from "../../../utils";
import companyStyles from "../company.module.css";
const IncomeStatement = ({incomeStatements}) => {

console.log(incomeStatements)

const format = (digit) => {
    return digit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function handleCsvClick() {
  
  
	Utils.exportTableToCsv("table.csv");
};




    return (
        <>
        <h4 className={companyStyles.statementHeader}>Income Statement</h4>

<section className={companyStyles.financialTableContainer}>
    <button className={companyStyles.downloadToCsvButton} onClick={handleCsvClick}>Download To Csv</button>
    <table className={companyStyles.financialTable} >
            <tbody>
        <tr>
            <th>Year</th>
            {incomeStatements.map(statement => {
             return  <td className={companyStyles.thData}>
                    {statement.date.substring(0, 4)}
                    </td>
            })}
        </tr>
        <tr>
            <th>Revenue</th>
            {incomeStatements.map(statement => {
             return <td> 
                    {format(parseInt(statement["Revenue"] / 1000000).toFixed(2))}
                    </td>
            })}
            
        </tr>
        <tr>
            <th>Cost of Revenue</th>
            {incomeStatements.map(statement => {
             return   <td>
                     {format(parseInt(statement["Cost of Revenue"] / 1000000).toFixed(2))}
                      </td>
            })}
            
        </tr>
        <tr>
            <th>Gross Profit</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Gross Profit"] / 1000000).toFixed(2))}
                   </td>
            })}

        </tr>
        <tr>
            <th>R&D Expenses</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["R&D Expenses"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Sales & Admin Expense</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["SG&A Expense"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Operating Expenses</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Operating Expenses"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Operating Income</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Operating Income"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Interest Expense</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Interest Expense"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Earnings before Tax</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Earnings before Tax"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Income Tax Expense</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Income Tax Expense"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Net Income</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Net Income"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Net Income - Non-Controlling int</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Net Income - Non-Controlling int"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Net Income - Discontinued ops</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Net Income - Discontinued ops"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Net Income Com</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(parseInt(statement["Net Income Com"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>EPS</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["EPS"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>EPS Diluted</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["EPS Diluted"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Weighted Av Shs Out</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Weighted Average Shs Out"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Weighted Av Shs Out (Dil)</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Weighted Average Shs Out (Dil)"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Dividend per Share</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Dividend per Share"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Gross Margin</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Gross Margin"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>EBITDA Margin</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["EBITDA Margin"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>EBIT Margin</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["EBIT Margin"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Profit Margin</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Profit Margin"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Free Cash Flow Margin</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Free Cash Flow margin"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>EBITDA</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["EBITDA"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>EBIT</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["EBIT"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Consolidated Income</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Consolidated Income"] / 1000000).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Earnings Before Tax Margin</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Earnings Before Tax Margin"]).toFixed(2))}
                   </td>
            })}
        </tr>
        <tr>
            <th>Net Profit Margin</th>
            {incomeStatements.map(statement => {
            return <td>
                    {format(Number(statement["Net Profit Margin"]).toFixed(2))}
                   </td>
            })}
        </tr>
        </tbody>
    </table>

</section>
        </>
    )
}

export default IncomeStatement;