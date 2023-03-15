import Card from "@/components/global/Card";
import Head from "next/head";
import Image from "next/image";

const CourseDirector = () => {
  return (
    <>
      <Head>
        <title>Dr. Sapnna Vaderra</title>
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

      {/* Hero */}
      <section className="h-[600px]">
          <Image
            src={
              "https://stellaraesthetics.in/wp-content/uploads/2022/11/Copy-of-_OOL5537-min.jpg.webp"
            }
            alt="dr sapnna vaderra on stage"
            width={1000}
            height={800}
            className="w-full h-full object-cover"
          />
      </section>

      {/* FIRST SECTION */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        <div className="mb-10">
          <h2 className="md:text-4xl text-2xl">
            <strong>Dr. Sapnna Vaderra</strong>
          </h2>
          <h3 className="sm:text-2xl text-xl text-primary">
            Surgeon. Researcher. Mentor.
          </h3>
        </div>
        <div className="md:flex mb-10">
          <div
            className="shrink-0 md:w-[30%] pt-5 bg-primary"
            style={{ backgroundColor: "#4c1a59" }}
          >
            <Image width={500}
            height={500} alt="background image" src={"/assets/img/doctor-img.jpg"} />
          </div>
          <div>
            <p className="text-body md:pl-10 sm:pt-0 pt-5">
              Surgeon – Researcher – Mentor par excellence. Dr. Sapnna Vaderra
              is a Mumbai-based Facioplastic/Faciocosmetic & Hair Transplant
              Surgeon and co-founder of Stellar Aesthetics, India. Stellar
              Aesthetics is a State-of-the-Art Cosmetic Clinic chain presently
              in 15+ cities across India, with Dr. Sapnna Vaderra heading the
              team as a Director. Having a passion for aesthetics during her
              graduation days, she went on to master her skills in
              CranioMaxillofacial Surgery, followed by her Fellowship in
              Rhinoplasty & Facial Plastic Surgery and Fellowship in Facial
              Plastic and Facial Cosmetic Surgery, which gave her the skills and
              expertise to become one of the Youngest Mentors to date. With her
              thorough qualifications and vast experience in the field of Facial
              Plastics and Aesthetics, she is one of the most sought-after
              specialists for Oro-Facial Plastic procedures &Reconstructive
              Surgeries at a wide variety of Clinics and Hospitals across India.
            </p>
          </div>
        </div>
      </section>
      {/* ACADAMIC QUALIFICATION */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">Academic Qualifications</h2>

          <div className="lg:flex">
            <p className="text-body md:pr-10">
              Dr. Sapnna Vaderra began her journey with the completion of her
              Graduation from Datta Meghe Institute of Medical Sciences, Wardha
              & Post-Graduation in Cranio-Maxillofacial Surgery from VSPM‘s DCRC
              and Lata Mangeshkar Hospital Nagpur During her tenure as a
              resident surgeon, she mastered various skills related to
              extra-oral and intra-oral surgical procedures and anaesthetic
              techniques, including but not limited to management of Head and
              Neck Trauma, Head and Neck Cancers and pathologies, Orofacial
              space infections, Craniofacial syndromes, and deformities
              Temporomandibular joint complications, and Aesthetic/Cosmetic
              rehabilitation of the face. She has witnessed a variety of
              scenarios where surgical intervention is of utmost necessity and
              at times lifesaving in nature.
              <br /> <br />
              During her learning days, she also honed her skills with her
              observer-ship training in Head and Neck Cancers at Rashtra Tukdoji
              tertiary Cancer Center in Nagpur. Followed by extended
              observer-ship training Cranio-Neurosurgery at Neuron Hospital. Her
              curiosity to dive deep into the subject of Head and Neck Surgery
              helped her to further enhance her skills with Fellowship in
              Implantology.
              <br />
              <br />
              Her passion towards Aesthetics was the main driving force for her
              to enter into the field of Aesthetics. During her advanced
              training as Cosmetic Surgeon, she learned the art of creating
              beautiful and well-balanced Noses and Faces with utmost dedication
              and passion through her Fellowship in Rhinoplasty & Facial Plastic
              Surgery from the “Indian Society of Facial Plastic and
              Reconstructive Surgery”.
              <br />
              <br />
              Finally, she went on to master the nuances of Anti-aging, Facial
              Contouring, Beautification, and Facial Engineering with a
              Fellowship in Facial Plastic Surgery and Facial Cosmetic Surgery
              from Mumbai. Additionally, she has attended umpteen workshops to
              upgrade her skills in the field of Hair Transplantation,
              Micropigmentation, and Microblading all of which are elective
              cosmetic procedures, and elevate her skills to encompass nearly
              all of the cosmetic procedures available today.
              <br />
              <br />
              Dr. Sapnna believes that each patient is different, and no single
              procedure can be applied to all the patients in similar ways. She
              uses all these skills beautifully mastered by her, combined with
              years of experience to treat her precious patients. Dr. Sapnna
              Vaderra is a life-long student, who loves to be up-to-date on new
              concepts, technologies, and protocols in the world of surgical and
              aesthetic procedures, and imparts this knowledge with the same
              enthusiasm.
            </p>
            <div className="shrink-0 md:w-[40%] w-full md:mt-0 mt-10">
              <Image
              width={500}
              height={500}
                src="https://stellaraesthetics.in/wp-content/uploads/2021/12/20190927_205052.jpg.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* EXPERTISE AS MENTOR */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        {" "}
        <div>
          <h2 className="text-3xl font-bold mb-5">Expertise as a Mentor</h2>
          <p className="text-body md:pr-10">
            Armed with a sound theoretical background, up-to-date clinical
            skills, and an amalgamation of evidence-based approaches, Dr.Sapnna
            Vaderra is one of the most sought-after mentors in the field of
            Facial Aesthetics.
            <br />
            <br />
            At Stellar Aesthetics, she teaches techniques to perform cosmetic
            correction procedures for beauty, anti-aging, Facial Reshaping,
            Facial Contouring, Birth abnormalities, fractures, trauma,
            cancer-induced facial deformities & various other Cosmetic
            correction.
            <br />
            <br />
            By blending modern techniques with the expertise of an artist, Dr.
            Sapnna Vaderra’s teaching method creates an unparalleled learning
            environment for the trainees who travel from all corners of the
            world, Nationally, and Internationally to attend her courses.
            <br />
            <br />
            Dr. Sapnna Vaderra’s courses are designed to cover the entire
            spectrum of Facial Cosmetics, Anti-aging, LASERS, Hair Restoration &
            Cosmetic Micropigmentation in an integrated and comprehensive way.
            These treatments are not performed as stand-alone treatment
            procedures; thus, an exceptional amount of skill and talent is
            required to set up a sound treatment plan. Dr.Sapnna’s trainees
            thoroughly appreciate her for teaching them the art of weaving a
            perfect treatment plan for every patient. This is a skill that comes
            with thorough experience and know-how of the latest treatment
            procedures in the market.
            <br />
            <br />
            In addition to the best training in different aesthetic aspects,
            treatments, diagnostic procedures, and aftercare methodologies, her
            students also learn proficiency in clinic management & financial
            planning for running a successful aesthetic practice. All the
            practical aspects that are required for a doctor to set up a
            successful cosmetic practice are covered by Dr.Sapnna Vaderra in her
            workshops. She thoroughly trains every candidate so that they can
            also aspire for greatness in the world of aesthetics. After all the
            in-office training she also provides doubt solving sessions and
            post-course support. All these aspects make her one of the best
            mentors in today’s day and age.
          </p>

          <div className="flex flex-wrap my-10 gap-5 justify-between">
            <div className={"md:w-[48%] h-[500px]"}>
              <div className="w-full h-full">
                <div className="img h-[90%] w-full bg-gray-200">
                  <Image
                  width={500}
                  height={500}
                  alt="image"
                    src={
                      "https://stellaraesthetics.in/wp-content/uploads/2022/12/FB_IMG_1669278790679.jpg"
                    }
                    imgClass="w-full h-full object-cover"
                    className={"w-full h-full"}
                  />
                </div>
                <div className="caption mt-3">
                  <h5 className="text-md font-medium">
                    Participant performing Hands-on for LASER with Dr. Sapnna
                    Vaderra
                  </h5>
                </div>
              </div>
            </div>
            <div className={"md:w-[48%] h-[500px]"}>
              <div className="w-full h-full">
                <div className="img h-[90%] w-full bg-gray-200">
                  <Image
                  width={500}
                  height={500}
                    src={
                      "https://stellaraesthetics.in/wp-content/uploads/2022/12/FB_IMG_1669278996452.jpg"
                    }
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="caption mt-3">
                  <h5 className="text-md font-medium">
                    Participant performing Hands-on for LASER with Dr. Sapnna
                    Vaderra
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* An Avid Researcher */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">An Avid Researcher</h2>
          <p className="text-body md:pr-10">
            Dr. Sapnna is not just a devoted surgeon but also an extremely
            passionate and keen researcher. She has multiple publications in
            journals of national and international renown. A few of her
            game-changing researches are “Aging and the Indian face: an
            analytical study of aging in the Asian Indian face” & “Innovative
            approach for tear trough deformity correction using higher G prime
            fillers for safe, efficacious, and long‐lasting results: A
            prospective interventional study”. These building blocks of science
            form a firm plinth for her surgical procedures and open doors to
            innovations in the cosmetic arena.
            <br />
            <br />
            At this young age, she has co-authored a chapter on “Cosmetic
            Complications after Bariatric Surgery”, in a book by one of the most
            prestigious American publication houses “Springer publication”.
            There are very few surgeons who have been able to flaunt the brain
            skill to write books on the subject they practice, Dr.Sapnna Vaderra
            is definitely one such gifted surgeon. Dr. Sapnna Vaderra is a
            reviewer for Facial Plastic Surgery & Facial Cosmetic Surgery at one
            of the world’s top and premium Netherland based scientific
            publishing house “Elsevier” Her research encompasses all these
            facets of Facial Aesthetics and sheds light on the quality and
            integrity of surgical procedures, as well as the literature
            publications that she is involved in.
          </p>
        </div>
      </section>
      {/* Awards & Accolades */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">Awards & Accolades</h2>
          <p className="text-body md:pr-10">
            As one of the best Facio-Plastic and/or Cosmetic Surgeons in Mumbai,
            Dr. Sapnna Vaderra has been awarded by many national and state
            associations for her continuous efforts to improve the ways and
            practices in modern-day plastic surgery.
            <br />
            <br />
            Dr. Sapnna Vaderra got recently awarded for her contribution towards
            the field of Cosmetology with the AWARD for Excellence in Clinical
            Cosmetology in August 2022 by Molaris. Dr. Sapnna Vaderra has been
            awarded as the ‘Youth Icon of the Year’ by The Indian Association of
            Dental Students (IADS), in 2020. This award signifies the depth of
            her achievements at such a young age. She has also received the
            ‘Young Achiever in Facial Cosmetics’ award 2019 from IADS.
            <br />
            <br />
            In a high-powered event, Dr. Sapnna Vaderra was awarded for
            ‘Excellence in Facial Cosmetics’ by Indian Health Professional
            Awards in 2019, for her exemplary work in the field of Facial
            Plastic Surgery & Facial Cosmetic Surgery. The award is considered
            as ‘The healthcare Oscars of India’. Dr. Sapnna Vaderra holds the
            Presidential Post in the ‘Chapter ABODE‘ of the 36-year-old Business
            Network International(BNI) organization. With over 10,000 chapters
            running worldwide, BNI is one of the most prestigious organizations
            to be associated with and a presidential post is an honour to be
            bestowed with.
            <br />
            <br />
            Dr. Sapnna Vaderra has been bestowed with the honour of writing “The
            Best Southeast Asian Paper” by “Journal of Plastic and
            Reconstructive Surgery, Fall 2021”. This is an example of her
            exemplary literary work on the “Ageing Indian face” and the in-depth
            study of Indian skin types. Such achievements personify the passion
            for her art & science of Aesthetic Medicine & Plastic Surgery. Dr.
            Sapnna Vaderra has secured 1st position in the M.D.S University
            examinations in the Oral & Maxillofacial Surgery Department, VSPM‘s
            DCRC Nagpur. She has been the brightest student in her batch with
            the traits of a very successful doctor.
          </p>

          <div className="flex flex-wrap my-10">
            <Card
              title={"KeyNote Lecture"}
              subtitle="Felicitation in Chennai, Molaris 2022"
              externalImg={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/4-1.jpg"
              }
            />
            <Card
              title={"Award by IHPA 2019"}
              subtitle="Excellence In Facial Cosmetics by IIHPA 2019"
              externalImg={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2021/12/20191221_211917.jpg"
              }
            />
            <Card
              title={"IHPA AWARD 2019"}
              subtitle="Indian Health Professional Award 2019, Delhi"
              externalImg={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/FB_IMG_1669278802731.jpg"
              }
            />
            <Card
              title={"Award: IADS Connexon 2020"}
              subtitle="Young Achiever in Facial Cosmetics"
              externalImg={true}
              horizontal={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/1-1.jpg.webp"
              }
            />
            <Card
              title={"Youth Icon Of The Year, Connexon 2020"}
              subtitle="Youth Icon Of The Year, Connexon 2020"
              externalImg={true}
              horizontal={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/facebook_1629933159827_6836435171996936098-1.jpg.webp"
              }
            />
            <Card
              title={"Excellence in Facial Cosmetics: IHPA 2019"}
              subtitle="Excellence in Facial Cosmetics, Molaris 2022"
              externalImg={true}
              horizontal={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/sfad.jpg.webp"
              }
            />
            <Card
              title={"KeyNote Speaker"}
              subtitle="45th AOMSI National Conference, 2021"
              externalImg={true}
              horizontal={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/national-speaker.jpg.webp"
              }
            />
            <Card
              title={"Felicitation: Connexon 2020"}
              subtitle="KeyNote Lecture: Rejuvenating Indian Face."
              externalImg={true}
              horizontal={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/facebook_1629933182430_6836435266801995459-1.jpg.webp  "
              }
            />
            <Card
              title={"Facial Plastics Surgery & Rhinoplasty"}
              subtitle="Fellowship by ISFPRS"
              externalImg={true}
              horizontal={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/h2.jpg.webp"
              }
            />
            <Card
              title={"KeyNote Speaker"}
              subtitle="RECOGYN 2022, International Cosmetic Gynaecology Conference"
              externalImg={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/7.jpg"
              }
            />
            <Card
              title={"Speaker"}
              subtitle="Felicitation at 46th AOMSI National Conference, Indore"
              externalImg={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/IMG_20221124_132901_714.webp"
              }
            />
            <Card
              title={
                "Keynote Speaker and talk on the topic: Facial Aesthetics, The Final Touch."
              }
              externalImg={true}
              img={
                "https://stellaraesthetics.in/wp-content/uploads/2022/12/FB_IMG_1669278956390-2.jpg"
              }
            />
          </div>
        </div>
      </section>
      {/* Areas of Surgical Expertise */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Areas of Surgical Expertise
          </h2>
          <p className="text-body md:pr-10">
            As a Highly trained Expert in her field, Dr.Sapnna Vaderra has
            successfully treated thousands of patients using surgical and
            nonsurgical procedures. Some of the various treatments performed by
            her include:
            <ul className="my-5">
              <li>
                Facial Cosmetic, Plastic &amp; Reconstructive Surgical
                procedures.
              </li>
              <li>Surgical Hair transplantation procedures (FUE/FUT)</li>
              <li>Semi-Robotic Hair transplantation procedures</li>
              <li>
                Non-Surgical Hair Re-growth procedures (PRP and Meso-cocktails)
              </li>
              <li>Surgical Face-lifts</li>
              <li>
                Non-Surgical Face-lifts using Threads, Face lifting devices.
              </li>
              <li>Liquid Face Lift as well as Vampire Face-lifts.</li>
              <li>Neck Lifts &amp; Double chin correction procedures.</li>
              <li>Jawline contouring</li>
              <li>Facial Rejuvenation using Botox &amp; Fillers.</li>
              <li>Lip &amp; Chin Augmentation procedures</li>
              <li>Lip Reduction procedures</li>
              <li>Lip Augmentation (Lip Fillers)</li>
              <li>Facial Brightening procedures</li>
              <li>LASER skin tightening &amp; brightening procedures</li>
              <li>LASER hair reduction</li>
              <li>Pigment reduction, Tattoo Removal procedures</li>
              <li>Removal of Moles, Skin tags &amp; Warts using LASER</li>
              <li>
                Chemical peels for Acne, Skin Brightening, and De-pigmentation
              </li>
              <li>Eyebrow designing</li>
              <li>Micropigmetation procedures for Eyebrows and Lip</li>
              <li>Scalp Micropigmentation</li>
              <li>Surgical Rhinoplasty (Nose Job/ Nose Surgeries)</li>
              <li>Septoplasty (DNS Correction)</li>
              <li>Nasal tip correction Surgery</li>
              <li>Facial Implants (Cheek and Chin Implants)</li>
              <li>Dimploplasty (Dimple creation procedure)</li>
              <li>Liposuction, Lipolysis (Surgical Fat Dissolution)</li>
              <li>Cool Sculpting for Fat dissolution</li>
              <li>Blepharoplasty</li>
              <li>Scar revision</li>
              <li>Acne Scar correction procedures</li>
              <li>Facial Fracture repair Surgeries- Face, Orbit, Nose, Jaw</li>
              <li>
                Corrective Surgery for Facial Fractures (2nd stage surgeries)
              </li>
              <li>Facial Cysts and Tumor surgeries</li>
              <li>Head and Neck Cancer Surgeries</li>
              <li>Orthognathic (Jaw repositioning) Surgery</li>
              <li>Genioplasty (Chin repositioning) procedures</li>
            </ul>
            <br />
            Dr. Sapnna believes in creating a good rapport with her patients to
            understand their expectations so that treatment planning can be
            outlined through customized protocols. Additionally, Dr. Sapnna
            explains how Indian skin is unique and different from other types of
            skin, thus treatment plans should be titrated as per the skin and
            face type of each patient. Such minute attention to detail, coupled
            with her commitment to patient care and predictable results, makes
            her a class apart surgeon of today’s generation.
          </p>
        </div>
      </section>
      {/* Media Coverage */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">Media Coverage</h2>
          <div className="flex flex-wrap gap-5 my-10">
            <div className={"md:w-[48%]"}>
              <div>
                <div className="img w-full bg-gray-200">
                  <Image
                  width={500}
                  height={500}
                  alt=""
                    src={
                      "https://stellaraesthetics.in/wp-content/uploads/2022/12/IMG_20221124_142944.jpg.webp"
                    }
                    imgClass="w-full h-full object-cover"
                    className={"w-full h-full"}
                  />
                </div>
              </div>
            </div>
            <div className={"md:w-[48%]"}>
              <div>
                <div className="img w-full bg-gray-200">
                  <Image
                  alt=""
                  width={500}
            height={500}
                    src={
                      "https://stellaraesthetics.in/wp-content/uploads/2022/12/IMG_20221124_142919.jpg.webp"
                    }
                    imgClass="w-full h-full object-cover"
                    className={"w-full h-full"}
                  />
                </div>
              </div>
            </div>
            <div className={"md:w-[48%]"}>
              <div>
                <div className="img w-full bg-gray-200">
                  <Image
                  alt=""
                  width={500}
            height={500}
                    src={
                      "https://stellaraesthetics.in/wp-content/uploads/2022/12/IMG_20221124_142854.jpg.webp"
                    }
                    imgClass="w-full h-full object-cover"
                    className={"w-full h-full"}
                  />
                </div>
              </div>
            </div>
            <div className={"md:w-[48%]"}>
              <div>
                <div className="img w-full bg-gray-200">
                  <Image
                  alt=""
                  width={500}
            height={500}
                    src={
                      "https://stellaraesthetics.in/wp-content/uploads/2022/12/IMG_20221124_142842.jpg.webp"
                    }
                    imgClass="w-full h-full object-cover"
                    className={"w-full h-full"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Humanitarian Works */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">Humanitarian Works</h2>
          <p className="text-body md:pr-10">
            Humanitarian Doctors share a passion for improving the quality of
            life for as many people as possible. Dr. Sapnna Vaderra has been
            associated with several NGO/ Non-profit organizations since her
            initial days as a doctor. She gives back to society with both hands.
            She is also a co-founder of the NGO “Aiming for the Stars (AFM)”.
            The main motto of AFM is to give confidence to individuals to reach
            for the Stars. This organization right now is helping thousands of
            people suffering from Birth deformities, secondary trauma, burns
            marks, cancer survivors who are dealing every day with the societal
            stigma of facing people due to lack of confidence. The NGO helps the
            needy get rid of the stigma associated with any Facial/aesthetic
            deformity and avail treatment to improve their appearance and make
            their place in society.
            <br /> <br />
            Dr. Sapnna Vaderra is an ardent believer that everybody should have
            an equal opportunity to avail treatment. She works hard to help
            people improve their cosmetic features so as to boost their
            confidence, avail jobs, and lead successful lives. There is a great
            deal of dedication in the pursuit of public service & it takes a
            degree of personal conviction to serve people without expecting
            anything material gain. Dr. Sapnna beautifully accomplishes a
            balance between state-of-the-art practice and selfless service to
            society.
          </p>
        </div>
      </section>
      {/* Memberships & Affiliations */}
      <section className="md:my-16 md:mx-10 my-10 mx-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Memberships & Affiliations
          </h2>
          <p className="text-body md:pr-10">
            Along with the best evidence and clinical guidance, Dr. Sapnna
            believes in keeping herself updated with the latest technology,
            innovations, and practices requires to be in touch with various
            societies of practice. She makes it a point to get a maximum number
            of subscriptions, associations & affiliations to bring the best to
            her patients & students.
            <br />
            <br />
            <strong>She is Affiliated with the following:</strong>
            <br />
            <br />
            <ul>
              <li>Member of Indian Dental Association. (IDA)</li>
              <li>
                Member of Indian Academy of Aesthetic &amp; Cosmetic Dentistry
                (IAACD)
              </li>
              <li>
                Member of Association of Oral and Maxillofacial Surgeons in
                India (AOMSI)
              </li>
              <li>
                Member of Association of Oral and Maxillofacial Surgeons in
                India- Maharashtra State Chapter.
              </li>
              <li>Annual Member of AOCMF</li>
              <li>Annual Member of BNI.</li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
  // ) : (
  //   <Bar />
  // );
};

export default CourseDirector;
