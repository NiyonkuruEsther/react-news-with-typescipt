import { Link } from "react-router-dom";
import { ItemWithImage } from "../types/models/types";

interface ItemType extends ItemWithImage {
  source: { name?: string };
}

function NewsCard(item: ItemType) {
  return (
    <Link
      to={`/news-details/${item.title}`}
      state={{ item }}
      className="m-2 md:m-4 grid grid-cols-1 justify-between flex-col hover:bg-blue-950 hover:ring-8 hover:ring-white w-[100%] md:w-[334px] shadow-medium hover:cursor-pointer duration-500 group mb-10 min-[470px]:w-[60%] sm:w-[45%] lg:w-[30%] flex-shrink-0 mr-2 md:mr-4 rounded-[4px] border border-[#E6E6E6] bg-white"
    >
      {item.urlToImage !== null && (
        <img
          src={item.urlToImage}
          alt={item.title}
          className=" h-[273px] w-full object-cover"
        />
      )}
      <div className="p-4 h-full flex flex-col justify-around">
        <h3 className="text-gray-800 font-bold text-[1.375rem] group-hover:text-white group-hover:underline underline-offset-[3px] duration-200 leading-[25px] sm:leading-[27px] sm:text-[1.5rem] ">
          {item.title}
        </h3>
        <div className="flex flex-col gap-1">
          {" "}
          <p className="leading-[25.6px] group-hover:text-white text-xl text-blue-600">
            By {item.source.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
export default NewsCard;
