import React from "react";

import companyStyles from "./company.module.css";
const CompanyDataBrief = ({company, companyKeyMetrics}) => {
    const keyMetrics = companyKeyMetrics.metrics[0];
    
    return (
        <>
       <section className={companyStyles.companyDataBrief}>
            <div className={companyStyles.companyDataSection}>
            <div className={companyStyles.dataBriefHeaderSection}>Financial Info</div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Symbol</div>
                <div className={companyStyles.dataInfo}>{company.symbol}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Price</div>
                <div className={companyStyles.dataInfo}>{company.profile.price}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Beta</div>
                <div className={companyStyles.dataInfo}>{company.profile.beta.substring(0, 5)}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Vol Avg</div>
                <div className={companyStyles.dataInfo}>{(company.profile.volAvg / 1000000).toFixed(2)}M</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Market Cap</div>
                <div className={companyStyles.dataInfo}>{(company.profile.mktCap / 1000000000).toFixed(2)}B</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Last Div</div>
                <div className={companyStyles.dataInfo}>{(company.profile.lastDiv)}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Div Yield</div>
                <div className={companyStyles.dataInfo}>{keyMetrics['Dividend Yield']}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>PE Ratio</div>
                <div className={companyStyles.dataInfo}>{keyMetrics['PE ratio'].substring(0, 5)}</div>
            </div>
            </div>
            <div className={companyStyles.companyDataSection}>
            <div className={companyStyles.dataBriefHeaderSection}></div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>PB Ratio</div>
                <div className={companyStyles.dataInfo}>{keyMetrics['PB ratio'].substring(0, 5)}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>E/Yield</div>
                <div className={companyStyles.dataInfo}>{keyMetrics['Earnings Yield'].substring(0, 5)}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Debt/Equity</div>
                <div className={companyStyles.dataInfo}>{keyMetrics['Debt to Equity'].substring(0, 5)}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>ROE</div>
                <div className={companyStyles.dataInfo}>{(keyMetrics['ROE'] * 100).toFixed(2)}%</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>W/Cap</div>
                <div className={companyStyles.dataInfo}>{(keyMetrics['Working Capital'] / 1000000000).toFixed(2)}B</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>TA Value</div>
                <div className={companyStyles.dataInfo}>{(keyMetrics['Tangible Asset Value'] / 1000000000).toFixed(2)}B</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>N/C AV</div>
                <div className={companyStyles.dataInfo}>{(keyMetrics['Net Current Asset Value'] / 1000000000).toFixed(2)}B</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>Inv Cap</div>
                <div className={companyStyles.dataInfo}>{(keyMetrics['Invested Capital'] / 1000000000).toFixed(2)}B</div>
            </div>
            </div>
            

    </section> 
        </>
    )
}


export default CompanyDataBrief;