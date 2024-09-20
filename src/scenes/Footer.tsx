import { FC } from "react";
import { FooterProps } from "../types";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer: FC<FooterProps> = ({ setSelectedPage: FooterProps }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");
  const [language, setLanguage] = useState("EN");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <footer className="bg-dark-blue text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Browse
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Five
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Brainstorming
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ideation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wireframing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Design
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Get the App */}
          <div className="md:text-center">
            <h3 className="md:text-lg md:font-bold md:mb-4">Get the App</h3>
            <div className="flex flex-col items-center space-y-4">
              <a href="#">
                <img
                  src="./assets/appstoredownload.png"
                  alt="Download on the App Store"
                  className="md:w-48"
                />
              </a>
              <a href="#">
                <img
                  src="./assets/googleplaydownload.png"
                  alt="Get it on Google Play"
                  className="md:w-48"
                />
              </a>
            </div>

            {/* Social Icons */}
            <div className="md:mt-6">
              <h3 className="my-4 md:text-lg md:font-bold md:mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-6 justify-center">
                <img src="../assets/youtubeicon.svg" alt="Youtube icon" />
                <img src="../assets/facebookicon.svg" alt="Facebook icon" />
                <img src="../assets/twittericon.svg" alt="Twitter icon" />
                <img src="../assets/instagramicon.svg" alt="Instagram icon" />
                <img src="../assets/linkedinicon.svg" alt="LinkedIn icon" />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-0 h-0.5 bg-[#334155] my-4" />

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <p>Collers @ 2023. All rights reserved.</p>
          </div>

          {/* TOS */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="md:hover:underline">
              Terms
            </a>
            <a href="#" className="md:hover:underline">
              Privacy
            </a>
            <a href="#" className="md:hover:underline">
              Contact
            </a>

            {/* Language Selector */}
            <div className=" md:relative">
              <button
                className="md:bg-dark-blue md:text-white md:py-2 md:px-4 md:rounded md:border-none md:flex md:items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="md:mr-2">🌐</span> {language} ▼
              </button>
              {dropdownOpen && (
                <ul className="md:absolute md:bottom-full md:mb-2 md:w-32 md:bg-white md:text-dark-blue md:shadow-lg md:rounded md:transform md:translate-y-full">
                  <li
                    className="md:py-2 md:px-4 md:hover:bg-gray-200 md:cursor-pointer"
                    onClick={() => handleLanguageChange("EN")}
                  >
                    EN
                  </li>
                  <li
                    className="md:py-2 md:px-4 md:hover:bg-gray-200 md:cursor-pointer"
                    onClick={() => handleLanguageChange("TR")}
                  >
                    TR
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
