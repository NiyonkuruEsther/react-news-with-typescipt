import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublishers, selectPublishers } from "../features/publisherSlice";
import { BsArrowDown } from "react-icons/bs";

const Publisher = ({ onPublisherChange }) => {
  const [selectedPublisher, setSelectedPublisher] = useState("abc-news");
  const [showAllPublishers, setShowAllPublishers] = useState(false);
  const dispatch = useDispatch();
  const { publishers } = useSelector(selectPublishers);

  const handlePublisherChange = (publisher) => {
    setSelectedPublisher(publisher.id);
    if (onPublisherChange) {
      onPublisherChange(publisher);
    }
  };

  useEffect(() => {
    dispatch(fetchPublishers());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap lg:flex-col gap-8 w-full items-center justify-center">
      {publishers?.length > 0 && (
        <div className="flex flex-wrap lg:grid gap-3 ">
          {publishers.slice(0, 5).map((publisher) => (
            <div key={publisher.id}>
              <button
                className="bg-blue-400 p-2 ring-4 w-full rounded-md ring-blue-700 whitespace-nowrap"
                onClick={() => handlePublisherChange(publisher)}
              >
                {publisher.name}
              </button>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setShowAllPublishers(true)}
        className="rounded-full p-2 border-2 w-fit ring-2 ring-blue-700  border-blue-700"
      >
        <BsArrowDown className="text-3xl" />
      </button>
      {publishers?.length > 5 && showAllPublishers && (
        <div className="fixed z-[10000000] inset-0 h-max overflow-y-scroll bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">All Publishers</h2>
              <button
                className="text-gray-500"
                onClick={() => setShowAllPublishers(false)}
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-6 gap-3 ">
              {publishers?.map((publisher) => (
                <button
                  key={publisher.id}
                  className={`p-2 rounded-md ${
                    selectedPublisher === publisher.id
                      ? "bg-blue-400 ring-4 ring-blue-700"
                      : "bg-gray-200 ring-2 ring-gray-400"
                  }`}
                  onClick={() => {
                    handlePublisherChange(publisher);
                    setShowAllPublishers(false);
                  }}
                >
                  {publisher.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publisher;
