const HeroSection = ({ background, small, main, text }) => {
  return (
    <div>
      <div
        className="mob:h-[50vh] stab:h-[60vh] ltab:h-[80vh] w-[100vw] bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Card */}
        <div className="w-[45vw] relative top-[15%] left-[12%] border-t-2 border-[#c00] bg-slate-50 opacity-95 mob:px-2 ltab:px-5">
          <div className="mob:p-1 stab:p-4 ltab:p-6 laptop:p-8">
            {small && (
              <p className="text-[#c00] mob:text-xs stab:text-sm ltab:text-base laptop:text-lg font-semibold">
                {small}
              </p>
            )}
            <h1 className="mob:text-xl stab:text-2xl ltab:text-3xl laptop:text-4xl text-base font-bold mob:py-2 ltab:py-5  ">
              {main}
            </h1>
            <p className="text-black mob:text-xs stab:text-sm ltab:text-base laptop:text-lg pb-5">
              {text}
            </p>
          </div>
        </div>
        {/* Card */}
      </div>
    </div>
  );
};

export default HeroSection;
