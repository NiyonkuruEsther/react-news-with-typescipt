import React from "react";

function NewsCard({ item }) {
  return (
    <div className="bg-white max-h-max h-full flex flex-col justify-between rounded-lg shadow-md overflow-hidden mx-4">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full  object-scale-down"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-gray-700">{item.date}</p>
        <p className="text-gray-700 mt-2">By {item.author}</p>
      </div>
    </div>
  );
}

export default NewsCard;
