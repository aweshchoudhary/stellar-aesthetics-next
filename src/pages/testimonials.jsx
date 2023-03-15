import Heading from "@/components/global/Heading";
import Loading from "@/components/global/Loading";
import TestimonailCard from "@/components/global/TestimonailCard";
import testimonials from "@/data/testimonials.json";
import Head from "next/head";

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>Testimonials</title>
      </Head>
      <section className="section">
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
              return <TestimonailCard key={index} data={item} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
