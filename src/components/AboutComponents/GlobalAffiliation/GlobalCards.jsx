import spin1 from "../../../assets/spin-1.webp";
import spin2 from "../../../assets/spin-2.webp";
import spin3 from "../../../assets/spin-3.webp";
import spin4 from "../../../assets/spin-4.webp";
import spin5 from "../../../assets/spin-5.webp";
import spin6 from "../../../assets/spin-6.webp";
import spin7 from "../../../assets/spin-7.webp";
import spin8 from "../../../assets/spin-8.webp";

import { MdOpenInNew } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import Card from "../shared/Card";




const GlobalCards = () => {
  return (
    <div>
      <div className="flex mob:flex-col ltab:flex-row flex-wrap ltab:border w-[80vw] overflow-hidden mx-auto mb-20">
        <Card
          image={spin1}
          heading="Bain + World Economic Forum"
          paragraph="The B20 leads engagement with G20 governments on behalf of the international business community. Bain is a Knowledge Partner for B20 Argentina 2018, leading the Sustainable Food System task force."
          a="More on World Economic Forum"
          Icon={RiArrowRightSFill}
          iconStyle={
            "relative -top-5 mob:left-[240px] laptop:left-[130px] xl:left-[100px ] group-hover:left-[55px] duration-300"
          }
        />
        <Card
          image={spin2}
          heading="Bain + Bridgespan"
          paragraph="Bain believes that nonprofit organizations should have the same access to results as for-profit businesses. In 2000, this belief launched The Bridgespan Group, the first firm to deliver high-level strategy consulting services to the nonprofit sector."
          a={`More on Bridgespan`}
          Icon={MdOpenInNew}
          iconStyle={"relative -top-5 left-[165px]"}
        />
        <Card
          image={spin3}
          heading="Bain + Endeavor"
          paragraph="Endeavor is a global nonprofit that seeks to catalyze long-term economic growth by supporting high-impact entrepreneurs around the world. Bain is a proud supporter, having partnered to develop and implement both Endeavor’s global and country-level strategies."
          a="More on Endeavor"
          Icon={RiArrowRightSFill}
          iconStyle={
            "relative -top-5 left-[140px] group-hover:left-[148px] duration-300"
          }
        />
        <Card
          image={spin4}
          heading="Bain + Acumen"
          paragraph="Acumen's mission is to change the way the world tackles poverty by investing in companies, leaders and ideas. So far, it has invested more than $80 million around the world. Bain first partnered with Acumen in 2012 through our pro bono consulting efforts, and we continue to collaborate on other strategic topics as well as intellectual property development."
          a="More on Acumen"
          Icon={RiArrowRightSFill}
          iconStyle={
            "relative -top-5 left-[130px] group-hover:left-[138px] duration-300"
          }
        />
        <Card
          image={spin5}
          heading="Bain + Business 20 (B20)"
          paragraph="The B20 leads engagement with G20 governments on behalf of the international business community. Bain is a Knowledge Partner for B20 Argentina 2018, leading the Sustainable Food System task force."
          a="More on Business 20 (B20)"
          Icon={MdOpenInNew}
          iconStyle={
            "relative -top-5 mob:left-[210px] laptop:left-[50px] xl:left-[210px] "
          }
        />
        <Card
          image={spin6}
          heading="Bain + G(irls)20"
          paragraph="G(irls)20 is a unique global platform that invests in empowering girls and women around the world. Designed according to the G20 architecture, the G(irls)20 Summit brings together one delegate from each G20 country, plus a representative from the European and African Unions, Afghanistan, Pakistan and the MENA region, to debate and design solutions that will economically advance girls and women around the world. Bain is proud to be a key partner of G(irls)20."
          a="More on G(irls)20"
          Icon={MdOpenInNew}
          iconStyle={"relative -top-5 left-[137px]"}
        />
        <Card
          image={spin7}
          heading="Bain + IBLAC"
          paragraph="The International Business Leaders' Advisory Council (IBLAC) is an advisory group to the Mayor of Shanghai. The annual meeting is an opportunity for chairmen and CEOs from major global corporations to provide strategic advice on issues and opportunities relating to Shanghai’s economic development and global positioning. Bain has participated in the meeting since 2008, and Bain Chairman Orit Gadiesh served a three-year term as IBLAC chairman."
          a="More on IBLAC"
          Icon={MdOpenInNew}
          iconStyle={"relative -top-5 left-[120px]"}
        />
        <Card
          image={spin8}
          heading="Bain + National Retail Federation"
          paragraph="The National Retail Federation (NRF) and Bain are partnering to identify the most reliable, forward-looking KPIs and benchmarks to provide participants with reliable benchmark data, relevant context, and key quantitative and qualitative insights relevant for strategic decision making today, starting with ~40 Modern Supply Chain Metrics."
          a="More on NRF"
          Icon={RiArrowRightSFill}
          iconStyle={
            "relative -top-5 left-[100px] group-hover:left-[110px] duration-300"
          }
        />
      </div>
    </div>
  );
}

export default GlobalCards
