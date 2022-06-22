import logo from '../../../assets/awardsRecLogo.png';

const AwardHeroSection = () => {
  return (
    <div>
      {/* sectionOne */}
      <div className="flex ltab:flex-row mob:flex-col">
        {/* sideOne */}
        <div className="mob:w-full ltab:w-1/3">
          <div className="mob:px-12 stab:px-16 ltab:px-20 mob:m-2 ltab:m-6">
            <p className="text-[#c00] mob:text-xs stab:text-base ltab:text-xl font-semibold mob:py-1 ltab:py-5">
              About bain
            </p>
            <h1 className="mob:text-xl stab:text-3xl ltab:text-5xl font-bold">
              Awards & Recognition
            </h1>
          </div>
        </div>
        {/* sideTwo */}
        <div className="mob:w-full ltab:w-2/3">
          <p className="mob:text-lg stab:text-2xl ltab:text-3xl laptop:text-4xl font-semibold mob:p-8 stab:p-14 ltab:p-20">
            Bain & Company attracts and retains top talent for our clients.
            <span className="text-[#c00]  italic">
              And we are proud to be publicly recognized around the globe as a
              great place to work.
            </span>
            We're competitive for our clients, but very supportive with each
            other. Our people love what they do, making them great to work with.
          </p>
        </div>
      </div>
      {/* sectionTwo */}
      <div className="pb-20">
        <img src={logo} className="mob:w-[70vw] ltab:w-[30vw] mx-auto" />
        <div className="mob:w-[90vw] ltab:w-[55vw] m-auto">
          <h1 className="mob:text-sm stab:text-base ltab:text-xl font-bold pb-6 text-center">
            Best Places to Work 2022, Glassdoor
          </h1>
          <p className="mob:text-sm stab:text-base ltab:text-xl  text-center">
            Bain is #3 on Glassdoor’s Best Places to Work list. Bain has
            maintained its spot in the top four on Glassdoor's list for the last
            14 years. {""}
            <span className="border-b border-[#c00] hover:border-none hover:text-[#c00]">
              More on Glassdoor.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AwardHeroSection
