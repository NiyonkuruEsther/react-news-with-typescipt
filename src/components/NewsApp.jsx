import { useSelector, useDispatch } from "react-redux";
import {
  fetchArticles,
  selectArticlesByPublisher,
} from "../features/newsSlice";
import { fetchPublishers, selectPublishers } from "../features/publisherSlice";
import { useEffect, useMemo } from "react";

import { useState } from "react";

function News() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesByPublisher);
  const publishers = useSelector(selectPublishers);

  useEffect(() => {
    dispatch(fetchPublishers());
  }, [dispatch]);

  const [selectedPublisher, setSelectedPublisher] = useState(null);

  const handlePublisherChange = (publisher) => {
    // console.log("hello");
    console.log(
      publisher.name,
      ";",
      publishers.publishers[0].name,
      ";",
      publishers.publishers.filter((article, index) => {
        article.name === publisher.name;
      }),

      "hello momo"
    );
    setSelectedPublisher(publisher);
    // const relatedArticlesOfPublisher = publishers.filter((article) => {
    //   article.name === publisher.name;
    // });
    // console.log(relatedArticlesOfPublisher, "hell momiee");
    // if (!articles[publisher.id]) {
    // dispatch(fetchArticles(publisher));
    // }
  };

  // Memoize the publishers array so that it's computed only when needed
  const memoizedPublishers = useMemo(() => publishers, [publishers]);

  const selectedArticles = selectedPublisher
    ? articles[selectedPublisher.id] || []
    : [];

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

      {selectedPublisher && (
        <>
          <h2>{selectedPublisher.name}</h2>
          {selectedArticles.length > 0 ? (
            <ul>
              {selectedArticles.map((article) => (
                <li key={article.id}>{article.title}</li>
              ))}
            </ul>
          ) : (
            <p>No articles found for this publisher.</p>
          )}
        </>
      )}
    </>
  );
}

export default News;
