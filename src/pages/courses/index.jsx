import { Content } from "../why-choose-us";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


const Courses = () => {
  useEffect(() => {
    var el =
      window.location.hash && document.querySelector(window.location.hash);
    el && el.scrollIntoView(true);
  });

  return (
    <>
      <Head>
        <title>Courses</title>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "Stellar Aesthetics Courses",
          image:
            "https://stellaraesthetics.in/wp-content/uploads/2021/12/Slide12.jpg.webp",
          description:
            "Big Names. Train Under Absolute Experts, Comprehensive Program. Exhaustive Hands-On. Complete Package, Small Batch. Focused Attention, Everything you need. All the time, Real-world Success. Nothing Less etc.",
          brand: {
            "@type": "Brand",
            name: "Stellar Aesthetics",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "5",
            ratingCount: "5032",
          },
        })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Stellar Aesthetics",
              item: "https://stellaraesthetics.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Courses",
              item: "https://stellaraesthetics.in/courses",
            },
          ],
        })}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "International Courses",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Course",
                url: "https://stellaraesthetics.in/courses/fellowship-in-clinical-cosmetolog",
                name: "INTERNATIONAL FELLOWSHIP IN CLINICAL COSMETOLOGY",
                description:
                  "Complete Hands-On, All Procedures (Basic to Advance), Lifetime Mentorship, Lifetime Trainer Mentorship, Complete Practice Set-Up, Patient Strategies, Study Material, Product & Dealer Guide, International Placement Assistance",
                provider: {
                  "@type": "Organization",
                  name: "Stellar Aesthetics",
                  sameAs: "https://www.stellaraesthetics.in",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Course",
                url: "https://stellaraesthetics.in/courses/fellowship-in-tricology",
                name: "INTERNATIONAL FELLOWSHIP IN TRICHOLOGY",
                description:
                  "Complete Hands-On, All Procedures (Basic to Advance), Lifetime Mentorship, Lifetime Trainer Mentorship, Complete Practice Set-Up, Patient Strategies, Study Material, Product & Dealer Guide, International Placement Assistance",
                provider: {
                  "@type": "Organization",
                  name: "Stellar Aesthetics",
                  sameAs: "https://www.stellaraesthetics.in",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Course",
                url: "https://stellaraesthetics.in/courses/fellowship-in-faicail-cosmetics",
                name: "INTERNATIONAL CERTIFICATION IN FACIAL COSMETICS",
                description:
                  "Complete Hands-On, Business Mentorship, Trainer Mentorship, Practice Set-Up, Study Material, Product & Dealer Guide",
                provider: {
                  "@type": "Organization",
                  name: "Stellar Aesthetics",
                  sameAs: "https://www.stellaraesthetics.in",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Course",
                url: "https://stellaraesthetics.in/courses/fellowship-in-hair-restoration",
                name: "INTERNATIONAL CERTIFICATION IN HAIR RESTORATION",
                description:
                  "Complete Hands-On, Business Mentorship, Trainer Mentorship, Practice Set-Up, Study Material, Product & Dealer Guide",
                provider: {
                  "@type": "Organization",
                  name: "Stellar Aesthetics",
                  sameAs: "https://www.stellaraesthetics.in",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Course",
                url: "https://stellaraesthetics.in/courses/fellowship-in-micropigmentation-microblading",
                name: "INTERNATIONAL CERTIFICATION IN MICROPIGMENTATION & MICROBLADING",
                description:
                  "Complete Hands-On, Business Mentorship, Trainer Mentorship, Practice Set-Up, Study Material, Product & Dealer Guide",
                provider: {
                  "@type": "Organization",
                  name: "Stellar Aesthetics",
                  sameAs: "https://www.stellaraesthetics.in",
                },
              },
            },
          ],
        })}} />
      <CourseHero />
      <div id="getcertified"></div>
      <section className="section">
        <h2 className="md:text-5xl text-2xl text-center uppercase">
          <strong>
            Get <span className="text-primary">Internationally Certified</span>
          </strong>
        </h2>
        <p className="text-center md:text-2xl text-xl md:mt-5 mt-3">
          Click To Know More
        </p>
        <div className="md:flex md:mt-10">
          <div className="md:w-[40%] md:pr-6 mt-5">
            <h3 className="md:text-4xl text-3xl font-semibold pb-5 mb-5 border-b-2 text-center">
              Fellowships
            </h3>
            <div className="flex md:gap-3 gap-5 md:flex-row flex-col">
              <Link
                className={"shrink-0 md:w-1/2 hover:scale-105 transition"}
                href={"/courses/certification-in-clinical-cosmetology"}
              >
                <Image
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/image-113-1.jpg"
                  alt=""
                  height={500}
                  width={500}
                />
              </Link>
              <Link
                className={"shrink-0 md:w-1/2 hover:scale-105 transition"}
                href={"/courses/certification-in-tricology"}
              >
                <Image
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/35.jpg"
                  alt=""
                  height={500}
                  width={500}
                />
              </Link>
            </div>
          </div>
          <div className="md:w-[60%] md:pl-8 mt-5">
            <h3 className="md:text-4xl text-3xl font-semibold pb-5 mb-5 border-b-2 text-center">
              Certifications
            </h3>
            <div className="flex md:gap-3 gap-5 md:flex-row flex-col">
              <Link
                className={"shrink-0 md:w-1/3 hover:scale-105 transition"}
                href={"/courses/certification-in-facial-cosmetics"}
              >
                <Image
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/image-110.jpg.webp"
                  alt=""
                  height={500}
                  width={500}
                />
              </Link>
              <Link
                className={"shrink-0 md:w-1/3 hover:scale-105 transition"}
                href={"/courses/certification-in-hair-restoration"}
              >
                <Image
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/image-116.png.webp"
                  alt=""
                  height={500}
                  width={500}
                />
              </Link>
              <Link
                className={"shrink-0 md:w-1/3 hover:scale-105 transition"}
                href={
                  "/courses/certification-in-micro-pigmentation-micro-blading"
                }
              >
                <Image
                  className={"h-full w-full"}
                  imgClass="object-fit"
                  src="https://stellaraesthetics.in/wp-content/uploads/2022/11/image-114-1.png.webp"
                  alt=""
                  height={500}
                  width={500}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="whyus" className="section">
        <Content />
      </section>
    </>
  );
};

const CourseHero = () => {
  return (
    <section
      className={
        "md:h-[500px] relative h-[400px] w-full flex items-center justify-center"
      }
    >
      <div className="w-full h-full absolute inset-0 -z-10 bg-black">
        <figure className="w-full h-full">
          <video
            src="https://stellaraesthetics.in/wp-content/uploads/2021/12/stellar-courses-1mbps.webm"
            className="w-full h-full object-cover opacity-60"
            autoPlay
            loop
            muted
          ></video>
          <figcaption></figcaption>
        </figure>
      </div>
      <div className="text-white text-center md:md:w-1/2">
        <h2 className="lg:text-5xl text-3xl font-bold text-white">
          Join Our Internationally Certified Courses
        </h2>
        <p className="md:text-lg">
          The career of your dreams is one click away.
        </p>
        <div className="btns flex items-center gap-5 justify-center my-5">
          <a
            aria-label="link"
            href="#getcertified"
            className="btn filled white text-primary"
          >
            Get Certified
          </a>
          <a
            href="#whyus"
            aria-label="link"
            className="btn outlined white text-h-primary"
          >
            why Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
