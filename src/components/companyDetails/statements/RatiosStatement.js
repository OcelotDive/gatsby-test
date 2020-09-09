import React from "react"
import Utils from "../../../utils"
import shortid from "shortid"
import companyStyles from "../company.module.css"

const RatiosStatement = ({ ratiosStatements }) => {
  function handleCsvClick() {
    Utils.exportTableToCsv("table.csv")
  }

  return (
    <>
      <h4 className={companyStyles.statementHeader}>
        Investment Valuation Ratios
      </h4>

      <section className={companyStyles.financialTableContainer}>
        <button
          className={companyStyles.downloadToCsvButton}
          onClick={handleCsvClick}
        >
          Download To Csv
        </button>
        <table className={companyStyles.financialTable}>
          <tbody>
            <tr>
              <th>Year</th>
              {ratiosStatements.map(statement => {
                return (
                  <td className={companyStyles.thData} key={shortid.generate()}>
                    {statement.date.substring(0, 4)}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price Book Value Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "priceBookValueRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price To Book Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"]["priceToBookRatio"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price To Sales Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "priceToSalesRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price Earning Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "priceEarningsRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Receivables Turnover</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "receivablesTurnover"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price To Free CashFlows Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "priceToFreeCashFlowsRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price To Operating CashFlows Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "priceToOperatingCashFlowsRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price CashFlow Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "priceCashFlowRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price Earnings To Growth Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "priceEarningsToGrowthRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price Sales Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"]["priceSalesRatio"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Dividend Yield</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"]["dividendYield"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Enterprise Value Multiple</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"][
                        "enterpriseValueMultiple"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Price Fair Value</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["investmentValuationRatios"]["priceFairValue"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </section>

      <h4 className={companyStyles.statementHeader}>
        Profitability Indicator Ratios
      </h4>

      <section className={companyStyles.financialTableContainer}>
        <table className={companyStyles.financialTable}>
          <tbody>
            <tr>
              <th>Year</th>
              {ratiosStatements.map(statement => {
                return (
                  <td className={companyStyles.thData} key={shortid.generate()}>
                    {statement.date.substring(0, 4)}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Ebt Per EBIT</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"]["ebtperEBIT"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Ebit Per Revenue</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "ebitperRevenue"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Niper EBT</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"]["niperEBT"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Gross Profit Margin</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "grossProfitMargin"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Profit Margin</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "operatingProfitMargin"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Pretax Profit Margin</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "pretaxProfitMargin"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Net Profit Margin</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "netProfitMargin"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Effective Tax Rate</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "effectiveTaxRate"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Return On Assets</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "returnOnAssets"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Return On Equity</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "returnOnEquity"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Return On Capital Employed</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["profitabilityIndicatorRatios"][
                        "returnOnCapitalEmployed"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </section>

      <h4 className={companyStyles.statementHeader}>
        Operating Performance Ratios
      </h4>

      <section className={companyStyles.financialTableContainer}>
        <table className={companyStyles.financialTable}>
          <tbody>
            <tr>
              <th>Year</th>
              {ratiosStatements.map(statement => {
                return (
                  <td className={companyStyles.thData} key={shortid.generate()}>
                    {statement.date.substring(0, 4)}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Receivables Turnover</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["operatingPerformanceRatios"][
                        "receivablesTurnover"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Payables Turnover</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["operatingPerformanceRatios"][
                        "payablesTurnover"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Inventory Turnover</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["operatingPerformanceRatios"][
                        "inventoryTurnover"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Fixed Asset Turnover</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["operatingPerformanceRatios"][
                        "fixedAssetTurnover"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Asset Turnover</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["operatingPerformanceRatios"]["assetTurnover"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </section>

      <h4 className={companyStyles.statementHeader}>
        Liquidity Measurement Ratios
      </h4>

      <section className={companyStyles.financialTableContainer}>
        <table className={companyStyles.financialTable}>
          <tbody>
            <tr>
              <th>Year</th>
              {ratiosStatements.map(statement => {
                return (
                  <td className={companyStyles.thData} key={shortid.generate()}>
                    {statement.date.substring(0, 4)}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Current Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["liquidityMeasurementRatios"]["currentRatio"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Quick Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["liquidityMeasurementRatios"]["quickRatio"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Cash Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["liquidityMeasurementRatios"]["cashRatio"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Days of Sales Outstanding</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["liquidityMeasurementRatios"][
                        "daysOfSalesOutstanding"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Days of Inventory Outstanding</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["liquidityMeasurementRatios"][
                        "daysOfInventoryOutstanding"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Cycle</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["liquidityMeasurementRatios"]["operatingCycle"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Days Of Payables Outstanding</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["liquidityMeasurementRatios"][
                        "daysOfPayablesOutstanding"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Cash Conversion Cycle</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["liquidityMeasurementRatios"][
                        "cashConversionCycle"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </section>

      <h4 className={companyStyles.statementHeader}>Debt Ratios</h4>

      <section className={companyStyles.financialTableContainer}>
        <table className={companyStyles.financialTable}>
          <tbody>
            <tr>
              <th>Year</th>
              {ratiosStatements.map(statement => {
                return (
                  <td className={companyStyles.thData} key={shortid.generate()}>
                    {statement.date.substring(0, 4)}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Debt Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(statement["debtRatios"]["debtRatio"]).toFixed(2)}%
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Debt Equity Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(statement["debtRatios"]["debtEquityRatio"]).toFixed(
                      2
                    )}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Long Term Debt to Capitalization</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["debtRatios"]["longtermDebtToCapitalization"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Debt to Capitalization</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["debtRatios"]["totalDebtToCapitalization"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Interest Coverage</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["debtRatios"]["interestCoverage"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Cash Flow to Debt Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["debtRatios"]["cashFlowToDebtRatio"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Company Equity Multiplier</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["debtRatios"]["companyEquityMultiplier"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </section>

      <h4 className={companyStyles.statementHeader}>
        Cash Flow Indicator Ratios
      </h4>

      <section className={companyStyles.financialTableContainer}>
        <table className={companyStyles.financialTable}>
          <tbody>
            <tr>
              <th>Year</th>
              {ratiosStatements.map(statement => {
                return (
                  <td className={companyStyles.thData} key={shortid.generate()}>
                    {statement.date.substring(0, 4)}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Cash Flow Per Share</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "operatingCashFlowPerShare"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Free Cash Flow Per Share</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "freeCashFlowPerShare"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Cash Per Share</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"]["cashPerShare"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Payout Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"]["payoutRatio"]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Receivables Turnover</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "receivablesTurnover"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Cash Flow Sales Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "operatingCashFlowSalesRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Free Cash Flow Operating Cash Flow</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "freeCashFlowOperatingCashFlowRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Cash Flow Coverage Ratios</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "cashFlowCoverageRatios"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Short Term Coverage Ratios</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "shortTermCoverageRatios"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Capital Expenditure Coverage</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "capitalExpenditureCoverageRatios"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Dividend Paid and Capex Coverage</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "dividendpaidAndCapexCoverageRatios"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Dividend Payout Ratio</th>
              {ratiosStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Number(
                      statement["cashFlowIndicatorRatios"][
                        "dividendPayoutRatio"
                      ]
                    ).toFixed(2)}
                    %
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default RatiosStatement
