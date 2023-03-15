import Heading from "./Heading";
import TestimonailCard from "./TestimonailCard";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import testimonials from "@/data/testimonials.json";

const Testimonials = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  function slide(dir) {
    if (dir === "prev") {
      document.querySelector(".slick-prev").click();
    } else {
      document.querySelector(".slick-next").click();
    }
  }

  return (
    <section className="testimonails w-full md:py-16 py-10">
      <div className="md:px-10 px-5">
        <Heading
          text1={"They Loved It."}
          text2={"So Will You."}
          brNone={true}
        />
        <h2 className="text-4xl font-medium mt-5">Testimonials</h2>
      </div>
      <div className="my-10">
        <div className="btns mb-5 md:px-10 px-5">
          <button aria-label="previous" onClick={() => slide("prev")}>
            <Icon
              className="text-5xl text-body text-h-primary transition-all"
              icon="material-symbols:arrow-circle-left-rounded"
            />
          </button>
          <button aria-label="next" onClick={() => slide("next")}>
            <Icon
              className="text-5xl text-body text-h-primary transition-all"
              icon="material-symbols:arrow-circle-right-rounded"
            />
          </button>
        </div>
        <Slider {...settings} className="w-full">
          {testimonials &&
            testimonials.map((item, i) => {
              return (
                <div key={i}>
                  <TestimonailCard data={item} />
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
