const DropDown = ({ children }) => {
  return (
    <div className="navItem__box absolute hidden top-[88px] left-[110px] w-[1150px] bg-white  px-6 py-8">
      {children}
    </div>
  );
};

export default DropDown;
