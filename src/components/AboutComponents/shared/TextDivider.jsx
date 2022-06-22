
const TextDivider = ({text}) => {
  return (
    <div className="flex justify-center mob:py-5 stab:py-8">
      <div className="border-t border-grey w-[25vw] "></div>
          <p className="text-center mob:text-xl stab:text-2xl ltab:text-3xl laptop:text-4xl mob:font-semibold ltab:font-bold mob:-mt-4 stab:-mt-5 mob:px-1 stab:px-5">{text}</p>
      <div className="border-t border-grey w-[25vw]"></div>
    </div>
  );
}

export default TextDivider