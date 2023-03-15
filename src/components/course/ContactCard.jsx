import useData from "@/hooks/useContext";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Loading from "../global/Loading";


const ContactCard = () => {
  const { coursePage } = useData();
  const data = [
    "https://res.cloudinary.com/dcjhzzypt/image/upload/v1674712040/cover-1_dj1qp2.png",
    "https://res.cloudinary.com/dcjhzzypt/image/upload/v1674712039/cover-3_n6ltss.png",
    "https://res.cloudinary.com/dcjhzzypt/image/upload/v1674712037/cover-5_o8qcen.png",
    "https://res.cloudinary.com/dcjhzzypt/image/upload/v1674712037/cover-4_o18eff.png",
  ];

  return data ? (
    <section className="bg-primary lg:h-[400px] text-white flex justify-between md:py-0 py-10">
      <div className="lg:w-[55%] lg:py-14 md:py-10 px-5 sm:px-10">
        <h2 className="lg:text-6xl sm:text-5xl text-3xl font-medium">
          Get Course Content,
        </h2>
        <h3 className="lg:text-4xl sm:text-3xl text-2xl">Reserve Your Seat</h3>
        <p className="mt-5 font-light">
          Book call or Whatsapp us to reserve your seat.
        </p>
        <div className="flex sm:gap-3 gap-2 mt-5">
          <a
            href={`https://api.whatsapp.com/send?phone=917999506817&text=Hello%20Team%20Stellar%20Aesthetics.I%20would%20like%20to%20get%20more%20info%20about%3A%20*${
              coursePage?.attributes?.type === "fellowships"
                ? "Fellowship"
                : "Certification"
            }%20in%20${coursePage.attributes.title.split(" ").join("%20")}*`}
            className="btn filled white text-primary"
            target="_blank"
            rel="noreferrer"
            aria-label="link"
          >
            <Icon className="text-2xl" icon="ic:baseline-whatsapp" />
            Get Brochure
          </a>
          <a
            href={"tel:+91-799-950-6817"}
            className="btn outlined white text-h-primary"
            target="_blank"
            rel="noreferrer"
          >
            <Icon className="text-2xl" icon="ic:baseline-phone" />
            Book Call
          </a>
        </div>
        <p className="text-sm mt-4 font-light">*Terms & Conditions Apply</p>
      </div>
      <div className="w-[45%] lg:flex hidden ml-10 h-full overflow-hidden items-center justify-end pr-10">
        <div className="flex items-center flex-wrap justify-center gap-5 -rotate-12 opacity-50">
          {data &&
            data.map((item, i) => {
              return <Image width={500}
              height={500} key={i} alt="" className="w-[200px] shrink-0" src={item} />;
            })}
        </div>
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default ContactCard;
