import { useState } from "react";
import { Logo } from "@/components";
import { SearchForm } from "./searchForm";
import { IconBox } from "@/components";
import { Menu } from "./menu";

export function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <header>
      <div className="flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="container flex justify-between">
            <Logo />
            <div className="hidden lg:flex flex-1">
              <SearchForm containerClass="ml-auto" />

              {/* <!-- --------------------- --> */}
              <div className="ml-auto flex items-center gap-2.5">
                <IconBox icon="user" title="Account" />
                <IconBox icon="shopping-cart" badge={4} title="Cart" />
              </div>
            </div>
            <button
              className="navbar-toggler lg:hidden"
              onClick={() => setMenuExpanded(true)}
            >
              <span className="fi-rs-burger-menu text-2xl"></span>
            </button>
          </div>
        </div>

        {/* <!--  -- Second header row --> */}
        <div className="p-6 border-b border-border">
          <div className="container flex justify-between">
            <Menu expanded={menuExpanded} setExpanded={setMenuExpanded} />
            <div className="lg:hidden flex-1 flex justify-between">
              <SearchForm />
              {/* <!-- --------------------- --> */}
              <div className="flex items-center gap-2.5">
                <IconBox icon="user" />
                <IconBox icon="shopping-cart" badge={4} />
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <span className="fi-rs-headset text-4xl"></span>
              <div className="flex flex-col">
                <h3 className="text-brand-1">1900 - 8888</h3>
                <div className="font-lato text-body">24/7 Support Center</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
