import { ImageView } from "@/components";
import { Logo } from "@/components";
import { ArrowDown, ArrowDownWideNarrow } from "lucide-react";
import { SearchForm } from "./searchForm";
import { IconBox } from "@/components";

export function Header() {
  return (
    <header>
      <div>
        <div className="offcanvas">
          <div className="offcanvas-body">
            <div className="accordion border-b-[1px] border-border">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button navbar-accordionButton">
                    <span className="fi-rs-apps"></span>
                    <span>Browse All Categories</span>
                    <ArrowDown />
                  </button>
                </h2>
                <div className="accordion-collapse">
                  <div className="accordion-body mt-4">
                    <ul className="flex flex-col gap-4 pb-2">
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/031-groceries.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Milks and Dairies
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/044-dress.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Clothing & Beauty
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="icons/021-pet-food.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Pet Foods & Toy
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/006-dairy-products.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Baking material
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/009-fruit.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Fresh Fruit
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/004-drinks.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Wines & Drinks
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/026-crab.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Fresh Seafood
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/001-sweet.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Fast food
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/032-grocery.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Vegetables
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/010-milk-products.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Bread and Juice
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <ul className="flex flex-col gap-8 mt-8">
              <li className="flex items-center gap-2">
                <span className="fi-rs-flame text-xl text-brand-1"></span>
                <span>Hot Deals</span>
              </li>
              <li>Home</li>
              <li>Vegetables</li>
              <li>Drink</li>
            </ul>
          </div>
          <div className="offcanvas-backdrop"></div>
        </div>
        {/* <!-- ---------- Mobile Navbar ----------- -->
        <!-- First header row --> */}
        <div className="px-6 py-5 border-b border-border lg:hidden">
          <div className="container flex justify-between">
            {/* <!------ Logo ------> */}
            <Logo />
            {/* <!-----------------> */}

            <button className="navbar-toggler">
              <span className="fi-rs-burger-menu text-2xl"></span>
            </button>
          </div>
        </div>

        {/* <!-- Second header row --> */}
        <div className="p-6 border-b border-border lg:hidden">
          <div className="container flex justify-between">
            <SearchForm />
            {/* <!-- --------------------- --> */}
            <div className="flex items-center gap-2.5">
              <IconBox icon="user" />
              <IconBox icon="shopping-cart" badge={4} />
            </div>
          </div>
        </div>
        {/* <!-- ----------------- -->
        <!-- ----------- Desktop Header ---------- -->
        <!-- First header row  --> */}
        <div className="hidden lg:block p-8 border-b border-border">
          <div className="container flex justify-between items-center">
            {/* <!------ Logo ------> */}
            <Logo />

            {/* <!-- Search bar --> */}
            <SearchForm />

            <div className="flex items-center gap-5 font-montserrat">
              <IconBox icon="user" title="Account" />
              <IconBox icon="shopping-cart" title="Cart" badge={4} />
            </div>
          </div>
        </div>
        {/* <!-- -------- Second header row -------- --> */}
        <div className="hidden lg:block p-6 border-b border-border">
          <div className="container flex justify-between items-center">
            <div className="accordion">
              <div className="accordion-item relative">
                <h2 className="accordion-header">
                  <button className="accordion-button navbar-accordionButton">
                    <span className="fi-rs-apps"></span>
                    <span>Browse All Categories</span>
                    <ArrowDownWideNarrow />
                  </button>
                </h2>
                <div className="accordion-collapse w-lg absolute z-2 translate-y-7 border-greenBorder bg-white">
                  <div className="accordion-body">
                    <ul className="grid grid-cols-2 gap-4 pb-2">
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/031-groceries.svg"
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Milks and Dairies
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/044-dress.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Clothing & Beauty
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/021-pet-food.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Pet Foods & Toy
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/006-dairy-products.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Baking material
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/009-fruit.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Fresh Fruit
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/004-drinks.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Wines & Drinks
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/026-crab.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Fresh Seafood
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/001-sweet.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Fast food
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="icons/032-grocery.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Vegetables
                      </li>
                      <li className="flex items-center gap-9">
                        <div className="w-12 h-8 flex-shrink-0">
                          <ImageView
                            src="/icons/010-milk-products.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        Bread and Juice
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- --------- --> */}
            <ul className="flex items-center gap-8">
              <li className="flex items-center gap-2">
                <span className="fi-rs-flame text-xl text-brand-1"></span>
                <span>Hot Deals</span>
              </li>
              <li>Home</li>
              <li>Vegetables</li>
              <li>Drink</li>
            </ul>
            {/* <!-- ---------- --> */}
            <div className="flex items-center gap-3">
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
