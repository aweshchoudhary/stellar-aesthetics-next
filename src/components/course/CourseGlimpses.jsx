import Card from "../global/Card";
import Heading from "../global/Heading";
import Loading from "../global/Loading";

const CourseGlimpses = ({ items }) => {
  return items ? (
    <section className="glimpses section">
      <Heading
        text1={"Jam-Packed With"}
        text2={"Knowledge, Experience And Goodies"}
      />
      <h2 className="md:text-4xl sm:text-2xl text-xl mt-10 font-medium">
        Glimpses Of The Program
      </h2>
      <div className="flex flex-wrap my-10">
        {items.map((item, key) => {
          return (
            <Card
              key={key}
              img={"/assets/img/" + item.img.data.attributes.name}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default CourseGlimpses;
