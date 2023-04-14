import Publisher from "./Publisher";

const NewsAndPublishers = () => {
  return (
    <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12 flex-col flex gap-8 ">
      <div className="w-full grid grid-cols-11">
        <div className="col-span-9"></div>
        <div className="">
          <Publisher />
        </div>
      </div>
    </div>
  );
};

export default NewsAndPublishers;
