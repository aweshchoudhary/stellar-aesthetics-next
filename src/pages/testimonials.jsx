import { lazy } from "react";
import { Helmet } from "react-helmet";
import Bar from "../../Components/Loader/Bar";
import TestimonailCard from "../../Components/Testimonials/TestimonailCard";
import testimonials from "../../data/testimonials.json";

const Section = lazy(() => import("../../Components/Main/Section"));
const Heading = lazy(() => import("../../Components/Main/Heading"));

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials</title>
      </Helmet>
      <Section>
        <Heading
          text1={"They Loved It."}
          brNone={true}
          text2={"So Will You."}
        />
        <h3 className="md:text-4xl font-medium text-3xl md:mt-5 mt-3">
          Testimonials
        </h3>

        <div className="my-10 flex flex-col gap-5">
          {testimonials ? (
            testimonials.map((item, index) => {
              return <TestimonailCard data={item} />;
            })
          ) : (
            <Bar />
          )}
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
