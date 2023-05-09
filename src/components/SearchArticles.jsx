import { Link } from "react-router-dom";

function SearchArticles({ articles }) {
  return (
    <div className="grid grid-cols-4">
      {articles?.map((article) => {
        return (
          <Link
            to={`/news-details/${article.title}`}
            state={{ item: article }}
            className="m-4 grid grid-cols-1 justify-between flex-col hover:bg-blue-950 hover:ring-8 hover:ring-white  shadow-medium hover:cursor-pointer duration-500 group mb-10  flex-shrink-0 mr-4 rounded-[4px] border border-[#E6E6E6] bg-white"
          >
            {article.urlToImage !== null && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className=" h-[273px] w-full object-cover"
              />
            )}
            <div className="p-4 h-full flex flex-col justify-around">
              <h3 className="text-gray-800 font-bold text-[1.375rem] group-hover:text-white group-hover:underline underline-offset-[3px] duration-200 leading-[25px] sm:leading-[27px] sm:text-[1.5rem] ">
                {article.title}
              </h3>
              <div className="flex flex-col gap-1">
                <p className="leading-[25.6px] group-hover:text-white text-xl text-blue-600">
                  By {article.source?.name}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchArticles;
