import img1 from "../../../assets/OP-1.webp"
import img2 from "../../../assets/OP-2.webp"
import img3 from "../../../assets/OP-3.webp"
import img4 from "../../../assets/OP-4.webp"

const Card = ({ img, h1, p1, p2, border }) => {
  return (
    <div className={`mob:w-[70vw] ltab:w-2/4 laptop:w-1/4 px-4 ltab:my-10 laptop:my-5 mob:h-[30vh] stab:h-[40vh] ${border && "ltab:border-r"}`}>
      <img src={img} className="w-full" />
      <h1 className="mob:text-sm stab:text-base ltab:text-xl font-bold pt-5 hover:text-[#c00]">{h1}</h1>
      <p className="mob:text-xs ltab:text-base text-slate-500 font-semibold">{p1}</p>
      <p className="mob:text-xs ltab:text-base text-slate-500 font-semibold">{p2}</p>
    </div>
  );
};

const CardSection = ( ) => {
  return (
    <div>
      <div className={`flex flex-wrap w-[80vw] mx-auto mob:mb-8 stab:mb-12 ltab:mb-16 laptop:mb-20 `}>
        <Card
          img={img1}
          h1="Manel Oliva-Trastoy"
          p1="Worldwide Managing Partner"
          p2="San Francisco"
          border="true"
        />
        <Card
          img={img2}
          h1="Orit Gadiesh"
          p1="Chairman"
          p2="London  "
          border="true"
        />
        <Card
          img={img3}
          h1="Ivan Hindshaw"
          p1="Partner"
          p2="Los Angeles"
          border="true"
        />
        <Card img={img4} h1="Satish Shankar" p1="Partner" p2="Singapore" />
        <Card
          img={img1}
          h1="Manel Oliva-Trastoy"
          p1="Worldwide Managing Partner"
          p2="San Francisco"
          border="true"
        />
        <Card
          img={img2}
          h1="Orit Gadiesh"
          p1="Chairman"
          p2="London  "
          border="true"
        />
        <Card
          img={img3}
          h1="Ivan Hindshaw"
          p1="Partner"
          p2="Los Angeles"
          border="true"
        />
        <Card img={img4} h1="Satish Shankar" p1="Partner" p2="Singapore" />
      </div>
      <div className="flex justify-center">
        <button className="w-[200px] p-4 bg-white border text-[#C00] font-bold hover:bg-[#C00] hover:text-white ">
          VIEW MORE EXPERTS
        </button>
      </div>
    </div>
  );
};

export default CardSection;

