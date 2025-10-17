import { IconBox } from "@/components";
import { useUser } from "@/store";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";

export function AccountTabs() {
  const [activeTab, setActiveTab] = useState(2);
  const { logout } = useUser();
  const router = useRouter();

  const logoutHandler = async () => {
    await router.push("/");
    logout();
  };

  return (
    <>
      <ul className="flex gap-2.5 overflow-x-auto md:flex-col">
        <li>
          <button
            onClick={() => setActiveTab(1)}
            className={clsx(
              "flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5",
              activeTab === 1 && "bg-brand-1 text-white",
            )}
          >
            <IconBox icon="settings" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Dashboard</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab(2)}
            className={clsx(
              "flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5",
              activeTab === 2 && "bg-brand-1 text-white",
            )}
          >
            <IconBox icon="list" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Orders list</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab(3)}
            className={clsx(
              "flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5",
              activeTab === 3 && "bg-brand-1 text-white",
            )}
          >
            <IconBox icon="handbag" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Track your orders</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab(4)}
            className={clsx(
              "flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5",
              activeTab === 4 && "bg-brand-1 text-white",
            )}
          >
            <IconBox icon="map-pin" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">My address</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab(5)}
            className={clsx(
              "flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5",
              activeTab === 5 && "bg-brand-1 text-white",
            )}
          >
            <IconBox icon="user" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Account details</span>
          </button>
        </li>
        <li>
          <button
            onClick={logoutHandler}
            className="flex w-full items-center gap-3 rounded-[10px] border-1 border-border p-1 md:px-7 md:py-5"
          >
            <IconBox icon="log-out" size={{ mobile: 16, nonMobile: 24 }} />
            <span className="w-max">Log out</span>
          </button>
        </li>
      </ul>
    </>
  );
}
