import useData from "@/hooks/useContext";
import Image from "next/image";
import Heading from "../global/Heading";
import ReadMore from "../global/ReadMore";

const AboutCourse = () => {
  const { coursePage } = useData();
  return (
    <section className="about-course section">
      <Heading
        text1={
          coursePage.attributes.type === "fellowships"
            ? "About Fellowship In"
            : "About Certification In"
        }
        text2={coursePage.attributes.title}
        className="md:mb-20 mb-10"
      />
      <div className="md:flex">
        <div className="md:w-1/3 shrink-0">
          <Image
            src={
              "/assets/img/" +
              coursePage.attributes.courseAboutImg.data.attributes.name
            }
            alt="Participant getting certificate"
            width={500}
            height={500}
          />
        </div>
        <div className="md:pl-10 md:pt-0 pt-10">
          <h3 className="md:text-4xl text-2xl font-semibold mb-4">
            Why It Is Right For You.
          </h3>
          <div className="md:flex items-center gap-5 sm:my-10 my-5">
            <div className="md:flex hidden shrink-0">
              <Image
                src={
                  "https://stellaraesthetics.in/wp-content/uploads/2022/11/6-300x300.png.webp"
                }
                alt="Award"
                className={"w-[100px]"}
                width={500}
            height={500}
              />
              <Image
                src={
                  "https://stellaraesthetics.in/wp-content/uploads/2022/11/1-300x300.png.webp"
                }
                alt="Award"
                className={"w-[100px]"}
                width={500}
              height={500}
              />
            </div>
            <h3 className="sm:text-3xl text-lg font-medium">
              Get International Fellowship In Clinical Cosmetology
            </h3>
          </div>
          <ReadMore>{coursePage.attributes.courseAbout}</ReadMore>

          <div className="mt-10">
            <Image
              className="w-[200px] mb-4"
              src={
                "https://stellaraesthetics.in/wp-content/uploads/2022/11/11-1.png.webp"
              }
              alt=""
              width={500}
            height={500}
            />
            <p>
              <strong>Dr. Sapnna Vaderra</strong>
            </p>
            <p className="text-body">
              Facial Plastic & Facial Cosmetic Surgeon <br /> Course Director:
              Stellar Aesthetics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
