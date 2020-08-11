import React from "react";

import newsSelect from "./newsSelectStyles.module.css";

const NewsSelect = ({selectNewsSource}) => {
    return (
<form className={newsSelect.form} onClick={selectNewsSource}>
  <div className={newsSelect.inputGroup}>
    <input id="radio1" name="radio" type="radio" defaultChecked className={newsSelect.radioInput}/>
    <label htmlFor="radio1" className={newsSelect.radioLabel}>Business</label>
  </div>
  <div className={newsSelect.inputGroup}>
    <input id="radio2" name="radio" type="radio" className={newsSelect.radioInput}/>
    <label htmlFor="radio2" className={newsSelect.radioLabel}>Tech</label>
  </div>
  <div className={newsSelect.inputGroup}>
    <input id="radio3" name="radio" type="radio" className={newsSelect.radioInput}/>
    <label htmlFor="radio3" className={newsSelect.radioLabel}>Science</label>
  </div>
</form>
    )
}


export default NewsSelect;