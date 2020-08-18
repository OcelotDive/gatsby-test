import React, { useEffect, useState } from "react";


import Key from "../keys";
import Layout from "../components/layout";

import SEO from "../components/seo";
import MajorIndexes from "../components/majors/MajorIndexes";
import NewsCard from "../components/newsCard/NewsCard";
import NewsSelect from "../components/newsSelect/NewsSelect";



const IndexPage = () => {
  
  const newsUrl = 'https://api.nytimes.com/svc/topstories/v2/';
  let [newsType, setNewsType] = useState([]);
  
  let newsSource = "business.json?";
  

  useEffect(() => {
    fetch(`${newsUrl}${newsSource}${Key.newsk}`)
    .then((response) => response.json())
    .then((data) => {
      data.results = data.results.filter(item => item.multimedia !== null)
      setNewsType(data.results)
    });
  }, []);



  const selectNewsSource = (e) => {
    
    switch(e.target.id) {
      case "radio1":
        newsSource = "business.json?";
        break;
      case "radio2":
        newsSource = "technology.json?";
        break;
      case "radio3":
        newsSource = "science.json?";
        break;
      default:
        return
        break;
    }
    
    fetch(`${newsUrl}${newsSource}${Key.newsk}`)
    .then((response) => response.json())
    .then((data) => {
      data.results = data.results.filter(item => item.multimedia !== null)
      setNewsType(data.results)
    });
  }
  
  return (
  <Layout>
    <MajorIndexes fmpk={Key.fmpk}/>
    <SEO title="Home" />
    
    <section className="mainContentContainer">
    <NewsSelect selectNewsSource={selectNewsSource}/>
    { newsType.map((item, index) => <NewsCard newsItem={item} primary={index === 0 ? true : false} key={item.title}/> )}
    </section>
  </Layout>
  )
}

export default IndexPage
