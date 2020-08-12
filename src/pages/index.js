import React, { useEffect, useState } from "react";
//import { Link } from "gatsby";


import Layout from "../components/layout";

import SEO from "../components/seo";
import MajorIndexes from "../components/majors/MajorIndexes";
import NewsCard from "../components/newsCard/NewsCard";
import NewsSelect from "../components/newsSelect/NewsSelect";
import MenuTab from "../components/nav/MenuTab";


const IndexPage = () => {
  const fmpk = '?apikey=51539c417d86b4a726f3acc52e1ac955';
  const newsKey = 'api-key=PGHKoPmtwqq8kb6K41O0ARLliVN7a88V';
  const newsUrl = 'https://api.nytimes.com/svc/topstories/v2/';
  let [newsType, setNewsType] = useState([]);
  
  let newsSource = "business.json?";
  

  useEffect(() => {
    fetch(`${newsUrl}${newsSource}${newsKey}`)
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
    
    fetch(`${newsUrl}${newsSource}${newsKey}`)
    .then((response) => response.json())
    .then((data) => {
      data.results = data.results.filter(item => item.multimedia !== null)
      setNewsType(data.results)
    });
  }
  
  return (
  <Layout>
    <MajorIndexes fmpk={fmpk}/>
    <SEO title="Home" />
    <MenuTab />
    <section className="mainContentContainer">
    <NewsSelect selectNewsSource={selectNewsSource}/>
    { newsType.map((item, index) => <NewsCard newsItem={item} primary={index === 0 ? true : false} key={item.title}/> )}
    </section>
  </Layout>
  )
}

export default IndexPage
