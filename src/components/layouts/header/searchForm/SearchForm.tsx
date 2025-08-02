export function SearchForm() {
  return (
    <div className="relative w-full lg:max-w-[400px] xl:max-w-[700px]">
      <form className="flex">
        <input
          className={`
            w-full px-6 py-3.5 border-[1px] rounded-sm border-greenBorder font-montserrat text-[#B6B6B6]
          `}
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search for items"
        />
        <button
          type="button"
          className={`absolute pt-1 top-1/2 right-3.5 -translate-y-1/2 -translate-x-full`}
        >
          <span className="fi-rs-search"></span>
        </button>
      </form>
    </div>
  );
}
