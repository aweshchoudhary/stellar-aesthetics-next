import BigSubmenu from "./BigSubmenu";
import { Icon } from "@iconify/react";
import Link from "next/link"

const NavItem = ({ item, depthLevel, isSubmenuOpen, setIsSubmenuOpen }) => {
  const handleHover = (boolean) => {
    setIsSubmenuOpen(boolean);
  };
  const liStyle =
    "flex no-underline text-black items-center h-full justify-between hover:text-white  py-2 px-3 hover:bg-primary transition w-full rounded gap-1";
  return (
    item && (
      <li onMouseEnter={() => handleHover(true)} className="list-none relative">
        {item.submenu || item.items ? (
          <>
            {item.label ? (
              <Link href={item.link || "/"} className={liStyle}>
                {item.label}
                {depthLevel > 0 ? (
                  <span>&raquo;</span>
                ) : (
                  <Icon className="text-2xl" icon="typcn:arrow-sorted-down" />
                )}
              </Link>
            ) : (
              <Link href={item.link || "/"} className={liStyle}>
                {item.heading}
                {depthLevel > 0 ? (
                  <Icon
                    className="text-3xl"
                    icon="ic:baseline-arrow-right-alt"
                  />
                ) : (
                  <Icon
                    className="text-3xl"
                    icon="ic:baseline-keyboard-arrow-down"
                  />
                )}
              </Link>
            )}
            {isSubmenuOpen ? (
              <BigSubmenu
                submenu={item.items || item.submenu}
                depthLevel={depthLevel}
                isSubmenuOpen={isSubmenuOpen}
                setIsSubmenuOpen={setIsSubmenuOpen}
              />
            ) : null}
          </>
        ) : (
          <Link aria-label="link" href={item.link || "/"} className={liStyle}>
            {item.label}
          </Link>
        )}
      </li>
    )
  );
};

export default NavItem;
