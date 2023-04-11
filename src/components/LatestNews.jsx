import { useState } from "react";
// import { useTranslation } from "react-i18next";
import NewsCard from "./NewsCard";
import Carousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";

const languages = [
  { value: "", text: "Options" },
  { value: "fr", text: "French" },
  { value: "en", text: "English" },
];

function LatestNews() {
  // const { t } = useTranslation();
  // const [lang, setLang] = useState("");

  // const handleChange = (e) => {
  //   setLang(e.target.value);
  //   let loc = "http://localhost:5173/";
  //   window.location.replace(loc + "?lng=" + e.target.value);
  // };

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handleSlideChange = (e) => {
    setActiveSlideIndex(e.item);
  };
  const carouselOptions = {
    items: 3,
    dotsDisabled: true,
    buttonsDisabled: true,
    slideBy: 3,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };
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
    {
      id: 4,
      title: "At vero eos et accusamus et iusto odio dignissimos",
      author: "Linda Williams",
      date: "August 23, 2021",
      imageUrl: "https://picsum.photos/id/1027/500/300",
    },
    {
      id: 5,
      title: "Et harum quidem rerum facilis est et expedita distinctio",
      author: "David Brown",
      date: "September 15, 2021",
      imageUrl: "https://picsum.photos/id/103/500/300",
    },
    {
      id: 6,
      title: 
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque"
      ,
      author: "Emily Davis",
      date: "October 7, 2021",
      imageUrl: "https://picsum.photos/id/1033/500/300",
    },
    {
      id: 7,
      title: 
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
      ,
      author: "Michael Lee",
      date: "November 19, 2021",
      imageUrl: "https://picsum.photos/id/1043/500/300",
    },
    {
      id: 8,
      title: 
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      ,
      author: "Karen Anderson",
      date: "December 4, 2021",
      imageUrl: "https://picsum.photos/id/1045/500/300",
    },

    {
      id: 9,
      title: "Lorem ipsum dolor sit amet",
      author: "Jane Smith",
      date: "June 12, 2021",
      imageUrl: "https://picsum.photos/id/1020/500/300",
    },
    {
      id: 10,
      title: "Lorem ipsum dolor sit amet",
      author: "Jane Smith",
      date: "June 12, 2021",
      imageUrl: "https://picsum.photos/id/1020/500/300",
    },
  ];

  return (
    <section className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
      <div className="mt-6">
        <Carousel
          slideToIndex={activeSlideIndex}
          onSlideChanged={handleSlideChange}
          {...carouselOptions}
        >
          {news.map((item) => {
            return <NewsCard key={item.id} item={item} />;
          })}
        </Carousel>
      </div>

      {/* <select value={lang} onChange={handleChange}>
          {languages.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div> */}
    </section>
  );
}

export default LatestNews;
