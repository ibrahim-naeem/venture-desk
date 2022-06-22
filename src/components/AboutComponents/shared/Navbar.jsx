import { FiBookmark } from "react-icons/fi";
import { BsFillShareFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import "./animation.css";

const  P= ({ text }) => (
  <p className="text-slate-500 mob:text-[10px] stab:text-base font-semibold hover:text-[#c00]  mob:mr-2 ltab:mr-5">
    {text}
  </p>
);

export const Navbar = ({ h3, p1, p2, p3, p4 }) => {
  const [navPosition, setNavPosition] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const offset = window.pageYOffset;
      if (offset > 670) {
        setNavPosition(true);
      } else if (offset < 640) {
        setNavPosition(false);
      }
    });
  }, []);

  return (
    <div
      className={`w-[100vw] flex justify-between mob:px-2 ltab:px-[120px] bg-[#fff] border-b ${
        navPosition && " w-[100vw] fixed mob:top-[53px] stab:top-[60px]"
      } `}
    >
      <div className="flex mob:py-1 stab:py-3 ">
        {navPosition && (
          <h3
            className={`mob:text-xs ltab:text-base mob:font-semibold ltab:font-bold border-r mob:pr-1 stab:pr-5 mob:mr-5 stab:mr-5 ${
              navPosition && "slide-right"
            }`}
          >
            {h3}
          </h3>
        )}
        <div
          className={`${
            !navPosition && "slide-left "
          }relative left-[100px] flex`}
        >
          {p1 && <P text={p1} />}
          {p2 && <P text={p2} />}
          {p3 && <P text={p3} />}
          {p4 && <P text={p4} />}
        </div>
      </div>
      <div className="flex mob:py-2 stab:py-3">
        <FiBookmark size="18" className=" text-slate-500 hover:text-[#c00]" />
        <div className="h-5 mob:mx-1.5 ltab:mx-4 border-r" />
        <BsFillShareFill
          size="18"
          className=" text-slate-500 hover:text-[#c00]"
        />
      </div>
    </div>
  );
};



 

 

 

 
