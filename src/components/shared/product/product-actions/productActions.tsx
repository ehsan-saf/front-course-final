import { IconBox } from "@/components";

export function ProductActions() {
  return (
    <div className="absolute top-1/2 left-1/2 hidden w-24 -translate-x-1/2 -translate-y-1/2 grid-cols-3 rounded-[5px] border-[1px] border-greenBorder bg-white text-brand-1 group-hover:grid">
      <button className="cursor-pointer border-r-[1px] border-[inherit] hover:bg-green-100">
        <IconBox
          icon="heart"
          size={{ mobile: 16, nonMobile: 16 }}
          className="p-2"
        />
      </button>
      <button className="cursor-pointer border-r-[1px] border-[inherit] hover:bg-green-100">
        <IconBox
          icon="shuffle"
          size={{ mobile: 16, nonMobile: 16 }}
          className="p-2"
        />
      </button>
      <button className="cursor-pointer hover:bg-green-100">
        <IconBox
          icon="eye"
          size={{ mobile: 16, nonMobile: 16 }}
          className="p-2"
        />
      </button>
    </div>
  );
}
