
const CenteredText = ({h1,text, style}) => {
  return (
    <div className="mob:w-[80vw] ltab:w-[55vw] mx-auto mob:py-2 stab:py-5 ">
    <h1 className="mob:text-xs stab:text-lg ltab:text-xl font-bold mob:pb-2 stab:pb-4">{h1}</h1>
      <p className={`mob:text-xs stab:text-lg ltab:text-2xl ${style ? style : "text-center"}`}>{text}</p>
    </div>
  );
}

export default CenteredText