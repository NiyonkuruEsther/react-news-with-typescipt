import { useSelector, useDispatch } from "react-redux";
import {
  fetchArticles,
  selectArticlesByPublisher,
} from "../features/newsSlice";
import { fetchPublishers, selectPublishers } from "../features/publisherSlice";
import { useEffect, useMemo } from "react";
import { useState } from "react";
// import TopArticles from "./TopArticles";

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
        <div className="">
          <p>Select a publisher:</p>
          <div className="grid grid-cols-4 gap-3">
            {" "}
            {memoizedPublishers.publishers.map((publisher) => (
              <button
                className="bg-blue-400  p-2 ring-4 rounded-md ring-blue-700"
                key={publisher.id}
                onClick={() => handlePublisherChange(publisher)}
              >
                {publisher.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* {selectedPublisher && <TopArticles publisherId={selectedPublisher.id} />} */}

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
      {console.log(articles, "articles")}
    </>
  );
}

export default News;
