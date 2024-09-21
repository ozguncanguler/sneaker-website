import { FC } from "react";
import { LoginProps } from "../types";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Login: FC<LoginProps> = ({ setSelectedPage: LoginProps }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");

  return (
    <section
      id="log in"
      className="flex flex-col justify-center items-center h-full gap-16 py-32"
    >
      {/* Başlık ve Açıklama */}
      <div className="text-left mb-4">
        <h1 className="text-3xl font-bold  text-dark-blue md:text-6xl md:font-extrabold">
          Grow your collection
        </h1>
        <p className="text-base lg font-normal text-dark-blue mt-4 md:text-">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="relative w-full h-screen flex flex-col md:h-auto md:mb-32 md:flex-row">
        {/* Sol Menü */}
        <div className="flex flex-row text-nowrap w-full justify-start  translate-y-[-5vh]  md:flex-col md:space-y-6 md:w-1/5">
          <button className="bg-white px-6 py-3 text-dark-blue text-left flex rounded-lg hover:shadow-lg transition duration-500">
            <img className="pr-3 " src="../assets/searchicon.svg" alt="" />
            Bibendum tellus
          </button>
          <button className="bg-white px-6 py-3 text-dark-blue text-left flex rounded-lg hover:shadow-lg transition duration-500">
            <img className="pr-3 " src="../assets/shieldicon.svg" alt="" />
            Cras eget
          </button>
          <button className="bg-white px-6 py-3 text-dark-blue text-left flex rounded-lg hover:shadow-lg transition duration-500">
            <img className="pr-3 " src="../assets/rocketicon.svg" alt="" />
            Dolor pharetra
          </button>
          <button className="bg-white px-6 py-3 text-dark-blue text-left flex rounded-lg hover:shadow-lg transition duration-500">
            <img className="pr-3 " src="../assets/screenicon.svg" alt="" />
            Amet, fringilla
          </button>
          <button className="bg-white px-6 py-3 text-dark-blue text-left flex rounded-lg hover:shadow-lg transition duration-500">
            <img className="pr-3 " src="../assets/podcasticon.svg" alt="" />
            Amet nibh
          </button>
          <button className="bg-white px-6 py-3 text-dark-blue text-left flex rounded-lg hover:shadow-lg transition duration-500">
            <img className="pr-3 " src="../assets/eqicon.svg" alt="" />
            Sed velit
          </button>
        </div>

        {/* Sağdaki Görseller */}
        <div className="flex justify-center items-center relative w-full md:w-4/5 h-full">
          {/* Arka plandaki görsel */}
          <img
            src="./assets/screendesktoppeople.png"
            alt="Desktop People"
            className="absolute w-[65%] h-auto top-0 left-1/4 transform translate-x-[-15%] translate-y-[-15%]  z-10 transition-transform duration-1000 hover:scale-105 hover:z-40"
          />

          {/* Ortadaki görsel */}
          <img
            src="./assets/screendesktopthreesneaker.png"
            alt="Three Sneakers"
            className="absolute w-[75%] h-auto top-0 left-1/4 transform translate-x-[0%] translate-y-[0%] z-20 transition-transform duration-1000 hover:scale-105 hover:z-40"
          />

          {/* En öndeki görsel */}
          <img
            src="./assets/strechingleg.png"
            alt="Streching Leg"
            className="absolute w-[30%] h-auto top-1/4 left-3/4 transform translate-x-[-0%] translate-y-[0%] z-30 transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
