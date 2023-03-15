import useData from "@/hooks/useContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

const CourseHero = () => {
  const { coursePage } = useData();
  return (
    <>
      {coursePage.attributes && (
        <section className="hero-slider relative md:min-h-[500px] w-full lg:py-10 md:px-10 p-5">
          <div className="bg h-full w-full absolute inset-0 z-0">
            <div className="relative h-full overflow-hidden">
              <figure className={"blur w-full h-full object-cover relative"}>
                <Image
                  width={500}
                  height={500}
                  src={
                    "/assets/img/" +
                    coursePage.attributes.courseHeaderImg.data.attributes.name
                  }
                  alt={"course background"}
                  className={"w-full h-full object-cover"}
                />
                <figcaption className="hidden">Background Image</figcaption>
              </figure>
              <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-10"></div>
            </div>
          </div>
          <div className="sticky inset-0 gap-5 md:flex-row flex-col-reverse h-full w-full flex justify-between ">
            <div className="content shrink-0 md:w-1/2 text-white">
              <h1>
                <motion.span
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: -50, opacity: 0 }}
                  className="block sm:text-4xl uppercase mb-1 text-xl font-semibold"
                >
                  {coursePage?.attributes?.type === "fellowships"
                    ? "International Fellowship In"
                    : "Get Internationally Certified In"}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="block sm:text-4xl uppercase sm:px-5 py-2 px-4 w-fit bg-white text-2xl font-bold sm:font-bold text-black"
                >
                  {coursePage?.attributes?.title}
                </motion.span>
              </h1>
              <br />
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="overflow-hidden sm:text-2xl text-xl font-medium"
              >
                Extremely Insightful. Exceptionally Personal.
              </motion.h2>
              <br />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="list-disc md:pl-5 text-white"
                dangerouslySetInnerHTML={{
                  __html: coursePage.attributes.shortDescription,
                }}
              ></motion.div>
              <br />
              <a
                aria-label="link"
                href={`https://api.whatsapp.com/send?phone=917999506817&text=Hello%20Team%20Stellar%20Aesthetics.I%20would%20like%20to%20get%20more%20info%20about%3A%20*${
                  coursePage?.attributes?.type === "fellowships"
                    ? "Fellowship"
                    : "Certification"
                }%20in%20${coursePage.attributes.title
                  .split(" ")
                  .join("%20")}*`}
                className="btn filled white text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="text-2xl" icon="ic:baseline-whatsapp" />
                Get Brochure
              </a>
            </div>
            <div className="shrink-0 md:w-1/2 w-full">
              <figure className={"w-full"}>
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={
                    "/assets/img/" +
                    coursePage.attributes.courseHeaderImg.data.attributes.name
                  }
                  alt={"course header featured"}
                  className={"border-[5px] w-full h-full border-white"}
                />
                <figcaption className="hidden">
                  Course Header or Featured Image
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CourseHero;
