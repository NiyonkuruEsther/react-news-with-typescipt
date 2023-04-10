import { useSelector, useDispatch } from "react-redux";
import {
  fetchArticles,
  selectArticlesByPublisher,
} from "../features/newsSlice";
import { fetchPublishers, selectPublishers } from "../features/publisherSlice";
import { useEffect, useMemo } from "react";

import { useState } from "react";
import TopArticles from "./TopArticles";

function News() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesByPublisher).articles || {};
  const publishers = useSelector(selectPublishers);
  useEffect(() => {
    dispatch(fetchPublishers());
  }, [dispatch]);

  const [selectedPublisher, setSelectedPublisher] = useState(null);

  const handlePublisherChange = (publisher) => {
    console.log(publisher.name, ";", "hello momo");
    setSelectedPublisher(publisher);
    const relatedArticlesOfPublisher = publishers.publishers.filter(
      (article) => article.name === publisher.name
    );
    console.log(relatedArticlesOfPublisher, "hell momiee");
    dispatch(fetchArticles(publisher.id));
  };

  // Memoize the publishers array so that it's computed only when needed
  const memoizedPublishers = useMemo(() => publishers, [publishers]);

  const selectedArticles = selectedPublisher
    ? articles[selectedPublisher.id] || []
    : [];
  //   const selectedArticlesStatus = useSelector(selectArticlesStatus);

  return (
    <>
      <h1>News</h1>
      {memoizedPublishers.publishers.length > 0 && (
        <p>
          Select a publisher:
          {memoizedPublishers.publishers.map((publisher) => (
            <button
              key={publisher.id}
              onClick={() => handlePublisherChange(publisher)}
            >
              {publisher.name}
            </button>
          ))}
        </p>
      )}

      {selectedPublisher && <TopArticles publisherId={selectedPublisher.id} />}

      {/* {selectedPublisher && (
        <>
          <h2>{selectedPublisher.name}</h2>
          {selectedArticlesStatus === "loading" ? (
            <div className="loader">Loading...</div>
          ) : selectedArticlesStatus === "succeeded" ? (
            <ul>
              {selectedArticles.map((article) => (
                <li key={article.title}>
                  <a href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>{error}</p>
          )}
        </>
      )}
      {console.log(articles, "articles")} */}
    </>
  );
}

export default News;
