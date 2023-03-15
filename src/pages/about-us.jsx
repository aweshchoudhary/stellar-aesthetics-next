import Heading from "@/components/global/Heading";
import PageHeader from "@/components/global/PageHeader";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const About = () => {
  const router = useRouter()
  const { q } = router.query;
  console.log(q)

  const isMounted = useRef(false);
  useEffect(() => {
    const scrollToHash = () => {
      let el = q && document.getElementById(q);
      el && el.scrollIntoView(true);
    };
    isMounted && scrollToHash();
    return () => {
      isMounted.current = true;
    };
  });
  return (
    <>
      <Head>
        <title>About Us | Stellar Aesthetics</title>
        <meta
          name="description"
          content="stellar aesthetics provides international fellowships and certification, faical cosmetics, clinical cosmetology, trichology, hair restoration, micropigmentation and microblading"
        />
        <meta
          name="keywords"
          content="stellar aesthetics, fellowships and certification, faical cosmetics, clinical cosmetology, trichology, hair restoration, micropigmentation and microblading"
        />
      </Head>

      <PageHeader>About Us</PageHeader>
      <div id="company"></div>
      <section className="section">
        <Heading
          text1={"a better you"}
          brNone={true}
          text2={"for a better us."}
        />
        <h3 className="text-3xl my-10 font-medium">About Stellar Aesthetics</h3>
        <p>
          A Numero Uno choice to boost your confidence, Stellar Aesthetics
          offers cosmetic, plastic, and skin care services to improve beauty and
          provide aesthetic solutions for various cosmetic concerns of Face,
          Hair, Skin and Body holistically. Every patient’s skin, hair & body
          deserves the best possible care, thus we aim to provide a complete
          portfolio of innovative products that are up-to-date with market
          trends, economically viable, and safe for our precious patients.
        </p>
        <br />
        <p>
          At Stellar Aesthetics, we believe that top-notch treatments can only
          be delivered by highly trained and skilled professionals, thus we make
          Training & Research one of our strongest verticals. We seek to
          support, promote and undertake the advancement of high-quality
          education leading to well-trained and confident practitioners in the
          field of aesthetic practice. Conclusively, we strive towards achieving
          perfection in our Education, Training, Practice & Research to create
          “A Better Us for A Better You”.
        </p>
      </section>
      <div id="vision"></div>
      <section className="section">
        <Heading text1={"aiming for"} text2={"the stars"} brNone={true} />
        <h3 className="text-3xl my-10 font-medium">Our Vision</h3>
        <p>
          We aspire to alleviate the emotional, psychological and physical
          stress associated with the physical appearance or aesthetics of a
          person and create various channels to provide a coequal grade of
          treatment to people belonging to all strata of society including the
          poor, acid attack victims, etc. in a cost-effective manner or
          completely complimentary.
        </p>
        <br />
        <p>
          We are out to earn a Stellar reputation in setting a new standard for
          delivering affordable, compassionate, respectful, and responsive
          patient care associated with the most reputable, client-focused
          skincare products delivered by highly trained & specialized medical
          practitioners. And last but not least, we strive to be recognized as
          leaders in innovative, high-quality surgical care and Developmental
          research that prove to be stepping stones to success in the field of
          Aesthetic & Cosmetic Surgery, culminating from medical advancements &
          technological research.
        </p>
      </section>
      <div id="director"></div>
      <section className="section bg-primary">
        <Heading
          text1={"Director's"}
          text2={"Message"}
          white={true}
          className={"mb-10"}
          brNone={true}
        />
        <div className="text-white">
          <div className="md:flex gap-5">
            <Image
              src="https://stellaraesthetics.in/wp-content/uploads/2022/11/cropped.jpg.webp"
              alt=""
              className="w-[350px] shrink-0 md:mb-0 mb-5 object-cover"
              width={500}
              height={500}
            />
            <p>
              The philosophy of Stellar Aesthetics is not just giving skills and
              training but also the tools required to make your practice a grand
              success.
              <br />
              <br />
              Each of our programs has been designed to give you the confidence
              to start your practice immediately after the program. They are
              complete, self-contained, and cover the entire gamut. With only 10
              participants in every batch and the best trainers,
              <br />
              <br />
              we ensure you get a tremendous amount of Hands-on for every
              procedure included in your program. This is very important. This
              ensures that you are able to perform the cosmetic procedures, on
              your own patients, with complete confidence.
              <br />
              <br />
              Apart from the knowledge about the procedures, we believe that
              knowledge about the medicinal treatment and home care regimen is
              equally important. With our product guides, dealer guides, consent
              forms, and step-by-step protocol guides, we give you the
              foundation stones for your cosmetology practice. <br />
              <br />
            </p>
          </div>
          <br />
          <p>
            We also equip you with the necessary business and marketing skills
            that will help you acquire new patients easily and even stand out
            from your competitors. Our promise is a lifelong one. We are not
            just hand-holding you during the program and while setting up your
            practice, but you will have the security of our lifelong mentorship
            and support.
          </p>
          <br />
          <p>
            <strong>Jaisinggh Gupt</strong>
          </p>
          <p>Director, Stellar Aesthetics</p>
        </div>
      </section>
    </>
  );
};

export default About;
