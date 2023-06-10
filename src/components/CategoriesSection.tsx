import { useDispatch } from "react-redux";
import {
  FaHandshake,
  FaFlag,
  FaLaptop,
  FaFilm,
  FaFutbol,
} from "react-icons/fa";
import { MdScience } from "react-icons/md";
import {
  PublishersRootState,
  fetchPublishers,
} from "../features/publisherSlice";
import { Item } from "../types/models/types";
import { BsCheckAll } from "react-icons/bs";
import { AnyAction } from "redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

function CategoriesSection() {
  const dispatch: ThunkDispatch<PublishersRootState, undefined, AnyAction> =
    useDispatch();

  const categories = [
    {
      id: 7,
      name: "General",
      icon: <BsCheckAll />,
    },
    {
      id: 1,
      name: "Business",
      icon: <FaHandshake />,
    },
    {
      id: 2,
      name: "Health",
      icon: <FaFlag />,
    },
    {
      id: 5,
      name: "Sports",
      icon: <FaFutbol />,
    },
    {
      id: 4,
      name: "Entertainment",
      icon: <FaFilm />,
    },
    {
      id: 3,
      name: "Technology",
      icon: <FaLaptop />,
    },
    {
      id: 6,
      name: "Science",
      icon: <MdScience />,
    },
  ];

  const handleCategoryClick = (categoryName: string): void => {
    dispatch(fetchPublishers(categoryName.toLowerCase()));
  };

  return (
    <section className="bg-white pt-6 pb-8">
      <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-4 mt-6 ">
          {categories.map((item: Item) => (
            <button
              key={item.id}
              className={`p-4 flex items-center gap-8 justify-center bg-blue-900 rounded-lg shadow-md hover:shadow-lg transform transition duration-200 hover:-translate-y-2 bg-gradient-to-r`}
              onClick={() => handleCategoryClick(item.name)}
            >
              {item.icon}
              <span className="text-white text-lg">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
