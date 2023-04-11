import React from "react";
import { useSelector } from "react-redux";
import { selectArticlesByPublisher } from "../features/newsSlice";

function TopArticles({ publisherId }) {
  const articles = useSelector((state) =>
    selectArticlesByPublisher(state, publisherId)
  );

  return (
    <div>
      <h2>Top 10 Articles</h2>
      <ol>
        {/* {articles?.slice(0, 10).map((article) => (
          <li key={article.url}>{article.title}</li>
        ))} */}
      </ol>
    </div>
  );
}

export default TopArticles;
