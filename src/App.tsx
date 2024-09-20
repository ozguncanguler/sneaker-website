import Navbar from "./scenes/Navbar";
import Products from "./scenes/Products";
import Solutions from "./scenes/Solutions";
import Pricing from "./scenes/Pricing";
import Resources from "./scenes/Resources";
import Login from "./scenes/Login";
import Signup from "./scenes/Signup";
import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("/");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isLargeScreen = useMediaQuery("(min-width: 1080px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`app ${
        isLargeScreen === true ? "bg-cream-to-white" : "bg-white"
      }`}
    >
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-full h-auto bg-rectangle-image bg-no-repeat bg-bottom bg-cover md:h-full">
        <div className="w-5/6 mx-auto h-auto md:h-full">
          <Products
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </div>
      <div className="w-full h-auto bg-dark-blue md:h-full">
        <div className="w-11/12  mx-auto h-full md:w-5/6">
          <Solutions
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </div>
      <div className="w-full h-full bg-white">
        <div className="w-5/6 mx-auto h-full ">
          <Pricing
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </div>
      <div className="w-full h-full ">
        <div className="w-5/6 mx-auto h-full ">
          <Resources
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </div>
      <div className="w-full h-full bg-wavesfull-image bg-no-repeat bg-left-bottom bg-cover">
        <div className="w-5/6 mx-auto h-full ">
          <Login
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </div>
      <div className="w-full md:h-full bg-dark-brown ">
        <div className="w-5/6 mx-auto md:h-full ">
          <Signup
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </div>
      <div className="w-full h-auto bg-dark-blue ">
        <div className="w-5/6 mx-auto h-auto ">
          <Footer
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
