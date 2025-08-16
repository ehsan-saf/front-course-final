import { IconBox } from "@/components";

export function SearchForm({ containerClass }: { containerClass?: string }) {
  return (
    <div
      className={`${containerClass} ml-auto w-full lg:max-w-[400px] xl:max-w-[700px]`}
    >
      <form className="relative flex">
        <input
          className={`w-full rounded-sm border-[1px] border-greenBorder px-6 py-3.5 font-montserrat text-[#B6B6B6]`}
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search for items"
        />
        <button
          type="submit"
          className={`absolute top-1/2 right-3.5 -translate-x-full -translate-y-1/2 pt-1`}
        >
          <IconBox
            icon="search"
            size={{ mobile: 20, nonMobile: 20 }}
            className="text-body"
          />
        </button>
      </form>
    </div>
  );
}
