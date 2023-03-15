import courseDirector from "@/data/course-director.json";
import Image from "next/image";
import Link from "next/link";
import Card from "../global/Card";
import Heading from "../global/Heading";
import Loading from "../global/Loading";
import ReadMore from "../global/ReadMore";


const CourseDirector = () => {
  return (
    <>
      {courseDirector.attributes ? (
        <section className="course-director section">
          <Heading
            text1={"meet your"}
            text2="Course director."
            className={"sm:mb-20 mb-10"}
          />
          {courseDirector?.attributes && (
            <div className="md:flex">
              <div className="md:w-[30%] w-[90%] mx-auto shrink-0 grow-0">
                <div className="course-director-image">
                  <Image
                    src={
                      "/assets/img/" +
                      courseDirector.attributes.img.data.attributes.name
                    }
                    alt={
                      courseDirector.attributes.img.data.attributes
                        .alternativeText
                    }
                    width={500}
            height={500}
                  />
                </div>
              </div>
              <div className="md:w-[70%]  md:ml-20 md:mt-0 mt-14">
                <header dangerouslySetInnerHTML={{__html: courseDirector.attributes.heading}} className="header">
                </header>
                <br />
                <ReadMore className="text-justify text-body text-effect">
                  {courseDirector.attributes.description}
                </ReadMore>
                <div dangerouslySetInnerHTML={{__html:courseDirector.attributes.awards}}></div>
                <br />
                <Link
                  aria-label="link"
                  className="btn filled bg-primary"
                  href={"/dr-sapnna-vaderra"}
                >
                  Know More
                </Link>
              </div>
            </div>
          )}
          <div>
            <br />
            <h2 className="md:text-4xl  text-3xl text-center text-primary font-medium my-10">
              Awards & Achievement
            </h2>
            <div className="flex flex-wrap justify-center items-start">
              {courseDirector.attributes.imgs.map((card, i) => {
                return (
                  !card?.attributes?.horizontal && (
                    <Card
                      key={i}
                      img={"/assets/img/" + card.img.data.attributes.name}
                      title={card.title}
                      horizontal={card.horizontal}
                      subtitle={card.subtitle}
                    />
                  )
                );
              })}
              {courseDirector.attributes.imgs.map((card, i) => {
                return (
                  card?.attributes?.horizontal && (
                    <Card
                      key={i}
                      img={"/assets/img/" + card.img.data.attributes.name}
                      title={card.title}
                      horizontal={card.horizontal}
                      subtitle={card.subtitle}
                    />
                  )
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CourseDirector;
