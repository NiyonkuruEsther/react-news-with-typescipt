import { useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  LatestArticlesRootState,
  fetchLatestArticles,
} from "../features/latestNews";
import { ItemWithImage, ReferenceType } from "../types/models/types";
import { AnyAction, Dispatch } from "redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

interface ItemType extends ItemWithImage {
  source: { name?: string };
}

function LatestNews() {
  const dispatch: ThunkDispatch<LatestArticlesRootState, undefined, AnyAction> =
    useDispatch();
  const blogSect = useRef<HTMLDivElement>(null);
  const latestArticles: [] = useSelector(
    (state: { latestArticles: { latest: [] } }) => state.latestArticles.latest
  );

  // Dispatch the action to fetch latest articles on component mount
  useEffect(() => {
    dispatch(fetchLatestArticles());
  }, [dispatch]);

  const scrollRight = () => {
    blogSect.current.scrollBy({
      left: -700,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    blogSect.current.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12 flex-col flex gap-8 relative">
      <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
      <div className="w-full flex justify-between ">
        <button
          onClick={scrollRight}
          className="bg-white rounded-full bg-opacity-70 left-12 top-[50%] focus:ring-4 absolute p-2"
        >
          <BsChevronLeft className="text-lg" />
        </button>
        <button
          onClick={scrollLeft}
          className="bg-white rounded-full bg-opacity-70 right-12 top-[50%] focus:ring-4 absolute p-2"
        >
          <BsChevronRight />
        </button>
      </div>
      <div
        ref={blogSect}
        className="flex ease-in-out duration-500 max-w-full overflow-x-hidden w-full"
      >
        {latestArticles.map((item: ItemType, index: number) => {
          return <NewsCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
}

export default LatestNews;
