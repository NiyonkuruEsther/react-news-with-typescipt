// import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaFlag,
  FaLaptop,
  FaFilm,
  FaFutbol,
  FaHome,
} from "react-icons/fa";

function CategoriesSection() {
  const categories = [
    {
      id: 1,
      name: "Business",
      icon: <FaHandshake />,
      color: "from-yellow-600 to-yellow-400",
    },
    {
      id: 2,
      name: "Politics",
      icon: <FaFlag />,
      color: "from-blue-600 to-blue-400",
    },
    {
      id: 3,
      name: "Technology",
      icon: <FaLaptop />,
      color: "from-green-600 to-green-400",
    },
    {
      id: 4,
      name: "Entertainment",
      icon: <FaFilm />,
      color: "from-pink-600 to-pink-400",
    },
    {
      id: 5,
      name: "Sports",
      icon: <FaFutbol />,
      color: "from-indigo-600 to-indigo-400",
    },
  ];

  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {categories.map((item, index) => (
            <button
              // to={``}
              key={item.id}
              // to={`/${item.name.toLowerCase()}`}
              className={`p-4 flex items-center gap-8 justify-center rounded-lg shadow-md hover:shadow-lg transform transition duration-200 hover:-translate-y-1 bg-gradient-to-r ${item.color}`}
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
