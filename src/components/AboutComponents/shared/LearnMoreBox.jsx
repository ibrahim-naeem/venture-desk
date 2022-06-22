
const LearnMoreBox = ({img, h1, p}) => {
  return (
    <div className="border w-[80vw]  mx-auto my-10 flex">
      {/* text side */}
      <div className="w-1/2 mob:p-3 stab:p-5 my-auto">
        <h1 className="mob:text-lg stab:text-xl ltab:text-3xl font-bold">
          {h1}
        </h1>
        <p className="mob:text-xs stab:text-lg ltab:text-xl mob:py-2 stab:py-5">
          {p}
        </p>
        <button className="bg-[#c00] hover:bg-red-800 mob:text-xs stab:text-base text-white font-semibold mob:p-2 ltab:p-4 mob:mt-1 stab:mt-5">
          LEARN MORE
        </button>
      </div>
      {/* image side */}
      <div className="w-1/2">
        <img src={img} className="w-[100%] h-[100%] bg-cover bg-center" />
      </div>
    </div>
  );
}

export default LearnMoreBox