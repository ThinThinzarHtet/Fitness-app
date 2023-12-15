import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";

import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const navLinks: string[] = ["Home", "Benefits", "Our Classes", "Contact Us"];

const index = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  console.log(isTopOfPage);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              // ! desktop size
              <div className={`${flexBetween} w-full`}>
                {/* nav links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {navLinks.map((link) => (
                    <React.Fragment key={link}>
                      <NavLink
                        page={link}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </React.Fragment>
                  ))}
                </div>
                {/* buttons */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              // !mobile screen
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-300 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* menu items */}
          <div className="text ml-[33%] flex flex-col gap-10 text-2xl">
            {navLinks.map((link) => (
              <React.Fragment key={link}>
                <NavLink
                  page={link}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default index;
