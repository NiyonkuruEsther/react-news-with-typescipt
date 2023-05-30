import { useDispatch } from "react-redux";
import {
  FaHandshake,
  FaFlag,
  FaLaptop,
  FaFilm,
  FaFutbol,
} from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { fetchPublishers } from "../features/publisherSlice";
import { Item } from "../types/models/types";
import { BsCheckAll } from "react-icons/bs";

function CategoriesSection() {
  const dispatch = useDispatch();

  const categories = [
    {
      id: 7,
      name: "General",
      icon: <BsCheckAll />,
      color: "from-orange-600 to-orange-400",
    },
    {
      id: 1,
      name: "Business",
      icon: <FaHandshake />,
      color: "from-yellow-600 to-yellow-400",
    },
    {
      id: 2,
      name: "Health",
      icon: <FaFlag />,
      color: "from-blue-600 to-blue-400",
    },
    {
      id: 5,
      name: "Sports",
      icon: <FaFutbol />,
      color: "from-violet-600 to-violet-400",
    },
    {
      id: 4,
      name: "Entertainment",
      icon: <FaFilm />,
      color: "from-teal-600 to-teal-400",
    },
    {
      id: 3,
      name: "Technology",
      icon: <FaLaptop />,
      color: "from-green-600 to-green-400",
    },
    {
      id: 6,
      name: "Science",
      icon: <MdScience />,
      color: "from-lime-600 to-lime-400",
    },
  ];

  const handleCategoryClick = (categoryName: string): void => {
    dispatch<any>(fetchPublishers(categoryName.toLowerCase()));
  };

  return (
    <section className="bg-white pt-6 pb-8">
      <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {categories.map((item: Item) => (
            <button
              key={item.id}
              className={`p-4 flex items-center gap-8 justify-center rounded-lg shadow-md hover:shadow-lg transform transition duration-200 hover:-translate-y-1 bg-gradient-to-r ${item.color}`}
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
