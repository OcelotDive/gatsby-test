import React, { useEffect, useState } from "react";
//import { Link } from "gatsby";


import Layout from "../components/layout";

import SEO from "../components/seo";
import NewsCard from "../components/newsCard/NewsCard";

const IndexPage = () => {
  let [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    const businessNewsKey = 'api-key=PGHKoPmtwqq8kb6K41O0ARLliVN7a88V';
    const businessNewsUrl = 'https://api.nytimes.com/svc/topstories/v2/';
    let businessNewsSource = 'business.json?';

    fetch(`${businessNewsUrl}${businessNewsSource}${businessNewsKey}`)
    .then((response) => response.json())
    .then((data) => {
      data.results = data.results.filter(item => item.multimedia !== null)
      setBusinessNews(data.results)
    });
    
  }, [])
  
  return (
  <Layout>
    <SEO title="Home" />
    
    { businessNews.map((item, index) => <NewsCard newsItem={item} primary={index === 0 ? true : false}/> )}
  </Layout>
  )
}

export default IndexPage
