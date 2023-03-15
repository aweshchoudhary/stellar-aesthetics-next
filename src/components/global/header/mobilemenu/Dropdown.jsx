import { Icon } from "@iconify/react";
import useData from "@/hooks/useContext";
import MenuItem from "./MenuItem";
import Link from "next/link";

const Dropdown = ({ items, dropdown }) => {
  const { setToggleMobileMenu } = useData();
  const scrollTop = () => {
    document.body.scrollTop = 0;
    setToggleMobileMenu(false);
  };
  return (
    <ul className={dropdown ? "block" : "hidden"}>
      {items.map((subItem, i) => {
        return subItem.heading ? (
          <MenuItem items={subItem} />
        ) : (
          <li key={i} className="list-none py-2 flex items-center">
            <Icon
              icon="material-symbols:arrow-right-rounded"
              className="text-2xl"
            />
            <Link
              aria-label="link"
              onClick={scrollTop}
              className="no-underline text-black"
              href={subItem.link}
            >
              {subItem.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
