import React, { useEffect, useState} from "react";
import MajorCard from "./MajorCard";
import majorStyles from "./majorStyles.module.css";


const MajorIndexes = ({fmpk}) => {
    console.log(fmpk)
    let [majorIndexes, setMajorIndexes] = useState([]);
    useEffect(() => {
        const majorUrl = "https://financialmodelingprep.com/api/v3/majors-indexes";

        fetch(`${majorUrl}${fmpk}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      setMajorIndexes(data.majorIndexesList);
    })

    }, [])
    return (
        <>
        <h4>MAJOR INDEXES</h4>
        <section className={majorStyles.majorIndexesOuterContaner}>
            <div className={majorStyles.majorIndexesInnerContainer}>

                {majorIndexes.map(major => {
                    return (
                        <MajorCard key={major.indexName} major={major}/>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default MajorIndexes;