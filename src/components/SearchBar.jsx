import { SearchIcon, PlusIcon } from "../assets/icons";

const SearchBar = ({ action }) => {
  return (
    <section className="p-4 flex items-center gap-4 flex-col sm:flex-row">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[48px] px-14 rounded-[50px] focus:outline-primary border border-[#E2E2E2]"
        />
        <div className="absolute top-1/2 -translate-y-1/2 start-4">
          <SearchIcon />
        </div>
      </div>
      <button
        onClick={action}
        className="h-[48px] bg-primary text-white text-sm rounded-[50px] focus:outline-none px-6 flex items-center gap-1"
      >
        <PlusIcon />
        <span className="ml-2">New Employee</span>
      </button>
    </section>
  );
};

export default SearchBar;
