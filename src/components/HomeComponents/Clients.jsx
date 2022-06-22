import React from 'react'
import client_1 from '../../assets/client_1.webp'
import client_2 from "../../assets/client_2.webp";
import client_3 from "../../assets/client_3.webp";

const ImgComp = ({img}) => {
    return (
        <img src={img} alt='img'/>
    )
}


const Content= ({ }) => {
    return (
      <div className="">
        <h1 className="mob:text-2xl stab:text-4xl laptop:text-6xl font-bold mob:mt-5 stab:mt-0">
          Bold steps forward.
        </h1>
        <p className="mob:text-base stab:text-xl mob:py-5 stab:py-10 font-semibold">
          See how we’ve helped ambitious clients achieve extraordinary outcomes.
        </p>
        {/* Card Container */}
        <div className="flex justify-between mob:flex-col stab:flex-row  w-full ">
          {/* First card */}
          <div className="mob:w-full ltab:w-[100%] h-40 mob:my-5 stab:my-0 stab:pr-5 ">
            <p className="border-b-[3px] text-lg font-semibold">
              Featured client success story
            </p>
            <h1 className="mob:text-xl stab:text-2xl laptop:text-3xl font-bold py-5">
              Sales blueprint puts IT Services Co.'s growth back on track
            </h1>

            <a href="#" className="text-[#c00] font-bold">
              Read Story
            </a>
          </div>
          {/* Second card */}
          <div className="mob:w-full ltab:w-[100%] group h-64 mob:mb-20 ltab:mb-0">
            <p className="border-b-[3px] text-lg font-semibold ">
              How we helped
            </p>
            <div className="w-0 group-hover:w-[100%] bg-[#c00] h-1 relative -top-1 ease-in duration-300"></div>
            <div className="hover:bg-slate-50 border-x border-b h-64">
              <h1 className=" h-[70px] mob:text-xl stab:text-2xl laptop:text-3xl group-hover:text-base font-bold py-5 pl-5 ease-in duration-300">
                Agile Enterprise
              </h1>
              <p className="text-transparent h-[70px] group-hover:text-black pl-5 ease-in duration-300">
                Become faster, more flexible, and intensely customer-focused
              </p>

              <a
                href="#"
                className="text-[#c00] font-bold pl-5 relative top-10 "
              >
                View Offering
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}



const Clients = () => {
  return (
    <div className="mob:px-10 stab:px-15 ltab:px-20 py-10 my-10 ">
      <div className="flex mob:flex-col ltab:flex-row">
        <div className="mob:w-full ltab:w-1/2 laptop:w-2/5 ltab:pr-5 ">
          <ImgComp img={client_1} />
        </div>
        <div className="mob:w-full ltab:w-1/2 laptop:w-3/5 laptop:px-10">
          <Content />
        </div>
      </div>

      <div className="flex justify-center ltab:mt-20">
        <button className="mob:w-full stab:w-2/5 p-4  bg-white border text-[#C00] font-bold hover:bg-[#C00] hover:text-white">
          SEE ALL CLIENT RESULTS
        </button>
      </div>
    </div>
  );
}

export default Clients