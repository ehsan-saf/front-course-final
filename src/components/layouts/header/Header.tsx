import { useState } from "react";
import { LoginModal, Logo, RegisterModal } from "@/components";
import { SearchForm } from "./searchForm";
import { IconBox } from "@/components";
import { Menu } from "./menu";
import { useModal, useUser } from "@/store";

export function Header() {
  const { user, logout } = useUser();
  const [menuExpanded, setMenuExpanded] = useState(false);
  const { currentModal, openModal } = useModal();

  const accountHandler = () => {
    if (user) {
      logout();
    } else {
      openModal("login");
    }
  };

  return (
    <header>
      {currentModal === "login" && <LoginModal />}
      {currentModal === "register" && <RegisterModal />}
      <div className="flex flex-col">
        <div className="border-b border-border p-6">
          <div className="container flex justify-between">
            <Logo />
            <div className="hidden flex-1 lg:flex">
              <SearchForm containerClass="ml-auto" />
              {/* <!-- --------------------- --> */}
              <div className="ml-auto flex items-center gap-2.5">
                <button onClick={accountHandler}>
                  <IconBox
                    icon="user"
                    title={user ? user.username : "Log in"}
                    size={{
                      mobile: 24,
                      nonMobile: 24,
                    }}
                  />
                </button>

                <IconBox
                  icon="shopping-cart"
                  badge={4}
                  title="Cart"
                  size={{
                    mobile: 24,
                    nonMobile: 24,
                  }}
                />
              </div>
            </div>
            <button
              className="navbar-toggler lg:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setMenuExpanded(true);
              }}
            >
              <IconBox icon="menu" size={{ mobile: 24, nonMobile: 24 }} />
            </button>
          </div>
        </div>

        {/* <!--  -- Second header row --> */}
        <div className="border-b border-border p-6">
          <div className="container flex justify-between">
            <Menu expanded={menuExpanded} setExpanded={setMenuExpanded} />
            <div className="flex flex-1 justify-between lg:hidden">
              <SearchForm />
              {/* <!-- --------------------- --> */}
              <div className="flex items-center gap-2.5">
                <button onClick={accountHandler}>
                  <IconBox
                    icon="user"
                    title={user ? user.username : "Log in"}
                    size={{
                      mobile: 24,
                      nonMobile: 24,
                    }}
                  />
                </button>
                <IconBox
                  icon="shopping-cart"
                  badge={4}
                  title="Cart"
                  size={{
                    mobile: 24,
                    nonMobile: 24,
                  }}
                />
              </div>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <IconBox icon="headset" size={{ nonMobile: 36, mobile: 16 }} />
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
