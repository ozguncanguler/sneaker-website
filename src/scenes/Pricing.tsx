import { FC } from "react";
import { PricingProps } from "../types";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Pricing: FC<PricingProps> = ({ setSelectedPage: PricingProps }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");

  return (
    <section
      id="pricing"
      className="flex flex-col justify-center items-center h-full gap-16 pt-4  md:py-32"
    >
      <div className="flex flex-col justify-around bg-white bg-opacity-80  shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl     md:flex-row md:h-2/3">
        <div className="md:w-2/5 flex flex-col justify-center items-center md:items-start">
          <div className="text-3xl font-bold py-3 md:text-6xl md:font-extrabold ">
            Why join us
          </div>
          <div className="text-base font-normal py-3 md:text-xl ">
            <ul className="list-none">
              <li className="flex items-center mb-2">
                <img
                  src="../assets/tickicon.svg"
                  alt="tick icon"
                  className="w-4 h-4 mr-2"
                />
                Est et in pharetra magna adipiscing ornare aliquam
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="../assets/tickicon.svg"
                  alt="tick icon"
                  className="w-4 h-4 mr-2"
                />
                Tellus arcu sed consequat ac velit ut eu blandit.
              </li>
              <li className="flex items-center">
                <img
                  src="../assets/tickicon.svg"
                  alt="tick icon"
                  className="w-4 h-4 mr-2"
                />
                Ullamcorper ornare in et egestas dolor orci.
              </li>
            </ul>
          </div>
          <div className="py-3">
            <button className="text-dark-brown font-medium text-xl border-dark-brown border-2 px-12 py-4 rounded-lg">
              Sign up now
            </button>
          </div>
        </div>

        <div className="w-full mt-12 flex items-center md:w-2/5">
          <motion.svg
            width="85"
            height="86"
            viewBox="0 0 85 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-30 w-1/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // %50 görünümde olduğunda tetiklenecek
            transition={{ duration: 2, ease: "easeOut" }} // 2 saniye ve yumuşak geçiş
            variants={{
              hidden: { x: 0, y: "-6rem" }, // Başlangıç pozisyonu
              visible: { x: "9rem", y: "7rem" }, // Görünümdeki hedef pozisyon
            }}
          >
            <rect
              opacity="0.75"
              width="85"
              height="86"
              rx="42.5"
              fill="#15803D"
            />
          </motion.svg>

          <img
            className="relative z-20"
            src="../assets/screendesktopvideo.png"
            alt="Screen desktop video"
          />
          <motion.svg
            className="absolute z-10 w-5/6 md:w-1/3"
            width="713"
            height="627"
            viewBox="0 0 713 627"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // %50 görünümde olduğunda animasyon tetiklenecek
            transition={{ duration: 2, ease: "easeOut" }} // 2 saniyelik yumuşak geçiş
            variants={{
              hidden: { opacity: 0, scale: 0.9 }, // Başlangıçta %90 boyut ve tam şeffaf
              visible: { opacity: 1, scale: 1 }, // Görünümde tam opak ve %100 boyut
            }}
          >
            <rect
              y="471.948"
              width="666.284"
              height="217.934"
              transform="rotate(-45 0 471.948)"
              fill="#FDE68A"
            />
            <rect
              opacity="0.75"
              x="458"
              y="454"
              width="74"
              height="74"
              rx="30"
              fill="#A21CAF"
            />
            <rect
              opacity="0.75"
              x="513"
              y="46"
              width="59"
              height="60"
              rx="29.5"
              fill="#0369A1"
            />
            <rect
              opacity="0.75"
              x="495"
              y="375"
              width="218"
              height="218"
              rx="50"
              fill="#BE185D"
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
