import { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Logo from "../assets/Logo.svg";
import { RxCross1 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  selectArticlesByPublisher,
} from "../features/newsSlice";
import SearchArticles from "./SearchArticles";

function Header() {
  const [tabValue, setTabValue] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const searchKeyword: string = useSelector(selectArticlesByPublisher);
  const dispatch = useDispatch();
  useEffect(() => {
    const changeScrolled = () => {
      window.scrollY >= 6 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", changeScrolled);
    return () => {
      window.removeEventListener("scroll", changeScrolled);
    };
  }, []);
  const handleSearchClick = () => {
    setTabValue(true);
  };

  const handleCloseClick = () => {
    setTabValue(false);
  };

  useEffect(() => {
    dispatch(fetchArticles(searchValue));
  }, [dispatch, searchValue]);

  const handleSearchChange = (e: object | any) => {
    setSearchValue(e.target.value);
  };

  return (
    <header
      className={`bg-white shadow-sm relative w-full ${tabValue ? "" : ""} ${
        scrolled ? "sticky top-0 z-[1000]" : ""
      }`}
    >
      <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-2 flex items-center justify-between">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-24" />
        </a>

        <div className="flex items-center gap-8 text-3xl">
          <button className="text-gray-600 hover:text-gray-800">
            <FaSearch onClick={handleSearchClick} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaBars />
          </button>
        </div>
      </div>
      {tabValue && (
        <div
          className={`bg-white sticky ${
            tabValue
              ? "h-screen w-screen flex items-center justify-center z-50"
              : "hidden"
          }`}
        >
          <div className="max-w-3xl w-3/4 lg:w-full flex absolute top-0 items-center">
            <div className="border h-fit flex justify-between items-center w-full  border-neutral-300 rounded-md ring ring-black p-2 flex-1">
              <input
                onChange={handleSearchChange}
                type="text"
                placeholder="Search..."
                className="outline-none flex-1 placeholder:text-xl "
              />
              <BsSearch className="text-black" />
            </div>

            <div className="flex justify-end px-2">
              <div className="p-2">
                <RxCross1
                  className={`self-end hover:border w-12 h-12 p-3 rounded-full`}
                  onClick={handleCloseClick}
                />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto absolute top-[10%] h-screen overflow-y-auto">
            {searchKeyword.length > 0 && (
              <SearchArticles articles={searchKeyword} />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
