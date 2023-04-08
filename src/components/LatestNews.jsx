import { useState } from "react";
import { useTranslation } from "react-i18next";
import NewsCard from "./NewsCard";

const languages = [
  { value: "", text: "Options" },
  { value: "fr", text: "French" },
  { value: "en", text: "English" },
];

function LatestNews() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:5173/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };
  const news = [
    {
      id: 1,
      title: t("Lorem Ipsum is simply dummy text"),
      author: t("John Doe"),
      date: t("May 25, 2021"),
      imageUrl: "https://picsum.photos/id/1018/500/300",
    },
    {
      id: 2,
      title: t("It is a long established fact that a reader"),
      author: t("Jane Smith"),
      date: t("May 23, 2021"),
      imageUrl: "https://picsum.photos/id/1025/500/300",
    },
    {
      id: 3,
      title: t("There are many variations of passages"),
      author: t("Mike Johnson"),
      date: t("May 20, 2021"),
      imageUrl: "https://picsum.photos/id/1015/500/300",
    },
  ];

  return (
    <section className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-900">{t("Latest News")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
        {news.map((item) => {
          return <NewsCard key={item.id} item={item} />;
        })}
        <select value={lang} onChange={handleChange}>
          {languages.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}

export default LatestNews;
