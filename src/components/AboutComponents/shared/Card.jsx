const Card = ({ image, heading, paragraph, a, Icon, iconStyle }) => {
  return (
    <div className="border mob:w-full ltab:w-2/4 laptop:w-1/4 mob:px-5   ltab:p-10 mob:h-[55vh] ltab:h-[90vh]">
      <img
        src={image}
        alt="image"
        width=""
        className="w-[50%] mx-auto py-5"
      />
      <h1 className="font-bold mob:text-sm stab:text-base ltab:text-lg h-10">
        {heading}
      </h1>
      <p className="mob:h-[40%] ltab:h-[55%] laptop:h-[70%] xl:h-[65%]  mob:py-2 ltab:py-5 mob:text-xs  ltab:text-sm font-semibold">
        {paragraph}
      </p>
      <div className="text-[#c00] mob:font-semibold ltab:font-bold hover:text-rose-800 group">
        <a className="">{a}</a>
        <span className={iconStyle}>{Icon && <Icon size="20" />}</span>
      </div>
    </div>
  );
};

export default Card;