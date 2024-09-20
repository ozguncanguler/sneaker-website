import { FC } from "react";
import { SolutionsProps } from "../types";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Solutions: FC<SolutionsProps> = ({ setSelectedPage: SolutionsProps }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");

  return (
    <section
      id="solutions"
      className="flex flex-col justify-between items-center h-auto gap-16 pt-12 translate-y-[-3%] md:py-32"
    >
      <div className="flex-col">
        <div className="flex flex-col items-center py-12 md:flex md:flex-row md:justify-between">
          <div className="text-white text-3xl font-bold my-2 md:text-6xl md:font-extrabold">
            The best of the best
          </div>
          <button className="text-white font-bold text-2xl my-2 border-white border-2 px-12 py-4 rounded-md md:font-medium md:text-xl">
            Sign up now
          </button>
        </div>
        <div className="flex-col justify-between md:flex md:flex-row">
          <div className="rounded-lg mb-8 shadow-custom-white hover:shadow-custom-white-hover transition-shadow duration-300 md:w-[30%] md:mb-0">
            <img
              className="relative z-1 rounded-t-lg"
              src="../assets/twosneaker.png"
              alt="two sneaker"
            />
            <div className=" text-2xl text-white font-bold p-6">Title</div>
            <div className="text-lg text-white font-normal p-6">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
            <div className="p-6">
              <button className="border-white border-2 rounded-lg w-full items-center text-xl font-medium text-white p-4 flex justify-center">
                <img src="../assets/carticon.svg" alt="cart icon" />
                Buy now
              </button>
            </div>
          </div>

          <div className="rounded-lg mb-8 shadow-custom-white hover:shadow-custom-white-hover transition-shadow duration-300 md:w-[30%] md:mb-0">
            <img
              className="relative z-1 rounded-t-lg"
              src="../assets/threesneaker.png"
              alt="three sneaker"
            />
            <div className="text-2xl text-white font-bold p-6">Title</div>
            <div className="text-lg text-white font-normal p-6">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
            <div className="p-6">
              <button className="border-white border-2 rounded-lg w-full items-center text-xl font-medium text-white p-4 flex justify-center">
                <img src="../assets/carticon.svg" alt="cart icon" />
                Buy now
              </button>
            </div>
          </div>

          <div className="rounded-lg mb-8 shadow-custom-white hover:shadow-custom-white-hover transition-shadow duration-300 md:w-[30%] md:mb-0">
            <img
              className="relative z-1 rounded-t-lg"
              src="../assets/twolegswithsneaker.png"
              alt="two legs with sneaker"
            />
            <div className="text-2xl text-white font-bold p-6">Title</div>
            <div className="text-lg text-white font-normal p-6">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
            <div className="p-6">
              <button className="border-white border-2 rounded-lg w-full items-center text-xl font-medium text-white p-4 flex justify-center">
                <img src="../assets/carticon.svg" alt="cart icon" />
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
