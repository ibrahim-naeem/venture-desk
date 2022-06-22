const Input = ({ text }) => (
  <div className="flex py-1 group">
    <input type="checkbox" className="h-5 w-5 mr-2 accent-red-600" />
    <p className="text-lg relative -top-1 group-hover:text-[#c00]">{text}</p>
  </div>
);

const ServicesModal = () => {
  return (
    <div className="w-[100vw] h-[53vh] bg-[#fff] relative top-2 border-b">
      <div className=" w-5/6 ml-20 pt-10 flex justify-around ">
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
        <button className="text-[#c00] font-bold hover:text-[#fff] hover:bg-[#c00] w-[1520px] py-3 mt-10">
          APPLY
        </button>
      </div>
    </div>
  );
};

export default ServicesModal;
