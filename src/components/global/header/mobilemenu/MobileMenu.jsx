import { Icon } from "@iconify/react";
import menuItems from "@/data/menu.json";
import SearchBox from "../SearchBox";
import MenuItem from "./MenuItem";
import useData from "@/hooks/useContext";
import Image from "next/image";
import Link from "next/link";


const MobileMenu = () => {
  const { toggleMobileMenu, setToggleMobileMenu } = useData();
  const closeMenu = () => setToggleMobileMenu(false);
  return (
    <div
      className={`sm:w-[400px] ${
        toggleMobileMenu ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:hidden block w-screen z-50 p-5 absolute top-0 left-0 h-screen bg-white`}
    >
      <div className="head flex items-center justify-between border-b pb-5 mb-3">
        <div className="logo">
          <Image
            src="https://res.cloudinary.com/dcjhzzypt/image/upload/v1675426319/logo_bafg6y-min_bmqzyd.webp"
            alt="logo dark"
            className="w-[130px] h-[52.4px]"
          />
        </div>
        <div className="close-btn" onClick={closeMenu}>
          <Icon className="text-4xl" icon="ion:close" />
        </div>
      </div>
      <SearchBox setToggle={setToggleMobileMenu} />
      <nav className="mt-5 mobile-navbar">
        <ul className="menus">
          {menuItems.map((menu, index) => {
            return <MenuItem items={menu} key={index} />;
          })}
        </ul>
      </nav>
      <div className="buttons py-5 flex items-center gap-5">
        <Link aria-label="link" className="btn outlined text-primary">
          Whatsapp Us
          <Icon icon={"ic:baseline-whatsapp"} />
        </Link>
        <Link aria-label="link" className="btn filled bg-primary">
          Book Call
          <Icon icon={"material-symbols:call"} />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
