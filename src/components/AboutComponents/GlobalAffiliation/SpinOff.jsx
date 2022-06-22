import TextDivider from '../shared/TextDivider';
import CenteredText from "../shared/CenteredText";

export const SpinOff = () => {
  return (
    <div className="pb-20">
      <div className="pt-20">
        <TextDivider text="Bain Spin-Off" />
      </div>
     
      <CenteredText
        h1="Bain Capital"
        text="In 1984, Bill Bain and his partners set out to apply the same
          results-oriented approach to the private equity market. As a separate
          company, Bain Capital shares no management or information with Bain &
          Company. What we do share, however, is our approach to taking on tough
          business challenges and our commitment to delivering extraordinary
          results."
        style="text-justified"
      />
    </div>
  );
}
