
import { RiArrowRightFill } from "react-icons/ri";
const ImageZoomBox = ({img, text})=>(
    <div className="w-[80vw] mob:h-[20vh] stab:h-[30vh] ltab:h-[55vh] mx-auto my-16 flex overflow-hidden group">
        <img
          src={img}
          className="w-full bg-center hover:scale-110 duration-700"
        />
        {/* text side */}
        <div className="mob:w-[50vw] ltab:w-[40vw] absolute mob:mt-[13%] stab:mt-[12%] mob:pl-2 stab:pl-3 ltab:pl-5">
          <h1 className="mob:text-base stab:text-xl ltab:text-2xl laptop:text-4xl text-white mob:font-semibold ltab:font-bold">
            {text}
            {/* <span className="relative -top-6 left-[450px] py-5">
              <RiArrowRightFill
                size="23"
                className="group-hover:ml-2 duration-300 ease-out"
              />
            </span> */}
          </h1>
        </div>
      </div>
)

export default ImageZoomBox;