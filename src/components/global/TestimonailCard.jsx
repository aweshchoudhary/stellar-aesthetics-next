import { Icon } from "@iconify/react";
import Image from "next/image";
import ReadMore from "./ReadMore";

const TestimonailCard = ({ data }) => {
  return (
    <>
      {data && (
        <div className="md:flex mx-3 md:mx-8 md:h-[400px] gap-5">
          <div className="md:w-[30%] md:h-full h-[400px] shrink-0 bg-gray-200">
            <Image
              alt=""
              className={"object-top w-full h-full object-cover"}
              src={data.attributes.img.data.attributes.name}
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-[70%] h-full shrink-0">
            <header className="border-b md:pb-3 md:mb-3 py-3 md:flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-medium">
                  {data.attributes.customerName},
                </h3>
                <h3 className="text-lg text-body">
                  {data.attributes.customerDetails}
                </h3>
              </div>
              <div className="flex text-yellow-500">
                <Icon className="text-3xl" icon="ic:round-star-rate" />
                <Icon className="text-3xl" icon="ic:round-star-rate" />
                <Icon className="text-3xl" icon="ic:round-star-rate" />
                <Icon className="text-3xl" icon="ic:round-star-rate" />
                <Icon className="text-3xl" icon="ic:round-star-rate" />
              </div>
            </header>
            <div className="pt-4">
              <h3 className=" md:text-2xl text-xl mb-5 font-bold">
                <Icon
                  className="inline md:text-4xl text-2xl"
                  icon="mingcute:quote-left-fill"
                />
                {data.attributes.quoteHeading}
                <Icon
                  className="inline md:text-4xl text-2xl"
                  icon="mingcute:quote-right-fill"
                />
              </h3>

              <ReadMore>{data.attributes.quoteDescription}</ReadMore>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonailCard;
