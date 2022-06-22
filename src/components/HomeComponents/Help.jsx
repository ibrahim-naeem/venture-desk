import React from 'react'

const HelpContent = ({title, text}) => {
    return (
      <div className="flex flex-col mob:px-0 stab:px-10 stab:py-[130px] mob:py-5" style={{display: 'flex', alignItems:'center'}}>
        <h1 className="mob:text-xl stab:text-2xl laptop:text-4xl font-bold text-white pb-10">{title}</h1>
        <button className="laptop:w-2/5 mob:w-full p-4 bg-[#CC0000] border text-white font-bold hover:bg-red-800 hover:border-none ">
          {text}
        </button>
      </div>
    );
}
const Help = () => {
  return (
    <div className="flex stab:justify-around bg-[#CC0000] mob:flex-col stab:flex-row mob:p-10 stab:p-0">
      <HelpContent
        title="What can we help you achieve?"
        text="LET'S GET TO WORK"
      />
      <div className="border-r stab:border-black stab:h-[280px] stab:mt-20"></div>
      <HelpContent
        title="Where will your career take you?"
        text="COME FIND OUT"
      />
    </div>
  );
}

export default Help