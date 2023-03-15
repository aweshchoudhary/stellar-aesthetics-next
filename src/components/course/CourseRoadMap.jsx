import useData from "@/hooks/useContext";
import Heading from "../global/Heading";

const CourseRoadMap = () => {
  const wrapperStyle =
    "sec-1 sm:px-10 pl-5 py-10 sm:pl-20 sm:border-l-[10px] border-l-[5px] border-primary relative";
  const { coursePage } = useData();

  return (
    <section className="road-map section">
      <Heading
        text1={
          coursePage.attributes.type === "fellowships"
            ? `${coursePage.attributes.title} fellowship`
            : `${coursePage.attributes.title} certification `
        }
        text2={"roadmap."}
      />
      <div className="maps sm:p-20 p-5 py-20">
        {coursePage.attributes.roadmap.map((roadmap, index) => {
          return (
            <div className={wrapperStyle} key={index}>
              <div className="absolute flex items-center gap-5 md:-top-[30px] -top-[15px] -left-[18px] md:-left-[30px]">
                <div className="circle circle sm:h-[50px] sm:w-[50px] h-[30px] w-[30px] rounded-full bg-primary"></div>
                <h2 className="md:text-4xl text-2xl font-medium mb-2 ml-5">
                  Module {index + 1}
                </h2>
              </div>
              <div className="pb-10">
                <h3 className="sm:text-2xl text-xl text-primary mb-5">
                  {roadmap.name}
                </h3>
                <p
                  className="text-body"
                  dangerouslySetInnerHTML={{ __html: roadmap.description }}
                ></p>
              </div>
            </div>
          );
        })}
        <div className="sec-last sm:px-10  sm:pl-20 border-l-[10px] border-primary relative">
          <div className="absolute flex items-center gap-5 md:-top-[30px] -top-[15px] -left-[22px] md:-left-[30px]">
            <div className="circle circle sm:h-[50px] sm:w-[50px] h-[30px] w-[30px] rounded-full bg-primary"></div>
            <h2 className="md:text-4xl text-2xl font-medium mb-2 ml-5">
              Get Certificates
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseRoadMap;
