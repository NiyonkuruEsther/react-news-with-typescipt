import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  fetchArticles,
  selectArticlesByPublisher,
} from "../features/newsSlice";
import { fetchPublishers, selectPublishers } from "../features/publisherSlice";
import { useEffect, useMemo } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

function News() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesByPublisher).articles || {};
  const publishers = useSelector(selectPublishers);
  console.log(publishers, "mafresheru");
  useEffect(() => {
    dispatch(fetchPublishers());
  }, [dispatch]);

  const [selectedPublisher, setSelectedPublisher] = useState("abc-news");
  const [showAllPublishers, setShowAllPublishers] = useState(false);

  const handlePublisherChange = (publisher) => {
    setSelectedPublisher(publisher);
    dispatch(fetchArticles(publisher.id));
  };
  const memoizedPublishers = useMemo(() => publishers, [publishers]);

  const selectedArticles = selectedPublisher
    ? articles[selectedPublisher.id] || []
    : [];

  return (
    <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12">
      <h1 className="font-bold">News</h1>
      {memoizedPublishers.publishers.length > 0 && (
        <div className="">
          <p>Select a publisher:</p>
          <div className="flex gap-3">
            {showAllPublishers &&
            console.log(
              " memoizedPublishers.publishers",
              memoizedPublishers.publishers
            )
              ? memoizedPublishers.publishers.map((publisher) => (
                  <div classNames="fade" key={publisher.id}>
                    <button
                      className="bg-blue-400 p-2 ring-4 rounded-md ring-blue-700"
                      onClick={() => handlePublisherChange(publisher)}
                    >
                      {publisher.name}
                    </button>
                  </div>
                ))
              : memoizedPublishers.publishers
                  .filter((item, index) => index < 10)
                  .map((publisher) => (
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
                {showAllPublishers ? <BsArrowDown /> : <BsArrowUp />}
              </button>
            )}
          </div>
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
    </div>
  );
}

export default News;
