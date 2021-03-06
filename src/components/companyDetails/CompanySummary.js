import React from "react"

import companyStyles from "./company.module.css"

import CompanyRating from "./CompanyRating"

const CompanySummary = ({ company, companyRating }) => {
  return (
    <>
      <div className={companyStyles.companyHeaderRow}>
        <img
          className={companyStyles.companyImage}
          src={company.profile.image}
          alt="company logo"
        />
        <h3 className={companyStyles.descriptionTitle}>
          {company.profile.companyName}
        </h3>
        <p className={companyStyles.description}>{company.profile.industry}</p>
        <p className={companyStyles.description}>
          <b>Ceo:</b> {company.profile.ceo}
        </p>
        <p className={companyStyles.description}>
          <b>Exq:</b> {company.profile.exchange}
        </p>
      </div>

      <article className={companyStyles.backgroundInfo}>
        {company.profile.description}
      </article>
      {companyRating && <CompanyRating companyRating={companyRating} />}
    </>
  )
}

export default CompanySummary
