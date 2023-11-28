"use client";

import Image from "next/image";
import Logo from "../../../../public/assets/logo.svg";
import HamburgerMenu from "../../../../public/assets/hamburger-menu.svg";
import CartIcon from "../../../../public/assets/cart-icon.svg";

import MobileNavbar from "../navbar/mobile-navbar";
import DefaultNavbar from "../navbar/default-navbar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Header = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleShowMobileNavbar = () => {
    setShowMobileNavbar((prev) => !prev);
  };

  useEffect(() => {});

  return (
    <>
      {isMobile && showMobileNavbar ? <MobileNavbar /> : null}
      <header className="bg-black py-8 px-6 border-b border-light_gray_200 border-opacity-25 relative z-20">
        <div className="flex justify-between max-w-5xl mx-auto">
          {isMobile ? (
            <button onClick={handleShowMobileNavbar}>
              <Image src={HamburgerMenu} alt="hamburger menu icon" />
            </button>
          ) : null}
          <div>
            <Image src={Logo} alt="company logo" />
          </div>
          {!isMobile ? <DefaultNavbar orientation="row" /> : null}
          <button>
            <Image src={CartIcon} alt="cart icon" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
