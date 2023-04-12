import { useRef } from "react";
import NewsCard from "./NewsCard";
import { NEWS } from "../data/news";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function LatestNews() {
  const blogSect = useRef(null);

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
          className="bg-red rounded-full top-[50%] focus:ring-4 absolute  text-white p-2"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={scrollLeft}
          className="bg-red rounded-full top-[50%] right-0 focus:ring-4 absolute  text-white p-2"
        >
          <BsChevronRight />
        </button>
      </div>
      <div
        ref={blogSect}
        className="flex ease-in-out duration-500 max-w-full overflow-x-hidden mx-12"
      >
        {NEWS.map((item) => {
          return <NewsCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default LatestNews;
