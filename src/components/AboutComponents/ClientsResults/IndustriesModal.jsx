

const Input = ({ text }) => (
  <div className="flex py-1 group">
    <input
      type="checkbox"
      className="mob:h-3 stab:h-4 ltab:h-5 mob:w-3 stab:w-4 ltab:w-5 mr-2 accent-red-600"
      
    />
    <p className="mob:text-xs stab:text-base ltab:text-lg relative -top-1 group-hover:text-[#c00]">{text}</p>
  </div>
);

const IndustriesModal = () => {
  return (
    <div className="border w-[100vw] ltab:h-[53vh] bg-[#fff] relative top-2 border-b">
      <div className="mob:w-[90%] border ltab:w-5/6 mob:ml-8 stab:ml-12 ltab:ml-16 laptop:ml-20 pt-10 flex flex-wrap mob:justify-between ltab:justify-around ">
        <div>
          <Input text="Advanced Manufacturing & Services" />
          <Input text="Aerospace, Defense & Government Services" />
          <Input text="Automotive & Mobility" />
          <Input text="Aviation" />
          <Input text="Chemicals" />
          <Input text="Consumer Products" />
          <Input text="Energy & Natural Resources" />
        </div>
        <div>
          <Input text="Advanced Manufacturing & Services" />
          <Input text="Aerospace, Defense & Government Services" />
          <Input text="Automotive & Mobility" />
          <Input text="Aviation" />
          <Input text="Chemicals" />
          <Input text="Consumer Products" />
          <Input text="Energy & Natural Resources" />
        </div>
        <div>
          <Input text="Advanced Manufacturing & Services" />
          <Input text="Aerospace, Defense & Government Services" />
          <Input text="Automotive & Mobility" />
          <Input text="Aviation" />
          <Input text="Chemicals" />
          <Input text="Consumer Products" />
          <Input text="Energy & Natural Resources" />
        </div>
      </div>
      <div>
        <button className="text-[#c00] font-bold hover:text-[#fff] hover:bg-[#c00] w-full py-3 mt-10">
          APPLY
        </button>
      </div>
    </div>
  );
}

export default IndustriesModal