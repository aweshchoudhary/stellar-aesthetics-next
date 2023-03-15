import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import procedures from "@/data/procedures.json";
import proceduresSlider from "@/data/procedures-slider.json";
import { useRouter } from "next/router";
import Loading from "@/components/global/Loading";
import Head from "next/head";
import Heading from "@/components/global/Heading";
import Image from "next/image";


const Procedure = ({procedure}) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  function slide(dir) {
    if (dir === "prev") {
      document.querySelector(".slick-prev").click();
    } else {
      document.querySelector(".slick-next").click();
    }
  }
  return procedure?.attributes && !procedure.loading ? (
    <>
      <Head>
        <title>{procedure.attributes.title.toUpperCase() + " Procedure"}</title>
        <meta name="description" content="procedures, face, skin, body, hair" />
        <meta
          name="keywords"
          content="stellar aesthetics, course director, dr sapnna vaderra, stellar aesthetics course mentor"
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

      {/* Procedures Slider */}
      <section className="hero-slider relative">
        {proceduresSlider?.length > 1 && (
          <>
            <button
              onClick={() => slide("prev")}
              className="absolute z-20 text-5xl left-3 text-white top-1/2 -translate-y-1/2"
            >
              <Icon icon="material-symbols:arrow-back-ios" />
            </button>
            <button
              onClick={slide}
              className="absolute z-20 text-5xl right-3 text-white top-1/2 -translate-y-1/2"
            >
              <Icon icon="material-symbols:arrow-forward-ios" />
            </button>
          </>
        )}
        <Slider {...settings}>
          {proceduresSlider &&
            proceduresSlider.map((item, key) => {
              return (
                item.attributes.type === procedure.attributes.type && (
                  <div key={key}>
                    <div className="w-full h-[500px] relative flex items-center justify-center">
                      <div className="content text-white text-center md:px-10">
                        <h2 className="md:text-6xl sm:text-5xl text-3xl font-semibold mb-3">
                          {item.attributes.title}
                        </h2>
                        <div className="text-lg" dangerouslySetInnerHTML={{__html:item.attributes.description}}>
                        </div>
                        <div>
                          <div className="flex gap-5 justify-center mt-4">
                            <a
                              aria-label="link"
                              href={`https://api.whatsapp.com/send?phone=917999506817&text=Hello%20Team%20Stellar%20Aesthetics.I%20would%20like%20to%20get%20more%20info%20about%3A%20*${procedure.attributes.type + "Procedures"}*`}
                              className="btn filled white text-primary"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                className="text-2xl"
                                icon="ic:baseline-whatsapp"
                              />
                              Get Brochure
                            </a>
                            <a
                              aria-label="link"
                              href={"tel:+91-799-950-6817"}
                              className="btn outlined white text-h-primary"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                className="text-2xl"
                                icon="ic:baseline-phone"
                              />
                              Book Call
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="background absolute bg-primary inset-0 w-full h-full -z-10">
                        <Image
                          src={
                            "/assets/img/" +
                            item.attributes.img.data.attributes.name
                          }
                          alt=""
                          width={500}
                          height={500}
                          className="w-full h-full opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                )
              );
            })}
        </Slider>
      </section>
      {/* Procedure Content */}
      <section className="section">
        <Heading
          text1={procedure?.attributes?.title}
          text2="Procedures"
          brNone={true}
        />
        <div className="mt-5" dangerouslySetInnerHTML={{__html:procedure?.attributes?.description}}></div>
      </section>
    </>
  ) : (
    <Loading />
  );
};

export async function getStaticPaths(){
  const paths = procedures.map((item)=>{
      return {
        params: {
          name: item.attributes.title.toLowerCase()
        }
      }
  })
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({params}){
   let procedure; 
  procedures.forEach(item=> {
    if(params.name === item.attributes.title) procedure = item 
  })
  return {
    props:{
      procedure
    }
  }
}

export default Procedure;
