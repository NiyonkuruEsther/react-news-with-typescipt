import Publisher from "./Publisher";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { fetchLatestArticles } from "../features/latestNews";
import {
  fetchArticles,
  selectArticlesByPublisher,
} from "../features/newsSlice";
import { useEffect } from "react";

const NewsAndPublishers = () => {
  const [selectedPublisher, setSelectedPublisher] = useState(null);
  const handlePublisherChange = (publisher) => {
    setSelectedPublisher(publisher);
  };
  const latestArticles = useSelector((state) => state.latestArticles.latest);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(selectedPublisher));
  }, [dispatch, selectedPublisher]);
  const articles = useSelector(selectArticlesByPublisher);

  console.log(selectedPublisher, "Selected", articles, "sdjfskdfdslkf");
  return (
    <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12 flex-col flex gap-8 ">
      <div className="w-full grid grid-cols-12 gap-28">
        <div className="col-span-10">
          {selectedPublisher ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {articles.length > 0 &&
                articles.map((article) => (
                  <div className="mb-3  flex justify-between flex-col hover:bg-blue-950 hover:ring-8 hover:ring-white shadow-medium hover:cursor-pointer duration-500 group flex-shrink-0 mr-4 rounded-[4px] border border-[#E6E6E6] bg-white">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="  w-full object-cover"
                    />
                    <div className="p-4 h-full gap-4 flex flex-col justify-around">
                      <h3 className="text-gray-800 font-bold text-[1.375rem] group-hover:text-white group-hover:underline underline-offset-[3px] duration-200 leading-[25px] sm:leading-[27px] sm:text-[1.5rem] ">
                        {article.title}
                      </h3>
                      <p className="leading-[25.6px] group-hover:text-white text-xl text-blue-900">
                        {article.content}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid-cols-3 grid">
              {latestArticles.slice(0, 9).map((article) => {
                return (
                  <div className="mb-3 flex justify-between flex-col hover:bg-blue-950 hover:ring-8 hover:ring-white shadow-medium hover:cursor-pointer duration-500 group flex-shrink-0 mr-4 rounded-[4px] border border-[#E6E6E6] bg-white">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="  w-full object-cover"
                    />
                    <div className="p-4 h-full gap-4 flex flex-col justify-around">
                      <h3 className="text-gray-800 font-bold text-[1.375rem] group-hover:text-white group-hover:underline underline-offset-[3px] duration-200 leading-[25px] sm:leading-[27px] sm:text-[1.5rem] ">
                        {article.title}
                      </h3>
                      <p className="leading-[25.6px] group-hover:text-white text-xl text-blue-900">
                        {article.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="">
          <Publisher onPublisherChange={handlePublisherChange} />
        </div>
      </div>
    </div>
  );
};

export default NewsAndPublishers;
