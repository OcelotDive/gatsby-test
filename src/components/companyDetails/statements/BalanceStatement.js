import React from "react"
import Utils from "../../../utils"
import companyStyles from "../company.module.css"
import shortid from "shortid"
const BalanceStatement = ({ balanceStatements }) => {
  function handleCsvClick() {
    Utils.exportTableToCsv("table.csv")
  }

  return (
    <>
      <h4 className={companyStyles.statementHeader}>Balance Sheet</h4>

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
              {balanceStatements.map(statement => {
                return (
                  <td className={companyStyles.thData} key={shortid.generate()}>
                    {statement.date.substring(0, 4)}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Cash and Cash Equivalents</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Cash and cash equivalents"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Short-term Investments</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Short-term investments"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Cash and Short-term Investments</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Cash and short-term investments"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Receivables</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()} key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Receivables"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Inventories</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Inventories"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Property, Plant &amp; Equipment Net</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Property, Plant & Equipment Net"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Goodwill and Intangible Assets</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Goodwill and Intangible Assets"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Long-term Investments</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Long-term investments"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Tax Assets</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Tax assets"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Non-current Assets</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Total non-current assets"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Current Assets</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Total current assets"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Assets</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Total assets"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Payables</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Payables"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Short-term Debt</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Short-term debt"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Current Liabilities</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Total current liabilities"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Long-term Debt</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Long-term debt"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Debt</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Total debt"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Deferred Revenue</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Deferred revenue"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Tax Liabilities</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Tax Liabilities"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Deposit Liabilities</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Deposit Liabilities"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Non-current Liabilities</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Total non-current liabilities"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Liabilities</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Total liabilities"] / 1000000).toFixed(
                        2
                      )
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Other Comprehensive Income</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Other comprehensive income"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Retained Earnings (deficit)</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Retained earnings (deficit)"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Total Shareholders Equity</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(
                        statement["Total shareholders equity"] / 1000000
                      ).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Investments</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Investments"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Net Debt</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Net Debt"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Other Assets</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Other Assets"] / 1000000).toFixed(2)
                    )}
                  </td>
                )
              })}
            </tr>
            <tr>
              <th>Other Liabilities</th>
              {balanceStatements.map(statement => {
                return (
                  <td key={shortid.generate()}>
                    {Utils.format(
                      Number(statement["Other Liabilities"] / 1000000).toFixed(
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

export default BalanceStatement
