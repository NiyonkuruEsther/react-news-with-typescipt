import React from "react";

function CategoriesSection() {
  const categories = [
    {
      id: 1,
      name: "Business",
      icon: "fa fa-handshake",
      color: "from-yellow-600 to-yellow-400",
    },
    {
      id: 2,
      name: "Politics",
      icon: "fa fa-flag",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: 3,
      name: "Technology",
      icon: "fa fa-laptop",
      color: "from-green-600 to-green-400",
    },
    {
      id: 4,
      name: "Entertainment",
      icon: "fa fa-film",
      color: "from-pink-600 to-pink-400",
    },
    {
      id: 5,
      name: "Sports",
      icon: "fa fa-futbol",
      color: "from-indigo-600 to-indigo-400",
    },
  ];

  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {categories.map((item, index) => (
            <a
              href=""
              key={item.id}
              //   to={index}
              //   to={`/${item.name.toLowerCase()}`}
              className={`p-4 flex items-center rounded-lg shadow-md hover:shadow-lg transform transition duration-200 hover:-translate-y-1 bg-gradient-to-r ${item.color}`}
            >
              <i className={`${item.icon} text-4xl text-white mr-4`} />
              <span className="text-white text-lg">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
