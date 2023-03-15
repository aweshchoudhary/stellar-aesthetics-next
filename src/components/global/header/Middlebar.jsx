import { Icon } from "@iconify/react";
import Link from "next/link";
import useData from "@/hooks/useContext";
import SearchBox from "./SearchBox";
import Image from "next/image";

const Middlebar = () => {
  const { setToggleMobileMenu } = useData();
  return (
    <>
      <div className="middlebar flex items-center justify-between px-10 py-3 border-b ">
        <Link aria-label="link" href="/">
          <div className="logo">
            <Image
              src="https://res.cloudinary.com/dcjhzzypt/image/upload/v1675426319/logo_bafg6y-min_bmqzyd.webp"
              alt="stellar aesthetics brand logo dark"
              className="w-[120px]"
              width={200}
              height={40}
            />
          </div>
        </Link>
        <div
          className="menu-btn md:hidden"
          onClick={() => {
            setToggleMobileMenu(true);
          }}
        >
          <Icon
            className="text-3xl text-body"
            icon="fa6-solid:bars-staggered"
          />
        </div>
        <div className="right md:flex hidden gap-3">
          <SearchBox />
          <a
            aria-label="link"
            className="btn filled bg-primary px-6"
            href="tel:+91-799-950-6817"
            target={"_blank"}
            rel="noreferrer"
          >
            <Icon
              className="sm:text-2xl text-xl"
              icon={"ic:baseline-local-phone"}
            />
            Book Call
          </a>
        </div>
      </div>
    </>
  );
};

export default Middlebar;
