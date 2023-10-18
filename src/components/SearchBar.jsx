import { SearchIcon } from "../assets/icons/icons";

const SearchBar = ({ setSearch }) => {
  return (
    <nav className="flex w-full pr-8 mt-20 rounded-xl bg-[#1E5D69]">
      <input
        className="text-xl md:text-2xl w-full px-8 py-4 rounded-l-xl bg-[#1E5D69] outline-none caret-primary selection:bg-primary selection:text-[#6040DD]"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search characters"
        type="text"
      />
      <img src={SearchIcon} alt="Search Icon" />
    </nav>
  );
};

export default SearchBar;
