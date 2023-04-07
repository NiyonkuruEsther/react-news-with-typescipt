import React from "react";

function NewsCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-56 object-cover"
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
