/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "soft-yellow": "#fef3c7",
        "dark-yellow": "#FBBF24",
        "dark-brown": "#78350F",
        "dark-blue": "#0F172A",
        "white-shadow": "#E2E8F0",
        "bright-green": "#A3E635",
        creme: "#fefbec",
        yellow: "#FDE68A",
        pink: "#BE185D",
        green: "#15803D",
        blue: "#0369A1",
        purple: "#A21CAF",
        brown: "#B45309",
      },
      backgroundImage: (theme) => ({
        "rectangle-image": "url('./assets/rectanglebackground.png')",
        "wavesfull-image": "url('./assets/vawesfullscreenbackground.png')",
        "wavesmobile-image": "url('./assets/wavesbackgroundmobile.png')",
        "cream-to-white": "linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 100%)",
        backlights: "url('./assets/backlightsbackground.png')",
        "backlights-mobile": "url('./assets/backlightsmobilebackground.png')",
      }),
      fontFamily: {
        roboto: "Roboto",
      },
      content: {
        sneaker: "url('./assets/sneaker.png')",
        strechingleg: "url('./assets/strechingleg.png')",
        threesneaker: "url('./assets/threesneaker.png')",
        twolegssneaker: "url('./assets/twolegswithsneaker.png')",
        twosidedsneaker: "url('./assets/twoshoedifferentside.png')",
        twosneaker: "url('./assets/twosneaker.png')",

        applestore: "url('./assets/appstoredownload.png')",
        googleplay: "url('./assets/googleplaydownload.png')",
        artvenuelogo: "url('./assets/artvenuelogo.png')",
        shellslogo: "url('./assets/shellslogo.png')",
        waveslogo: "url('./assets/waveslogo.png')",
        zoomerlogo: "url('./assets/zoomerlogo.png')",

        person1: "url('./assets/Hellen.png')",
        person2: "url('./assets/Hellena.png')",
        person3: "url('./assets/david.png')",
        person4: "url('./assets/Charolette.png')",

        desktoppeople: "url('./assets/screendesktoppeople.png')",
        desktopthreeshoes: "url('./assets/screendesktopthreesneaker.png')",
        desktopvideo: "url('./assets/screendesktopvideo.png')",

        wavesfull: "url('./assets/vawesfullscreenbackground.png')",
        wavesmobile: "url('./assets/wavesbackgroundmobile.png')",
        worldmap: "url('./assets/worldmap.png')",
        rectangle: "url('./assets/rectanglebackground.png')",
      },
      screens: {
        xs: "480px",
        sm: "720px",
        md: "1080px",
      },
      boxShadow: {
        "custom-white":
          "0px 25px 50px -12px rgba(255, 255, 255, 0.25), 0px 0px 15px rgba(255, 255, 255, 0.07)",
        "custom-white-hover":
          "0px 35px 60px -12px rgba(255, 255, 255, 0.35), 0px 0px 25px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
