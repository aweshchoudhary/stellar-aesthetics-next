import faqs from "@/data/faq.json";
import Accordion from "../global/Accordion";
import Heading from "../global/Heading";

const FAQ = () => {
  return (
    <section className="section">
      <Heading
        text1={"Frequently Asked"}
        className="mb-10"
        text2="Questions"
        brNone={true}
      />
      {faqs &&
        faqs.map((item, key) => {
          return (
            <Accordion key={key} heading={item.attributes.title}>
              {item.attributes.description}
            </Accordion>
          );
        })}
    </section>
  );
};

export default FAQ;
