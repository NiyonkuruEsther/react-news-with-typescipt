import React from "react";

function NewsCard({ item }) {
  return (
    <div className="m-4 flex justify-between flex-col hover:bg-blue-950 hover:ring-8 hover:ring-white md:w-[334px] shadow-medium hover:cursor-pointer duration-500 group h-[400px] mb-10 min-[470px]:w-[60%] sm:w-[45%] lg:w-[30%] flex-shrink-0 mr-4 rounded-[4px] border border-[#E6E6E6] bg-white">
      <img
        src={item.urlToImage}
        alt={item.title}
        className=" h-[273px] w-full object-cover"
      />
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
    </div>
  );
}

export default NewsCard;
