import PageHeader from "@/components/global/PageHeader";
import procedures from "@/data/procedures.json";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Procedures = () => {
  return (
    <>
      <Head>
        <title>Procedures</title>
      </Head>
      <PageHeader>Procedures</PageHeader>
      <section className="Cards lg:py-20 py-10 md:px-10 px-5">
        <div className="flex flex-wrap">
          {procedures?.map((item, i) => {
            return (
              <Card
              key={i}
                link={item.attributes.title}
                title={item.attributes.title}
                img={"/assets/img/" + item.attributes.img.data.attributes.name}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const Card = ({ img, title, link }) => {
  return (
    <div className=" sm:w-1/2 w-full">
      <div className="card sm:m-4 mb-4 sm:h-[500px] h-[300px] shrink-0">
        <Link aria-label="link" href={"/procedures/" + link}>
          <div className="img sm:h-[400px] h-[200px] w-full bg-gray-200">
            {img && (
              <Image
                src={img}
                alt="procedure"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="caption mt-3">
            <h5 className="text-xl capitalize font-medium">
              {title} Procedures
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Procedures;
