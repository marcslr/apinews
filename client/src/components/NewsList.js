import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsItem } from "../components/index.js";
import videoacc from "../videos/bg-acc.mp4";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        // Fetch news articles from an API
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=france&apiKey=40fe80ab18514482872006fbd868527c`
        );
        setArticles(response.data.articles);
        console.log(response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    getArticles();
  }, []);

  const handleSaveArticle = (article) => {
    // Save the article to the user's account
    // ...
  };

  return (
    <div className="news-app">
      <video autoPlay muted loop className="background-video">
        <source src={videoacc} type="video/mp4" />
      </video>
      {articles.map((article) => (
        <NewsItem
          key={article.title}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          onSave={handleSaveArticle} // Pass the onSave function
        />
      ))}
    </div>
  );
};

export default NewsList;
