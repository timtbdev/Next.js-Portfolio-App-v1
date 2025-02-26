import { IoSearch as SearchIcon } from "react-icons/io5";

const SearchButton = () => {
  return (
    <button className="group items-center rounded-full border border-transparent bg-gray-100 p-2 hover:border-dashed hover:border-gray-300">
      <SearchIcon className="size-[26px] text-gray-600 group-hover:scale-105 group-hover:text-black" />
    </button>
  );
};

export default SearchButton;
