import { Icon } from "@iconify/react";
import Head from "next/head";
import doctors from "@/data/doctors.json";
import Image from "next/image";
import Heading from "@/components/global/Heading";

const Doctors = () => {
  return (
    <>
      <Head>
        <title>Doctors</title>
        <meta
          name="description"
          content="Surgeon – Researcher – Mentor par excellence. Dr. Sapnna Vaderra
          is a Mumbai-based Facioplastic/Faciocosmetic & Hair Transplant
          Surgeon and co-founder of Stellar Aesthetics, India. Stellar
          Aesthetics is a State-of-the-Art Cosmetic Clinic chain presently
          in 15+ cities across India"
        />
        <meta
          name="keywords"
          content="stellar aesthetics, course director, dr sapnna vaderra, stellar aesthetics course mentor"
        />
      </Head>
      <section className="lg:py-20 py-10 md:px-10 px-5">
        <Heading text1={"Doctors"} className={"mb-10"} />
        <div className="flex flex-wrap">
          {doctors &&
            doctors.map((item, i) => {
              return (
                <div key={i} className="lg:w-1/3 sm:w-1/2 w-full">
                  <div className="card sm:m-4 mb-4 sm:h-[550px] shrink-0">
                    <div className="img sm:h-[350px] h-[250px] w-full bg-gray-200">
                      <Image
                        src={item.attributes.img.data.attributes.name}
                        alt=""
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="caption mt-3">
                      <h5 className="text-lg font-medium">
                        <strong>{item.attributes.name}</strong> <br />
                        {item.attributes.profession}{" "}
                      </h5>

                      <div
                        className="text-body"
                        dangerouslySetInnerHTML={{
                          __html: item.attributes.description,
                        }}
                      ></div>
                      <div className="btns flex items-center text-3xl gap-1 text-gray-500 mt-3">
                        {item.attributes.socialLinks.map((item, i) => {
                          return (
                            <a
                              aria-label="link"
                              href={item.name}
                              target="_blank"
                              rel="noreferrer"
                              className="text-h-primary transition"
                              key={i}
                            >
                              <Icon icon={item.icon} />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Doctors;
