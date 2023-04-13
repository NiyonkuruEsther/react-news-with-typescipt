import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchArticles,
//   selectArticlesByPublisher,
// } from "../features/newsSlice";
import { fetchPublishers, selectPublishers } from "../features/publisherSlice";
import { useEffect } from "react";
const Publisher = () => {
  const dispatch = useDispatch();
  const { publishers } = useSelector(selectPublishers);
  console.log(publishers, "mafresheru");
  useEffect(() => {
    dispatch(fetchPublishers());
  }, [dispatch]);
  const handlePublisherChange = (publisher) => {
    setSelectedPublisher(publisher);
    // dispatch(fetchArticles(publisher.id));
  };
  //   const [selectedPublisher, setSelectedPublisher] = useState("abc-news");
  return (
    <div>
      {" "}
      {publishers.length > 0 && (
        <div className="grid gap-3">
          {publishers.map((publisher) => (
            <div classNames="fade" key={publisher.id}>
              <button
                className="bg-blue-400 p-2 ring-4 w-full rounded-md ring-blue-700 whitespace-nowrap"
                onClick={() => handlePublisherChange(publisher)}
              >
                {publisher.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Publisher;
