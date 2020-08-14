const nameSort = (setPriceSorted, setChangeSorted, setNameSorted,  dataList, setDataList) => {
    if(!nameSorted) {
    dataList.sort((a, b) => {
        if(a.ticker < b.ticker) { return -1}
        if(a.ticker > b.ticker) {return 1}
        return 0; 
    })
    setPriceSorted(false);
    setChangeSorted(false);
    setNameSorted(!nameSorted);
}
else {
        dataList.sort((a, b) => {
            if(a.ticker > b.ticker) { return -1}
            if(a.ticker < b.ticker) {return 1}
            return 0; 
        })
        setPriceSorted(false);
        setChangeSorted(false);
        setNameSorted(!nameSorted);
}
    setDataList([...dataList]);
}

const priceSort = () => {
    if(!priceSorted) {
    dataList.sort((a, b) => Number(a.ask)-Number(b.ask));
    }
    else {
        dataList.sort((a, b) => Number(b.ask)-Number(a.ask));
    }
    setNameSorted(false);
    setChangeSorted(false);
    setPriceSorted(!priceSorted);
    setDataList([...dataList]);
}

const changeSort = () => {
    if(!changeSorted) {
    dataList.sort((a, b) => Number(a.changes)-Number(b.changes));
    }
    else {
        dataList.sort((a, b) => Number(b.changes)-Number(a.changes));
    }
    setNameSorted(false);
    setPriceSorted(false);
    setChangeSorted(!changeSorted);
    setDataList([...dataList]);
}

const util = {
    nameSort: nameSort,
    priceSort: priceSort,
    changeSort: changeSort

}

export default util;