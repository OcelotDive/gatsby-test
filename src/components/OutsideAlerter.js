import React, { useRef, useEffect } from "react";
import SearchBar from "../components/searchBar/SearchBar"
/**
 * Hook that alerts when clicks outside of element
 */

 const useOutsiderAlerter = () => {

    useEffect(() => {

        const handleClickOutside = (e) => {
            if(ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
            }
        }

        //bind event listener

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    }, [ref])
 }


 export default OutsideAlerter = () => {
     const wrapperRef = useRef(null);
     useOutsiderAlerter(wrapperRef);

     return <div ref={wrapperRef}><SearchBar /></div>
 }