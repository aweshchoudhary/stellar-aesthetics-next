import { useState } from "react";
import { Icon } from "@iconify/react";

const Accordion = ({ children, heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-2">
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <h3 className="flex items-center gap-3 cursor-pointer md:text-2xl text-xl w-full p-3 bg-primary text-white">
          <Icon
            className="text-3xl"
            icon={isOpen ? "ic:baseline-minus" : "ic:outline-plus"}
          />
          {heading}
        </h3>
      </div>
      <div
        className={`transition ${
          !isOpen ? "hidden" : "content w-full border p-5"
        }`}
        dangerouslySetInnerHTML={{__html: children}}
      >
      </div>
    </div>
  );
};

export default Accordion;
