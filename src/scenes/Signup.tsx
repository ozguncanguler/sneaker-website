import { FC } from "react";
import { SignupProps } from "../types";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useState } from "react";

const Signup: FC<SignupProps> = ({ setSelectedPage, selectedPage }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const circles = [
    { top: "15%", left: "35%", size: "w-[2.5vw] h-[2.5vw]" }, // Büyük daire
    { top: "15%", left: "15%", size: "w-[2.5vw] h-[2.5vw]" }, // Büyük daire
    { top: "50%", left: "60%", size: "w-[2.5vw] h-[2.5vw]" }, // Büyük daire
    { top: "30%", left: "75%", size: "w-[2.5vw] h-[2.5vw]" }, // Büyük daire
    { top: "80%", left: "80%", size: "w-[2.5vw] h-[2.5vw]" }, // Büyük daire
    { top: "60%", left: "53%", size: "w-[2.5vw] h-[2.5vw]" }, // Büyük daire
    { top: "25%", left: "20%", size: "w-[1.5vw] h-[1.5vw]" }, // Küçük daire
    { top: "80%", left: "27%", size: "w-[1.5vw] h-[1.5vw]" }, // Küçük daire
    { top: "20%", left: "80%", size: "w-[1.5vw] h-[1.5vw]" }, // Küçük daire
    { top: "45%", left: "20%", size: "w-[1.5vw] h-[1.5vw]" }, // Küçük daire
  ];

  return (
    <section id="sign up now" className="relative w-full py-10 md:py-24">
      <div
        id="mapcontainer"
        className="relative aspect-video"
        style={{
          backgroundImage: "url('./assets/worldmap.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          maxHeight:
            (Number(document.getElementById("mapcontainer")?.style.width) /
              16) *
            9,
        }}
      >
        {/* Büyük Sayı ve Alt Metin */}
        <div className="absolute top-[25%] w-full text-center text-white">
          <h1 className="text-5xl font-extrabold md:text-8xl">11,658,467</h1>
          <p className="text-3xl font-bold md:text-6xl md:font-extrabold">
            Shoes Collected
          </p>
        </div>

        {/* Daireler ve Hover Olayı */}
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`absolute ${circle.size} border-2 md:border-4 border-bright-green rounded-full hover:bg-bright-green cursor-pointer transition-all duration-300`}
            style={{ top: circle.top, left: circle.left }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute top-[-20px] left-[-60px] bg-white rounded-xl p-2 shadow-lg flex flex-col items-center"
                style={{ width: "220px" }} // Referansa göre pencere genişliği
              >
                <img
                  src="./assets/twoshoedifferentside.png"
                  alt="Two Shoes Different Side"
                  className="w-auto h-auto rounded-lg shadow-md"
                />
                <p className="text-dark-blue text-xs text-center font-normal">
                  Emma Simpson collected one pair of Cool Shoes
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Signup;
