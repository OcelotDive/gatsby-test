import React, { useEffect, useState } from "react";
//import { Link } from "gatsby";


import Layout from "../components/layout";

import SEO from "../components/seo";
import NewsCard from "../components/newsCard/NewsCard";
import Ticker from "../components/Ticker/Ticker";

const IndexPage = () => {
  let [businessNews, setBusinessNews] = useState([]);
  let [tickerData, setTickerData] = useState([]);
  useEffect(() => {
    const businessNewsKey = 'api-key=PGHKoPmtwqq8kb6K41O0ARLliVN7a88V';
    const businessNewsUrl = 'https://api.nytimes.com/svc/topstories/v2/';
    let businessNewsSource = 'business.json?';

    const fmpk = '?apikey=51539c417d86b4a726f3acc52e1ac955';
    const tickerUrl = "https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOGL,AMZN,MSFT,NVDA";

    fetch(`${businessNewsUrl}${businessNewsSource}${businessNewsKey}`)
    .then((response) => response.json())
    .then((data) => {
      data.results = data.results.filter(item => item.multimedia !== null)
      setBusinessNews(data.results)
    });

    fetch(`${tickerUrl}${fmpk}`)
    .then((response) => response.json())
    .then((data) => {
      setTickerData(data);
    })
    
  }, [])
  
  return (
  <Layout ticker={tickerData}>
    <SEO title="Home" />
    <section className="mainContentContainer">
    { businessNews.map((item, index) => <NewsCard newsItem={item} primary={index === 0 ? true : false} key={item.title}/> )}
    </section>
  </Layout>
 
  )
}

export default IndexPage
