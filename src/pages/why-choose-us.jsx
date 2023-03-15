import Heading from "@/components/global/Heading";
import PageHeader from "@/components/global/PageHeader";
import Head from "next/head";
import Image from "next/image";

export const Content = () => {
  return (
    <>
      <section>
        <Heading
          text1={"Why Choose"}
          text2={"Stellar Aesthetics."}
          brNone={true}
        />
        <h3 className="md:text-3xl text-xl mt-10 text-primary">
          It’s THE ULTIMATE SUCCESS PACKAGE for your{" "}
          <strong>Successful Cosmetology Practice.</strong>
        </h3>
        <div>
          <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
            Big Names. Train Under Absolute Experts.
          </h3>
          <p>
            Every one of our Trainers are Renowned, running a Big Practice and
            are Well-Known Experts in their fields. To be the best, learn from
            the best. Internationally Certified. Internationally Eligible Be a
            UK BOARD CERTIFIED FELLOW OR TRAINEE with our International Board
            (UK) Certified Programs. <br /> <br /> International recognition of
            your name immediately adds value to your practice and gives you an
            edge over your competitors. We bring Exclusive and preferential
            PLACEMENTS, CAREER AND BUSINESS OPPORTUNITIES (National and
            International), just for you.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
            Comprehensive Program. Exhaustive Hands-On. Complete Package.
          </h3>
          <p>
            Save time and money with our brief in form but comprehensive in
            scope hybrid Programs consisting of activities, online modules, and
            live lectures followed by an exhaustive in-person HANDS-ON Training
            on a variety of patients for each Participant and for EACH
            Procedure.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
            Small Batch. Focused Attention
          </h3>
          <p>
            With a maximum of only 10 students in any batch, we personalize
            every interaction, just for you. We focus specifically on YOUR
            Goals, YOUR success, and YOUR Practice.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
            Everything you need. All the time
          </h3>
          <p>
            Only with us, you get HANDS-ON experience in the widest possible
            range of products, in price, quality and results. Exclusive Stellar
            Aesthetics Product & Dealer Guides that gives you EXCLUSIVE
            KNOWLEDGE about Cosmeceutical Products, Home-care Products and
            Medicinal Management. When you get trained with us you get the
            EXCLUSIVE Stellar Aesthetics Protocol Guide. The guide contains an
            entire treatment plan outlined session-wise for each concern.
            <br />
            <br />
            With the guide in hand, you can immediately begin your practice with
            confidence to go ahead and deliver Stellar results to every patient.
            Start your practice with confidence and security with our
            ready-to-use consent forms, customized for each procedure, and every
            Medico Legal aspect.
            <br />
            <br />
            Be a FELLOW at Stellar Aesthetics and get an Exclusive STARTER KIT.
            This is not just a kit, but THE CONFIDENCE that we give you, for the
            fruitful beginning of your career.
          </p>
        </div>

        <h3 className="md:text-3xl text-xl mt-10 text-primary">
          Even more reasons to
          <strong>love Stellar Aesthetics.</strong>
        </h3>
        <div>
          <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
            Real-world Success. Nothing Less.
          </h3>
          <p>
            We train you not only in Cosmetics but also HAND HOLD you into the
            practice with our EXCLUSIVE PERSONALIZED BUSINESS MENTOR-SHIP. With
            Stellar Aesthetics get tailor-made growth hacks, strategies, product
            and equipment know-how, and insights for minimizing investments and
            maximizing returns. We give you every ounce of Business know-how,
            Marketing, Patient Acquisition and In practice Management, you will
            ever need, to ensure you have a healthy flow of patients from your
            1st day. Be it your existing practice, or even if you just starting
            out.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
            Lifetime Mentor-ship. Lifelong Security.
          </h3>
          <p>
            Our MENTOR-SHIP PROGRAM is a promise for a lifetime. Be it Treatment
            planning, mid-procedure guidance, 2nd opinion or postoperative
            complications, our trainers are there to guide you through.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
            Build Credibility. Become well-known.
          </h3>
          <p>
            Fellowship at Stellar Aesthetics gives you an EXCLUSIVE opportunity
            for Research & Publications. Reputed publications not only add value
            to your name but increase your credibility as well.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl font-bold mt-10 mb-4">
            Money? No Problem.
          </h3>
          <p>
            Easy payment options, EMI and financial support, not just for
            training but also for investing in setting up your practice.
          </p>
        </div>
        <div>
          <Image
            src="https://stellaraesthetics.in/wp-content/uploads/2021/12/Slide12.jpg.webp"
            className="w-full mt-10"
            alt=""
            width={1000}
            height={500}
          />
        </div>
      </section>
    </>
  );
};

const WhyChooseUs = () => {
  return (
    <>
    <Head>
        <title>Why Choose Us</title>
      </Head>
      <PageHeader>Why Choose Us</PageHeader>
      <Content />
    </>
  );
};

export default WhyChooseUs;
