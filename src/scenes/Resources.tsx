import { FC } from "react";
import { ResourcesProps } from "../types";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Resources: FC<ResourcesProps> = ({ setSelectedPage: ResourcesProps }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");

  return (
    <section
      id="resources"
      className="flex flex-col justify-center items-center h-full gap-16 py-32"
    >
      <div className="relative w-full h-[600px] overflow-hidden bg-yellow-200">
        <div className="flex justify-center md:justify-between items-center w-full px-10 absolute top-0 left-0">
          <h2 className="text-4xl font-bold text-blue-900">
            Because they love us
          </h2>
          {isLargeScreen && (
            <div className="flex  space-x-4">
              <button className="bg-white p-2 rounded-full shadow-md">
                <img
                  src="../assets/lefticon.svg"
                  alt="Left Arrow"
                  className="w-6 h-6"
                />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md">
                <img
                  src="../assets/righticon.svg"
                  alt="Right Arrow"
                  className="w-6 h-6"
                />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center h-full space-x-6 px-10 py-10 overflow-x-hidden">
          <div className="flex-shrink-0 w-[300px] h-[400px] bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4 flex justify-start">
              <img
                src="../assets/zoomerlogo.png"
                alt="Zoomerr"
                className="w-2/5"
              />
            </div>
            <p>
              Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus.
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="../assets/Hellen.png"
                alt="Hellen Jummy"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">Hellen Jummy</p>
                <p className="text-sm text-gray-500">Team Lead</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[300px] h-[400px] bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4 flex justify-start">
              <img
                src="../assets/shellslogo.png"
                alt="Shells"
                className="w-2/5"
              />
            </div>
            <p>Aliquet ridiculus mi porta habitant vulputate rhoncus.</p>
            <div className="mt-4 flex items-center">
              <img
                src="../assets/Hellena.png"
                alt="Hellena John"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">Hellena John</p>
                <p className="text-sm text-gray-500">Co-founder</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[300px] h-[400px] bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4 flex justify-start">
              <img
                src="../assets/artvenuelogo.png"
                alt="Art Venue"
                className="w-2/5"
              />
            </div>
            <p>A eget sed posuere dui risus habitasse mauris.</p>
            <div className="mt-4 flex items-center">
              <img
                src="../assets/david.png"
                alt="David Oshodi"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">David Oshodi</p>
                <p className="text-sm text-gray-500">Manager</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[300px] h-[400px] bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4 flex justify-start">
              <img src="../assets/waveslogo.svg" alt="waves logo" />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-4 flex items-center">
              <img
                src="../assets/Charolette.png"
                alt="Jane Doe"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">Jane Doe</p>
                <p className="text-sm text-gray-500">Lead Developer</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[300px] h-[400px] bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4 flex justify-start">
              <img
                src="../assets/artvenuelogo.png"
                alt="Art Venue"
                className="w-2/5"
              />
            </div>
            <p>A eget sed posuere dui risus habitasse mauris.</p>
            <div className="mt-4 flex items-center">
              <img
                src="../assets/david.png"
                alt="David Oshodi"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">David Oshodi</p>
                <p className="text-sm text-gray-500">Manager</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[300px] h-[400px] bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4 flex justify-start">
              <img
                src="../assets/artvenuelogo.png"
                alt="Art Venue"
                className="w-2/5"
              />
            </div>
            <p>A eget sed posuere dui risus habitasse mauris.</p>
            <div className="mt-4 flex items-center">
              <img
                src="../assets/david.png"
                alt="David Oshodi"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">David Oshodi</p>
                <p className="text-sm text-gray-500">Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
