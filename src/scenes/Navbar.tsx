import { useState, FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { NavbarProps, LinkProps } from "../types";

const Link: FC<LinkProps> = ({
  page,
  selectedPage,
  setSelectedPage,
}: LinkProps) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-brown border-2 border-brown p-3 rounded-md"
          : "text-dark-brown"
      } hover:text-brown transition duration-500 font-medium text-base`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar: FC<NavbarProps> = ({
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");

  return (
    <nav className={`z-40 w-full top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-roboto text-3xl font-medium">Collers</h4>

        {/* DESKTOP NAVIGATION BAR*/}
        {isLargeScreen ? (
          <div className="flex justify-between gap-16 font-roboto text-sm font-semibold">
            <Link
              page="Products"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Solutions"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Pricing"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Resources"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Log In"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Sign up now"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <>
            <button
              className="rounded-full hover:bg-dark-yellow p-3 transition duration-500"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img src="../assets/menu-icon.svg" alt="menu-icon" />
            </button>
            {/* MOBILE MENU POPUP */}
            {!isLargeScreen && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full bg-yellow w-1/2 mx-auto">
                {/* CLOSE ICON */}
                <div className="flex justify-end w-2/3 mx-auto py-6">
                  <button
                    className="rounded-full hover:bg-dark-yellow p-3 transition duration-500"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <img src="../assets/close-icon.svg" alt="close-icon" />
                  </button>
                </div>

                {/* MENU ITEMS */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-dark-brown">
                  <Link
                    page="Products"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Solutions"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Pricing"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Resources"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Log In"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Sign up now"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
