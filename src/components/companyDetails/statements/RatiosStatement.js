import React from "react";
import Utils from "../../../utils";
import companyStyles from "../company.module.css";



const RatiosStatement = ({ratiosStatements}) => {



function handleCsvClick() {
	Utils.exportTableToCsv("table.csv");
};




    return (
        <>
       <h4 className={companyStyles.statementHeader}>Investment Valuation Ratios</h4>

<section className={companyStyles.financialTableContainer}>
    <button className={companyStyles.downloadToCsvButton} onClick={handleCsvClick}>Download To Csv</button>
    <table className={companyStyles.financialTable}>
            <tbody>
        <tr>
            <th>Year</th>
            {ratiosStatements.map(statement => {
             return  <td className={companyStyles.thData}>
                    {statement.date.substring(0, 4)}
                    </td>
            })}
        </tr>
        <tr>
            <th>Price Book Value Ratio</th>
            {ratiosStatements.map(statement => {
             return <td> 
                    {Number(statement["investmentValuationRatios"]["priceBookValueRatio"]).toFixed(2)}%
                    </td>
            })}
            
        </tr>
        <tr>
            <th>Price To Book Ratio</th>
            {ratiosStatements.map(statement => {
             return   <td>
                     {Number(statement["investmentValuationRatios"]["priceToBookRatio"]).toFixed(2)}%
                      </td>
            })}
            
        </tr>
        <tr>
            <th>Price To Sales Ratio</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["priceToSalesRatio"]).toFixed(2)}%
                   </td>
            })}

        </tr>
        <tr>
            <th>Price Earning Ratio</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["priceEarningsRatio"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Receivables Turnover</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["receivablesTurnover"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Price To Free CashFlows Ratio</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["priceToFreeCashFlowsRatio"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Price To Operating CashFlows Ratio</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["priceToOperatingCashFlowsRatio"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Price CashFlow Ratio</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["priceCashFlowRatio"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Price Earnings To Growth Ratio</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["priceEarningsToGrowthRatio"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Price Sales Ratio</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["priceSalesRatio"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Dividend Yield</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["dividendYield"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Enterprise Value Multiple</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["enterpriseValueMultiple"]).toFixed(2)}%
                   </td>
            })}
        </tr>
        <tr>
            <th>Price Fair Value</th>
            {ratiosStatements.map(statement => {
            return <td>
                    {Number(statement["investmentValuationRatios"]["priceFairValue"]).toFixed(2)}%
                   </td>
            })}
        </tr>
      
     
        </tbody>
    </table>

</section>
        </>
    )
}

export default RatiosStatement;