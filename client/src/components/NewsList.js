import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsItem } from "../components/index.js";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=fr&apiKey=40fe80ab18514482872006fbd868527c`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
