import TextDivider from "../shared/TextDivider";
import background from "../../../assets/WWB-image-2.webp"
import Characteristics from "../shared/Characteristics";




const Explore = () => {
  return (
    <div>
      <TextDivider text="Explore Bain" />
      <div className="w-[80vw] mx-auto flex flex-wrap mb-14">
        <Characteristics text="What We Do" />
        <Characteristics text="Awards & Recognition" />
        <Characteristics text="Our People & Leadership" />
        <Characteristics text="Diversity, Equity & Inclusion" />
        <Characteristics text="Social Impact" />
      </div>

      {/* image Section */}
      <div>
        <div
          className="w-[100vw] mob:h-[30vh] ltab:h-[70vh] mb-20"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="mob:text-[40px] stab:text-[60px] ltab:text-[80px] laptop:text-[100px] font-bold text-center text-white pt-[10%]">
            Choose extraordinary.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Explore