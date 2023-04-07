import React from "react";
import NewsCard from "./NewsCard";

function LatestNews() {
  const news = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text",
      author: "John Doe",
      date: "May 25, 2021",
      imageUrl: "https://picsum.photos/id/1018/500/300",
    },
    {
      id: 2,
      title: "It is a long established fact that a reader",
      author: "Jane Smith",
      date: "May 23, 2021",
      imageUrl: "https://picsum.photos/id/1025/500/300",
    },
    {
      id: 3,
      title: "There are many variations of passages",
      author: "Mike Johnson",
      date: "May 20, 2021",
      imageUrl: "https://picsum.photos/id/1015/500/300",
    },
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default LatestNews;
