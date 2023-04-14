import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  selectArticlesByPublisher,
} from "../features/newsSlice";
import { fetchPublishers, selectPublishers } from "../features/publisherSlice";
import { useEffect } from "react";

function News() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesByPublisher).articles || {};
  const { publishers } = useSelector(selectPublishers);
  console.log(publishers, "mafresheru");
  useEffect(() => {
    dispatch(fetchPublishers());
  }, [dispatch]);

  const [selectedPublisher, setSelectedPublisher] = useState("abc-news");
  // const [showAllPublishers, setShowAllPublishers] = useState(false);

  const handlePublisherChange = (publisher) => {
    setSelectedPublisher(publisher);
    dispatch(fetchArticles(publisher.id));
  };
  // const memoizedPublishers = useMemo(() => publishers, [publishers]);

  const selectedArticles = selectedPublisher
    ? articles[selectedPublisher.id] || []
    : [];

  return (
    <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12">
      <h1 className="font-bold">News</h1>

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
