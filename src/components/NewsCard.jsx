import React from "react";

function NewsCard({ item }) {
  return (
    <div className="w-[247px] flex justify-between flex-col md:w-[334px] hover:shadow-medium hover:cursor-pointer duration-500 group h-[380px] mb-10 min-[470px]:w-[60%] sm:w-[45%] lg:w-[23%] flex-shrink-0 mr-4 rounded-[4px] border border-[#E6E6E6] bg-white">
      <img
        src={item.imageUrl}
        alt={item.title}
        className=" h-[143px] w-full object-cover"
      />
      <div className="p-4 h-full flex flex-col gap-4">
        <h3 className="text-[#1f1d21] font-bold text-[1.375rem] group-hover:text-red group-hover:underline underline-offset-[3px] duration-200 leading-[25px] sm:leading-[27px] sm:text-[1.5rem] ">
          {item.title}
        </h3>
        <p className="leading-[25.6px] text-[#1f1d21]">{item.date}</p>
        <p className="leading-[25.6px] text-[#1f1d21]">By {item.author}</p>
      </div>
    </div>
  );
}

export default NewsCard;
