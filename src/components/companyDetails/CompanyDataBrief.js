import React from "react";

import companyStyles from "./company.module.css";
const CompanyDataBrief = ({company, companyKeyMetrics}) => {
    
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
                <div className={companyStyles.dataInfo}>{companyKeyMetrics.metrics[0]['Dividend Yield']}</div>
            </div>
            <div className={companyStyles.infoBar}>
                <div className={companyStyles.dataName}>PE Ratio</div>
                <div className={companyStyles.dataInfo}>{companyKeyMetrics.metrics[0]['PE ratio'].substring(0, 5)}</div>
            </div>
            </div>

        </section>
        </>
    )
}


export default CompanyDataBrief;