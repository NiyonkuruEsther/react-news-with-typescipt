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
    setSelectedPublisher(publisher);
    if (!articles[publisher.id]) {
      dispatch(fetchArticles(publisher));
    }
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
            <span key={publisher.id}>
              <button onClick={() => handlePublisherChange(publisher)}>
                {publisher.name}
              </button>
            </span>
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
