import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NewsCard from "./NewsCard";

const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "fr", text: "French" },
  // { value: "bn", text: "Bengali" },
];

function LatestNews() {
  const [lang, setLang] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const langParam = searchParams.get("lng");

    if (langParam && langParam !== lang) {
      setLang(langParam);
      i18n.changeLanguage(langParam);
    } else {
      setLang("en");
      i18n.changeLanguage("en");
    }
  }, [lang, i18n]);

  const handleChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    let loc = "http://localhost:5173/";
    window.location.replace(loc + "?lng=" + newLang);
    i18n.changeLanguage(newLang);
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
  ];

  return (
    <section className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-900">{t("Latest News")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
        {news.map((item) => {
          return <NewsCard key={item.id} item={item} />;
        })}
        <select value={lang} onChange={handleChange}>
          {languages.map((item) => {
            return (
              <option key={item.value} value={item.value}>
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
