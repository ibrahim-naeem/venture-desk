import CenteredText from '../shared/CenteredText';
import TextDivider from "../shared/TextDivider";
import img1 from "../../../assets/WWB-img-1.jpg";

const MidSection = () => {
  return (
    <div>
      <CenteredText
        text="We seek out people and clients who challenge themselves to be exceptional—and champion that spirit in others. We’re guided by True North, our unwavering commitment to always do the right thing by our clients, people and communities."
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
}

export default MidSection