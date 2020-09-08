import React, { useEffect, useState} from "react";
import MajorCard from "./MajorCard";
import majorStyles from "./majorStyles.module.css";


const MajorIndexes = ({fmpk}) => {
    
    let [majorIndexes, setMajorIndexes] = useState([]);
    let [left, setLeft] = useState(0);

    useEffect(() => {
        const majorUrl = "https://financialmodelingprep.com/api/v3/majors-indexes";

        fetch(`${majorUrl}${fmpk}`)
        .then((response) => response.json())
        .then((data) => {
         setMajorIndexes(data.majorIndexesList);
    })
    }, [])

    const scrollLeft = (e) => {
        if(left > -3670) {
        setLeft(left - 230);
        let innerSlide = e.target.parentNode.nextSibling.firstElementChild;
        innerSlide.style.transform = `translateX(${left - 230}px)`;
     
        }
    }

    const scrollRight = (e) => {
        if(left < 0) {
        setLeft(left + 230);
        let innerSlide = e.target.parentNode.nextSibling.firstElementChild;
        innerSlide.style.transform = `translateX(${left + 230}px)`;
        }
    }
   

    return (
        <>
        
        <h4 className="pageHeader">MAJOR INDEXES</h4>
        {majorIndexes.length > 5 && 
        <div className={majorStyles.controlContainer}>
        <div className={majorStyles.majorLeftTriangle} onMouseDown={scrollLeft}></div>
        <div className={majorStyles.majorRightTriangle} onMouseDown={scrollRight}></div>
        </div>
        }
        {majorIndexes.length > 5 &&
        <section className={majorStyles.majorIndexesOuterContaner}>
            <div className={majorStyles.majorIndexesInnerContainer}>

                {majorIndexes.map(major => {
                    return (
                        <MajorCard key={major.indexName} major={major}/>
                    )
                })}
            </div>
        </section>
            }
        </>
    )
}

export default MajorIndexes;