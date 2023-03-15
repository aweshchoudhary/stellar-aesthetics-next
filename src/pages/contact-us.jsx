import Heading from "@/components/global/Heading";
import PageHeader from "@/components/global/PageHeader";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";

const Contact = () => {
  const addressList = [
    {
      title: "mumbai",
      list: [
        {
          address:
            "Andheri: 9/1, Verma Nagar, Azad Road, Laxmi Estate, Andheri East, Mumbai – 400069",
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.672341956893!2d72.852817!3d19.122025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75106e610d886b1b!2sLaxmi%20Estate%20Co-operative%20Housing%20Society!5e0!3m2!1sen!2sin!4v1672071625136!5m2!1sen!2sin",
        },
        {
          address:
            "Nerul: Shop Number 2, Niru Niketan, Sector 18A, Nerul, Navi Mumbai, Maharashtra – 400706",
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.6722202778997!2d73.012397!3d19.03416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95b941c9149eec83!2sDr.%20Abhijit%20Shirodkar!5e0!3m2!1sen!2sin!4v1672071807685!5m2!1sen!2sin",
        },
        {
          address:
            "Parel: Southbay Clinic, 15 Orbit Grnd Building, NM Joshi Marg, Near Lodha The Park, opp BMC G South Office, Lower Parel West, Mumbai, 400013",
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3772.3086572710267!2d72.828836!3d19.006116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9534deb9c44d23a7!2sLodha%20Park!5e0!3m2!1sen!2sin!4v1672071843079!5m2!1sen!2sin",
        },
      ],
    },
    {
      title: "Nagpur",
      list: [
        {
          address:
            "201-202 Honey Arjun Kaushalya Complex, Besides HDFC BANK, Telephone exchange sqaure CA road Nagpur 440008",
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.2845798555343!2d79.116252!3d21.146893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91eacc758636eea2!2s7JHX44W8%2BPFW!5e0!3m2!1sen!2sin!4v1672071980227!5m2!1sen!2sin",
        },
      ],
    },
    {
      title: "Jodhpur",
      list: [
        {
          address:
            "629, 12th B Rd, behind MAAN MANHUAR RESTURANT, Sardarpura, Jodhpur, Rajasthan 342001",
          map: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d229.9585072157036!2d75.90451309018643!3d22.752904386232586!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672072046000!5m2!1sen!2sin",
        },
      ],
    },
    {
      title: "Indore",
      list: [
        {
          address:
            "202, EC 66, Scheme No. 94 Near Murliwala Sweets, Opposite Bombay Hospital Service Road, Indire, Madhya Pradesh, 452010",
          map: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d229.9585072157036!2d75.90451309018643!3d22.752904386232586!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672072046000!5m2!1sen!2sin",
        },
      ],
    },
    {
      title: "Bhopal",
      list: [
        {
          address:
            "B-16, Kamla nagar, Near Bank of Baroda, Kotra Sultanabad, Bhopal",
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d916.6763397776459!2d77.39326!3d23.217406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb9fdac5c5904078!2sNIRA%20Multispeciality%20Care%20Center!5e0!3m2!1sen!2sin!4v1672072096122!5m2!1sen!2sin",
        },
      ],
    },
    {
      title: "Raipur",
      list: [
        {
          address:
            "1st floor, above Shri Krishna Medical, Devendra Nagar, Raipur, Chhattisgarh492001",
        },
      ],
    },
    {
      title: "Channai",
      list: [
        {
          address: "1434 ,17th main road, H-Block, anna nagar west, chennai-40",
        },
      ],
    },
    {
      title: "Kolkatta",
      list: [
        {
          address:
            "86 khetra mitra lane salkia howrah Near Howrah railway station West Bengal",
        },
      ],
    },
    {
      title: "Delhi",
      list: [
        {
          address: "B -0004 LUXURIA ESTATE, ADITYA WORLD CITY, NH24 GHAZIABAD.",
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta charset="utf-8" />
        <link rel="canonical" href="https://stellaraesthetics.in/contact" />
        <meta
          name="description"
          content="stellar aesthetics, contact us with email, phone or mobile number, connect with us on social media platforms"
        />
        <meta
          name="keywords"
          content="stellar aesthetics, contact us, connect us, stellar aesthetics contact us,"
        />
      </Head>
      <PageHeader>Contact Us</PageHeader>
      <section className="lg:py-20 py-10 md:px-10 px-5">
        <Heading text1={"Connect with us"} className="mb-10" />
        <div className="my-5 md:flex gap-10">
          <div className="md:w-[40%] shrink-0 w-full">
            <header className="mb-10">
              <p className="text-lg">Our Services Are Available At</p>
              <h3 className="text-2xl font-bold text-primary">
                15+ Cities Across INDIA
              </h3>
            </header>
            <Image src="/assets/img/map.webp" alt="" width={500} height={500} className="w-full" />
            <h1 className="flex items-center font-medium md:text-3xl text-xl mt-5">
              Locations
              <Icon
                className="md:text-6xl text-3xl text-primary"
                icon="ep:location-information"
              ></Icon>
              IN INDIA
            </h1>
          </div>
          <div className="my-5">
            <h3 className="md:text-4xl text-3xl font-semibold">Contact Us</h3>
            <div>
              <p className="flex items-center gap-5 my-5">
                <Icon icon="ri:whatsapp-fill" className="text-3xl" />
                <a
                  aria-label="link"
                  target={"_blank"}
                  rel="noreferrer"
                  href={`https://api.whatsapp.com/send?phone=917999506817&text=Hello%20Team%20Stellar%20Aesthetics.I%20would%20like%20to%20get%20more%20info%20about%3A%20*Contact Us Page*`}
                  className="text-xl no-underline text-black"
                >
                  +91 79995-06817
                </a>
              </p>
              <div className="my-3">
                <h3 className="text-3xl font-medium">Social Media Platforms</h3>
                <p className="flex items-center gap-5 my-5">
                  <Icon icon="ph:globe" className="text-3xl" />
                  <a
                    aria-label="link"
                    target={"_blank"}
                    rel="noreferrer"
                    href={"https://www.instagram.com/stellaraesthetics.india/"}
                    className="text-xl no-underline text-black"
                  >
                    www.stellaraesthetics.in
                  </a>
                </p>
                <p className="flex items-center gap-5 my-5">
                  <Icon icon="ph:instagram-logo-fill" className="text-3xl" />
                  <a
                    aria-label="link"
                    target={"_blank"}
                    rel="noreferrer"
                    href={"https://www.instagram.com/stellaraesthetics.india/"}
                    className="text-xl no-underline text-black"
                  >
                    stellaraesthetics.india
                  </a>
                </p>
                <p className="flex items-center gap-5 my-5">
                  <Icon icon="ic:baseline-facebook" className="text-3xl" />
                  <a
                    aria-label="link"
                    target={"_blank"}
                    rel="noreferrer"
                    href={
                      "https://www.linkedin.com/company/stellar-aesthetics/"
                    }
                    className="text-xl no-underline text-black"
                  >
                    Stellar Aesthetics
                  </a>
                </p>
                <p className="flex items-center gap-5 my-5">
                  <Icon icon="mdi:linkedin" className="text-3xl" />
                  <a
                    aria-label="link"
                    target={"_blank"}
                    rel="noreferrer"
                    href={
                      "https://api.whatsapp.com/send/?phone=917999506817&text=Hello+Team+Stellar+Aesthetics.+I+would+like+to+get+more+info+about+*Best+Cosmetics+Courses+in+India*"
                    }
                    className="text-xl no-underline text-black"
                  >
                    Stellar Aesthetics
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:my-10 my-5">
          <Heading
            text1={"Our"}
            brNone={true}
            text2={"Locations"}
            className="my-5"
          />
          <div className="flex flex-wrap gap-5 w-full">
            {addressList.map((item, i) => {
              return (
                <div
                  className="my-5 shrink-0 w-full border-b-4 md:pb-10"
                  key={i}
                >
                  <h3 className="flex capitalize items-center md:text-4xl text-3xl gap-3 mb-5 font-semibold">
                    <Icon
                      icon="ic:round-location-on"
                      className="text-3xl text-red-600"
                    />
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-5">
                    {item.list.map((add, index) => {
                      return (
                        <div
                          className="w-full md:flex gap-5 items-center"
                          key={index}
                        >
                          {add.map && (
                            <iframe
                              src={add.map}
                              className="md:w-[500px] w-full md:mb-0 mb-5 h-[200px] shrink-0"
                              loading="lazy"
                              title={"Address" + index}
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                          )}
                          <address className="lg:text-3xl md:text-2xl text-xl">
                            <strong className="text-primary">Address:</strong>{" "}
                            {add.address}
                          </address>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
