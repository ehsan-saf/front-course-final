import { IconBox } from "@/components";

export function AccountTabs() {
  return (
    <>
      <ul className="flex gap-2.5 overflow-x-auto md:flex-col">
        <li>
          <button className="flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5">
            <IconBox icon="settings" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Dashboard</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center gap-3 rounded-[10px] border-1 border-border bg-brand-1 p-1 text-white md:px-7 md:py-5">
            <IconBox icon="list" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Orders list</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5">
            <IconBox icon="handbag" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Track your orders</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5">
            <IconBox icon="map-pin" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">My address</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5">
            <IconBox icon="user" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Account details</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5">
            <IconBox icon="log-out" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Log out</span>
          </button>
        </li>
      </ul>
    </>
  );
}
