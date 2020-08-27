const getGraphTimeLine = (days, companyHistorical) => {
    console.table(companyHistorical)
        const priceGraphData = [
          {
         "id": "price",
         "data": []
       },
       {
         "id": "high",
         "data": []
       },
       {
         "id": "low",
         "data": []
       }
       ]
    
       const barGraphData = []
      
    
       
      companyHistorical.map(item => {
         priceGraphData[0].data.push({x: item.date.split("-").reverse().join("-"), y: item.close.toFixed(2)})
         priceGraphData[1].data.push({x: item.date.split("-").reverse().join("-"), y: item.high.toFixed(2)})
         priceGraphData[2].data.push({x: item.date.split("-").reverse().join("-"), y: item.low.toFixed(2)})
         barGraphData.push({"date": item.date.split("-").reverse().join("-"), "price": item.close, "high": item.high, "low": item.low})
       });
      
    
        let timeLine1 = priceGraphData[0].data.slice(0, days);
        let timeLine2 = priceGraphData[1].data.slice(0, days);
        let timeLine3 = priceGraphData[2].data.slice(0, days);
          let timeLineEnd1 = timeLine1[timeLine1.length - 1];
          let timeLineEnd2 = timeLine2[timeLine2.length - 1];
          let timeLineEnd3 = timeLine3[timeLine3.length - 1];
        if(days <= 30) {
      return  [{
        "id": "price",
        "data": timeLine1.slice(0, days).filter((_,index) => index).concat(timeLineEnd1).reverse()
      }, 
      {
        "id": "high",
        "data": timeLine2.slice(0, days).filter((_,index) => index ).concat(timeLineEnd2).reverse()
      }, {
        "id": "low",
        "data": timeLine3.slice(0, days).filter((_,index) => index ).concat(timeLineEnd3).reverse()
      }
    ]
        }
        else if(days === 180){
          return  [{
            "id": "price",
            "data": timeLine1.slice(0, days).filter((_,index) => index % 6 === 0).concat(timeLineEnd1).reverse()
          }, 
          {
            "id": "high",
            "data": timeLine2.slice(0, days).filter((_,index) => index % 6 === 0).concat(timeLineEnd2).reverse()
          }, {
            "id": "low",
            "data": timeLine3.slice(0, days).filter((_,index) => index % 6 === 0).concat(timeLineEnd3).reverse()
          }
        ]
        }
        else if(days === 365){
          return  [{
            "id": "price",
            "data": timeLine1.slice(0, days).filter((_,index) => index % 12 === 0).concat(timeLineEnd1).reverse()
          }, 
          {
            "id": "high",
            "data": timeLine2.slice(0, days).filter((_,index) => index % 12 === 0).concat(timeLineEnd2).reverse()
          }, {
            "id": "low",
            "data": timeLine3.slice(0, days).filter((_,index) => index % 12 === 0).concat(timeLineEnd3).reverse()
          }
        ]
        }
        else if(days === 1825){
    
         return  [{
          "id": "price",
          "data": timeLine1.slice(0, days).filter((_,index) => index % 365 === 0).concat(timeLineEnd1).reverse()
        }, 
        {
          "id": "high",
          "data": timeLine2.slice(0,days).filter((_,index) => index % 365 === 0).concat(timeLineEnd2).reverse()
        }, {
          "id": "low",
          "data": timeLine3.slice(0, days).filter((_,index) => index % 365 === 0).concat(timeLineEnd3).reverse()
        }
      ]
        }
    
      }

  const Utils = {
      getGraphTimeLine: () => getGraphTimeLine
  }

  export default Utils;