import CenteredText from "../shared/CenteredText";
import TextDivider from "../shared/TextDivider";
import img1 from "../../../assets/WWB-img-1.jpg";

const MidSection = () => {
  return (
    <div>
      <CenteredText
        text="Our Belief is not only a part of Venture desk core principles, they are what makes for a team of smart, energetic, and motivated people who know that working here is never just a job. Their passion and willingness translates into great customer relationships and the cutting-edge solutions that we develop."
        style="text-justified"
      />
      <TextDivider text="Our Mission" />
      <CenteredText
        text="Our mission is to help our clients create such high levels of value that together we set new standards of excellence in our respective industries."
        style="text-justified"
      />
      <TextDivider text="Guided by True North" />
      <img src={img1} className="w-[100vw] mob:h-[30vh] ltab:h-[70vh]" />
    </div>
  );
};

export default MidSection;
