import Publisher from "./Publisher";

const NewsAndPublishers = () => {
  return (
    <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12 grid grid-cols-8">
      <div className="col-span-7"></div>
      <div className="col-span-1">
        <Publisher />
      </div>
    </div>
  );
};

export default NewsAndPublishers;
