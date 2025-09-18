"use client";

import { useState } from "react";
import { LoginModal, Logo, RegisterModal } from "@/components";
import { SearchForm } from "./searchForm";
import { IconBox } from "@/components";
import { Menu } from "./menu";
import { useModal, useUser } from "@/store";
import { useCart } from "@/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { MobileSearchForm } from "./mobileSearchForm";

export function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [mobileSearchExpanded, setMobileSearchExpanded] = useState(false);

  const queryClient = useQueryClient();

  const { user, logout } = useUser();
  const { cartItems } = useCart();
  const { currentModal, openModal } = useModal();

  const cartQuantity = cartItems.length === 0 ? undefined : cartItems.length;

  const accountHandler = () => {
    if (user) {
      logout();
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
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
                  badge={cartQuantity}
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
              <button
                onClick={() => setMobileSearchExpanded(true)}
                className="md:hidden"
              >
                <IconBox
                  icon="search"
                  size={{ mobile: 20, nonMobile: 20 }}
                  className="text-body"
                />
              </button>
              <SearchForm containerClass="hidden md:block lg:hidden" />
              <MobileSearchForm
                isExpanded={mobileSearchExpanded}
                setIsExpanded={setMobileSearchExpanded}
              />
              {/* <!-- --------------------- --> */}
              <div className="ml-auto flex items-center gap-2.5">
                <button onClick={accountHandler}>
                  <IconBox
                    icon="user"
                    size={{
                      mobile: 24,
                      nonMobile: 24,
                    }}
                  />
                </button>
                <IconBox
                  icon="shopping-cart"
                  badge={cartQuantity}
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
