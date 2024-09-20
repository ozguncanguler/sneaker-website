import { FC } from "react";
import { ProductsProps } from "../types";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Products: FC<ProductsProps> = ({ setSelectedPage: ProductsProps }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");

  return (
    <section
      id="products"
      className="flex flex-col justify-between items-center h-auto gap-16 py-32"
    >
      <div
        className=" flex flex-col items-center
      md:flex-row md:justify-between"
      >
        <div className="flex flex-col w:4/5 md:w-1/2">
          <div
            className="text-6xl font-extrabold text-center
          md:text-7xl md:text-left"
          >
            Collectible Sneakers
          </div>
          <div
            className="text-base font-normal py-4 text-center 
          md:text-left md:text-lg md:py-10"
          >
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="text-dark-brown font-medium text-xl border-brown border-2 px-4 py-2 rounded-md text-nowrap md:px-12 md:py-4">
              Sign up now
            </button>
            <button className="text-dark-brown font-medium text-base px-12 py-4 text-nowrap">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="w-4/5 py-4 relative md:w-2/5 md:py0">
          <div className="absolute bg-dark-yellow rounded-[50px] w-[90%] h-[90%] z-[0]" />
          <img
            className="relative z-1"
            src="../assets/sneaker.png"
            alt="sneaker"
          />
        </div>
      </div>

      <div className="flex flex-col my-2 md:flex-row">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="py-2">
            <img src="../assets/cupicon.svg" alt="cupicon" />
          </div>
          <div className="text-xl font-medium py-2">Nibh viverra</div>
          <div className="text-lg font-normal py-2">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="py-2">
            <img src="../assets/buddyicon.svg" alt="buddyicon" />
          </div>
          <div className="text-xl font-medium py-2">Cursus amet</div>
          <div className="text-lg font-normal py-2">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="py-2">
            <img src="../assets/tvicon.svg" alt="tvicon" />
          </div>
          <div className="text-xl font-medium py-2">Ipsum fermentum</div>
          <div className="text-lg font-normal py-2">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
