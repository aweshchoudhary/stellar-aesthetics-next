import { useEffect, useMemo, useRef } from "react";
import courses from "@/data/courses.json";
import { useRouter } from "next/router";
import Head from "next/head";

// Components Import
import CourseHero from "@/components/course/CourseHero";
import ContactCard from "@/components/course/ContactCard";
import AboutCourse from "@/components/course/AboutCourse";
import CourseDirector from "@/components/course/CourseDirector";
import CourseRoadMap from "@/components/course/CourseRoadMap";
import CourseGlimpses from "@/components/course/CourseGlimpses";
import Testimonials from "@/components/global/Testimonials";
import FAQ from "@/components/course/FAQ";
import Loading from "@/components/global/Loading";
import useData from "@/hooks/useContext";

const CoursePage = ({course}) => {
  const router = useRouter()
  const { name } = router.query;
  const { setCoursePage, coursePage } = useData();
  const loading = useRef(false);

  // UseEffect Clean Up
  const isMounted = useRef(false);

  // Function To Add Course Data and Change The Primary Colors
  useMemo(()=>{
    if(course) setCoursePage(course)
    const changePrimaryColor = () => {
    coursePage?.attributes?.primaryColor &&
          document.documentElement.style.setProperty(
              "--primary",
              coursePage.attributes.primaryColor
            );
        };
        changePrimaryColor()
  },[course, setCoursePage, coursePage])

  return (
    <>
      {coursePage?.attributes && !loading.current ? (
        <>
          <Head>
            <title>{` ${
              coursePage.attributes.type === "fellowships"
                ? "FELLOWSHIP IN "
                : "CERTIFICATION IN "
            } ${coursePage.attributes.title.toUpperCase()} `}</title>
            {/* {coursePage.meta && parser(coursePage.meta)} */}
            <meta
              property="og:image"
              content={
                "https://stellaraesthetics.in/assets/img/" +
                coursePage.attributes.courseHeaderImg.data.attributes.name
              }
            />
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          </Head>
          <CourseHero />
          <CourseDirector />
          <ContactCard />
          <AboutCourse />
          <ContactCard />
          <CourseRoadMap />
          <ContactCard />
          <CourseGlimpses items={coursePage.attributes.glimpse} />
          <ContactCard />
          <Testimonials />
          <ContactCard />
          <FAQ />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What makes Stellar Aesthetics unique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The teaching method at Stellar Aesthetics is more practical and patient based. You get to learn everything on Patients with FULL HANDS-ON EXPERIENCE. &nbsp;Complementary mini Cosmetic Armamentarium for you with the cosmetics products with which you can right away start with your Facial Cosmetic practice. Apart from this, if you enrol for this course, you are enrolling for yourself a Life-time mentor to guide you with all the problems you might face in your initial days of Facial Cosmetic Practice.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the dates for the Courses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kindly get in touch with us on +917999506817 or connect on WhatsApp to know more about the upcoming batches.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the course Venue?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The course will be conducted in Mumbai, India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it a Virtual Event or a Live Training Workshop?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It’s a live training event to be held in Mumbai with Live Lectures, Demonstration and Hands-On training on patients.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I get myself enrolled for the course?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can call us on +917999506817 or even WhatsApp us and our Team will assist you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I get Hands-On?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "At Stellar Aesthetics Facial Cosmetic Course, you get Hands-On for all the procedures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "On what all procedures do I get Hands-On?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hands-On training will be available for all the participants for procedures including Botulinum toxins, Dermal fillers, Threads, LASERs including Fractional CO2, Q Switch LASER, Diode LASER, Pigment LASERs, MicroRF, Face Lifting devices, Chemical Peels and Hair Rejuvenation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is the Chief Mentor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Chief Mentor for the course is Dr. Sapnna Vaderra.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it a Certificate Course?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We have Certification as well as Fellowship Program. Get in touch with us on +917999506817 or connect with us on WhatsApp (link) to get details about the program.",
                  },
                },
                {
                  "@type": "Question",
                  name: "If I have any questions, who do I contact?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we understand you may have some questions and we are happy to assist you. You can email us at hello@stellaraesthetics.in and our team will respond to you within 24 hours. You can call us on +917999506817 or even WhatsApp us for any information.",
                  },
                },
              ],
            })}} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export async function getStaticPaths(){
  let paths = courses.map((item)=>{
    return {
      params:{
        name: item.attributes.slug
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  let course;
  courses.forEach((item)=>{
    if(params.name === item.attributes.slug){
      course = item;
    }
  })
  return{
    props:{
      course
    }
  }
}
export default CoursePage;
