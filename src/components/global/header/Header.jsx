import { useEffect, useState } from "react";
import Middlebar from "./Middlebar";
import MobileMenu from "./mobilemenu/MobileMenu";
import Navbar from "./navbar/Navbar";
import Topbar from "./Topbar";
import { motion } from "framer-motion";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const screenWidth = window.screen.width;
    if (screenWidth < 768) return setToggle(true);
  }, []);
  return (
    <>
      <motion.header
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Topbar />
        <Middlebar />
        {toggle ? <MobileMenu /> : null}
      </motion.header>
      {!toggle && <Navbar />}
    </>
  );
};

export default Header;
