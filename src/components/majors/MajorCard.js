import React from "react";
import majorStyles from "./majorStyles.module.css";

const MajorCard = ({major}) => {
    const changeClass = major.changes > 0 ? "majorCardPricePositive" : major.changes <  0 ? "majorCardPriceNegative" : "majorCardPriceNull";
    return (
    <section className={majorStyles.majorCard}>
        <p className={majorStyles.majorCardName}>{major.indexName.includes("Index") ? major.indexName.substring(0, major.indexName.indexOf("Index")): major.indexName}</p>
        <h5 className={majorStyles.majorCardPrice}>${major.price.toFixed(2)}</h5>
        <h6 className={majorStyles[changeClass]}>{major.changes.toFixed(4)} <small>({((major.changes / major.price) * 100).toFixed(2)})</small></h6>
    </section>
    )
}

export default MajorCard;