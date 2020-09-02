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

      function downloadCsv(csv, filename) {
        let csvFile;
        let downloadLink;
    
        // CSV FILE
        csvFile = new Blob([csv], {type: "text/csv"});
    
        // Download link
        downloadLink = document.createElement("a");
    
        // File name
        downloadLink.download = filename;
    
        // We have to create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
    
        // Make sure that the link is not displayed
        downloadLink.style.display = "none";
    
        // Add the link to your DOM
        document.body.appendChild(downloadLink);
    
        // Lanzamos
        downloadLink.click();
    }
    
     function exportTableToCsv(filename) {
      const csv = [];
      const rows = Array.from(document.querySelectorAll("h4, th, td"));
      const table = [document.querySelector("table")];
    
      for(let j = 0; j < table.length; j++) { 
         let formatedText = "";
        
         rows.forEach(element => {
          if(element.tagName == 'H4') {
            formatedText += '\n' + '\n' + (element.textContent.replace(/,/g, '') + ',').split(" ").join(' ') + '\n';
          }
         else if(element.tagName == 'TH') {
            formatedText += '\n' + (element.textContent.replace(/,/g, '') + ',').split(" ").join(' ');
          }
          else {
           formatedText += (element.textContent.replace(/,/g, '') + ',').split(" ").join(',');
          }
        }) 
        csv.push(formatedText)
         }
           
        // Download CSV
        downloadCsv(csv.join(""), filename);
    }

    const format = (digit) => {
      return digit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const Utils = {
      getGraphTimeLine:  getGraphTimeLine,
      downloadCsv:  downloadCsv,
      exportTableToCsv:  exportTableToCsv,
      format: format
  }

  export default Utils;