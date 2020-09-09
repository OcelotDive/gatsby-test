import React from "react"
import Utils from "../../../utils"
import shortid from "shortid"
import companyStyles from "../company.module.css"

const CashFlowStatement = ({ cashFlowStatements }) => {
  function handleCsvClick() {
    Utils.exportTableToCsv("table.csv")
  }

  return (
    <>
      <h4 className={companyStyles.statementHeader}>Cash Flow Statement</h4>

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
              {cashFlowStatements.map(statement => {
                return (
                  <td className={companyStyles.thData} key={shortid.generate()}>
                    {statement.date.substring(0, 4)}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Depreciation &amp; Amortization</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Depreciation & Amortization"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Stock-based Compensation</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Stock-based compensation"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Cash Flow</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Operating Cash Flow"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Capital Expenditure</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Capital Expenditure"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Acquisitions and Disposals</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Acquisitions and disposals"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Investment Purchases and Sales</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Investment purchases and sales"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Investing Cash Flow</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Investing Cash flow"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Issuance (repayment) of Debt</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Issuance (repayment) of debt"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Issuance (buybacks) of Shares</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Issuance (buybacks) of shares"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Dividend Payments</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Dividend payments"] / 1000000).toFixed(
                        2
                      )
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Financing Cash Flow</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Financing Cash Flow"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Effect of Forex Changes on Cash</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Effect of forex changes on cash"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Net Cash Flow / Change in Cash</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Net cash flow / Change in cash"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Free Cash Flow</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Free Cash Flow"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Net Cash / Marketcap</th>
              {cashFlowStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Net Cash/Marketcap"] / 1000000).toFixed(
                        2
                      )
                    )}
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

export default CashFlowStatement
