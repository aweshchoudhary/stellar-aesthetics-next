import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

const WhatsappBtn = () => {
  const [fullBtn, setFullBtn] = useState(false);
  const message = useRef(document.title);
  return (
    <div className="absolute bottom-3 right-8">
      <a
        aria-label="whatsapp chat link"
        href={`https://api.whatsapp.com/send?phone=917999506817&text=Hello%20Team%20Stellar%20Aesthetics.I%20would%20like%20to%20get%20more%20info%20about%3A%20*${message.current}*`}
        className={`${
          fullBtn ? "px-5" : "px-3"
        } py-3 flex items-center gap-2 rounded-full bg-green-600 text-white`}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setFullBtn(true)}
        onMouseLeave={() => setFullBtn(false)}
      >
        <Icon className="text-3xl" icon="ic:baseline-whatsapp" />
        {fullBtn && "Message Us"}
      </a>
    </div>
  );
};

export default WhatsappBtn;
