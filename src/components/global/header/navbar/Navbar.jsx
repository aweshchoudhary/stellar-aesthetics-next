import { useEffect, useState } from "react";
import menu from "@/data/menu.json";
import NavItem from "./NavItem";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const handleClick = () => {
    const searchInput = document.getElementById("search-input-main");
    searchInput.focus();
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    document.body.addEventListener("scroll", (e) => {
      if (document.body.scrollTop > 109) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar hidden md:block z-40 bg-white border-b px-8 py-2 sticky top-0 left-0 transition-all"
    >
      <div className={isScrolled ? "flex items-center justify-between" : null}>
        {isScrolled && (
          <div className="logo">
            <Image
              src="https://res.cloudinary.com/dcjhzzypt/image/upload/v1675426319/logo_bafg6y-min_bmqzyd.webp"
              alt="stellar aesthetics dark logo"
              width={120}
              height={40}
            />
          </div>
        )}
        <div className="flex items-center justify-between gap-5">
          <ul className="flex items-center justify-center font-medium font-lg">
            {menu.map((item, i) => {
              const depthLevel = 0;
              return (
                <NavItem
                  aria-label="link"
                  isSubmenuOpen={openSubmenu}
                  setIsSubmenuOpen={setOpenSubmenu}
                  item={item}
                  key={i}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
          <button
            aria-label="search"
            onClick={handleClick}
            className="p-3 bg-primary rounded-full text-white"
          >
            <Icon className="text-2xl" icon="tabler:search" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
