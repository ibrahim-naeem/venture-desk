module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: "350px",
        // => @media (min-width: 350px) { ... } 

        stab: "768px",
        // => @media (min-width: 768px) { ... }

        ltab: "1024px",
        // => @media (min-width: 1024px) { ... }

        laptop: "1280px",
        // => @media (min-width: 1280px) { ... }

        "xl": "1300px",
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100px)" },
          "50%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(100px)" },
        },
      },
    },
  },
  plugins: [],
};
