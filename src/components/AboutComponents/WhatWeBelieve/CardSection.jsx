import React from 'react'

const Card = ({ h1, p, border }) => (
  <div className="text-center ">
    <div className={`${border && 'ltab:border-r'} mob:p-8 ltab:p-5`}>
      <h1 className="mob:text-base stab:text-lg ltab:text-xl font-bold pb-5">{h1}</h1>
      <p className="mob:text-xs ltab:text-base">{p}</p>
    </div>
  </div>
);

const CardSection = () => {
  return (
    <div>
      <div className=' flex mob:flex-col ltab:flex-row mob:w-full ltab:w-[80vw] mx-auto bg-white mob:p-3 stab:p-5 ltab:p-7 laptop:p-10 relative -top-[150px]'>
        <Card
          h1="Passion & Commitment"
          p="We have a passion for results aligned with our clients’ success, and a commitment to the highest level of professionalism and ethical standards in everything we do."
          border="true"

        />
        <Card
          h1="Honesty & Openness"
          p="We have a deep intellectual honesty, and the candor to tell it like it is in straightforward language. We remain open to the possibility that current beliefs could be wrong."
          border="true"
        />
        <Card
          h1="Practical"
          p="We combine bold thinking with a practical approach that focuses on getting the job done, turning decisions into action and delivering results."
          border="true"
        />
        <Card
          h1="One Team"
          p="We work as one global team—both with each other and our clients—to direct our collective energy toward achieving the extraordinary."
        />
      </div>
    </div>
  );
}

export default CardSection