import CenteredText from "../shared/CenteredText";
import TextDivider from "../shared/TextDivider";

const Passion = () => {
  return (
    <div>
      <div className="-mt-[100px]">
        <TextDivider text="Development practices" />
      </div>
      <div>
        <CenteredText
          h1="Trust"
          text="We take great care in our recruitment process. This is because we know the true worth of a position at the Cubix table. Our recruitment procedure is crafted in a way that allows it to save job offer for those talented programmers who can showcase exceptional performance. There are several studies out there that have mentioned that an exceptional programmer can be 10 times as productive as compared to a mediocre one.

          It is imperative that our development processes are created on the core belief that our programmers are of utmost quality. Furthermore, we have faith in our personnel that they do the best possible things not just for Cubix but also for the project, as well as the client."
          style="text-justified"
        />
        <CenteredText
          h1="Verification"
          text="Here are some of the most essential features of verification:

          Review by Management: The task of project management needs to be conducted in manners that paves way for routine, simple visibility into their state not only in selecting the best candidates for the job – It also helps in the review of the overall development and the design of the project. For management review, general project documentation is the most viable practice.
          
          Review by Peer: The conduct of regular code and design peer reviews is a must. This will aid in guaranteeing that every task has steadily stayed at the highest level. Furthermore, it will ensure a feasible way to pass on ideas as well as techniques throughout the organization. This review process, not only ensures engagement among individuals, but also creates a sense of growth and learning on each level.
          
          Review by Automation: Every code should be made so that it can be tested. A standard testing structure eases the code creation process, which can verify it is correct. This will let us be upbeat regarding the code’s robust nature. Additionally, we will also be able to upgrade our designs as per the client’s later demands, and we will also avoid regression errors."
          style="text-justified"
        />
        <CenteredText
          h1="Flexibility"
          text="We believe that our employees as well as their owned projects have a great deal of sophistication and complexity. Besides some essential practices such as the style of coding, and source management, the methodological “excesses” should be unique according to the client and the project. At the time of a project initiation, it should be decided either it is best to conduct a huge design in advance even before creating code, or to utilize an iterative design approach. This is very important as the wrong match could end up resulting as the project’s failure."
          style="text-justified"
        />
        <CenteredText
          h1="The right balance"
          text="Our flexibility is directly related with the aim of finding “the right balance” as we believe it is important to successfully complete every single project that offers what it supposed to and even exceed expectations. While choosing practices to use on any given project, every single one should be selected keeping in mind the acceptable strictness level, as this will assist in attaining a successful project. It must be noted that any project that is demanding a lot of efforts in its code and design’s documentation is likely to miss its deadline. Moreover, any project in which documentation is done without much effort can jeopardize the maintenance programmers’ success later on as they would be required to utilize their precious time and energies to reverse engineer the project – only to gain better understanding of it."
          style="text-justified"
        />
      </div>
    </div>
  );
};

export default Passion;
