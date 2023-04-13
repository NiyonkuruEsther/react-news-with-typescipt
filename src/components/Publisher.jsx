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
    <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12">
      {publishers.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {publishers.map((publisher) => (
            <div classNames="fade" key={publisher.id}>
              <button
                className="bg-blue-400 p-2 ring-4 w-full rounded-md ring-blue-700"
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
