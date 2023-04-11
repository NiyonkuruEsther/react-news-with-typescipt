import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  fetchArticles,
  selectArticlesByPublisher,
} from "../features/newsSlice";
import { fetchPublishers, selectPublishers } from "../features/publisherSlice";
import { useEffect, useMemo } from "react";

function News() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesByPublisher).articles || {};
  const publishers = useSelector(selectPublishers);
  useEffect(() => {
    dispatch(fetchPublishers());
  }, [dispatch]);

  const [selectedPublisher, setSelectedPublisher] = useState("abc-news");
  const [showAllPublishers, setShowAllPublishers] = useState(false);

  const handlePublisherChange = (publisher) => {
    setSelectedPublisher(publisher);
    dispatch(fetchArticles(publisher.id));
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
        <div className="">
          <p>Select a publisher:</p>
          <TransitionGroup className="flex flex-wrap items-center gap-3 relative">
            {showAllPublishers
              ? memoizedPublishers.publishers.map((publisher) => (
                  <CSSTransition
                    classNames="fade"
                    timeout={500}
                    key={publisher.id}
                  >
                    <button
                      className="bg-blue-400 p-2 ring-4 rounded-md ring-blue-700"
                      onClick={() => handlePublisherChange(publisher)}
                    >
                      {publisher.name}
                    </button>
                  </CSSTransition>
                ))
              : memoizedPublishers.publishers.slice(0, 10).map((publisher) => (
                  <button
                    key={publisher.id}
                    className="bg-blue-400 p-2 ring-4 rounded-md ring-blue-700"
                    onClick={() => handlePublisherChange(publisher)}
                  >
                    {publisher.name}
                  </button>
                ))}
            {memoizedPublishers.publishers.length > 10 && (
              <button
                className="bg-gray-300 p-2 rounded-full focus:outline-none absolute right-3 top-3"
                onClick={() => setShowAllPublishers(!showAllPublishers)}
              >
                {/* show/hide button */}
              </button>
            )}
          </TransitionGroup>
        </div>
      )}

      {selectedPublisher && (
        <>
          <h2>{selectedPublisher.name}</h2>

          {selectedArticles.map((article) => (
            <li key={article.title}>
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </>
      )}
    </>
  );
}

export default News;
