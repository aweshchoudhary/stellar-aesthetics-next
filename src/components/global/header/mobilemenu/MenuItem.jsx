import { useState } from "react";
import { Icon } from "@iconify/react";
import useData from "@/hooks/useContext";
import Dropdown from "./Dropdown";
import Link from "next/link";

const MenuItem = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const { setToggleMobileMenu } = useData();
  const scrollTop = () => {
    document.body.scrollTop = 0;
    setToggleMobileMenu(false);
  };
  return (
    items && (
      <li className="list-none transition py-2">
        {items.submenu || items.items ? (
          <>
            {items.label ? (
              <div className="flex items-center">
                <button
                  className="w-1/2 text-left"
                  onClick={() => setDropdown((prev) => !prev)}
                >
                  {items.label}
                </button>
                <div className="icon flex justify-end w-1/2">
                  <Link
                    aria-label="link"
                    className="no-underline text-black"
                    to={items.link}
                    onClick={scrollTop}
                  >
                    <Icon
                      icon="ri:external-link-fill"
                      className="text-h-primary text-2xl"
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="text-md font-medium p-2 bg-gray-50 flex items-center justify-between w-full"
                onClick={() => setDropdown((prev) => !prev)}
              >
                {items.heading}
                <Icon icon="ic:baseline-keyboard-arrow-down" />
              </button>
            )}

            <Dropdown
              items={items.submenu || items.items}
              dropdown={dropdown}
            />
          </>
        ) : (
          <Link
            aria-label="link"
            onClick={scrollTop}
            className="no-underline text-black"
            to={items.link}
          >
            {items.label}
          </Link>
        )}
      </li>
    )
  );
};

export default MenuItem;
