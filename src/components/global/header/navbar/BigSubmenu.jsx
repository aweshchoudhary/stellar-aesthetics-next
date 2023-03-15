import NavItem from "./NavItem";
import Link from "next/link"

function BigSubmenu({ submenu, depthLevel, isSubmenuOpen, setIsSubmenuOpen }) {
  depthLevel++;
  const submenuStyle = `absolute border h-fit bg-white shadow-xl ${
    depthLevel > 1 ? "left-full top-0 w-[350px]" : "top-full w-[250px]"
  }`;
  return (
    <ul
      className={submenuStyle}
      onMouseEnter={() => setIsSubmenuOpen(true)}
      onMouseLeave={() => setIsSubmenuOpen(false)}
    >
      {submenu.map((item, i) => {
        return item.heading ? (
          <NavItem
            isSubmenuOpen={isSubmenuOpen}
            setIsSubmenuOpen={setIsSubmenuOpen}
            depthLevel={depthLevel}
            item={item}
            key={i}
          />
        ) : (
          <li
            className="list-none hover:bg-gray-50 text-h-primary transition"
            key={i}
          >
            <Link
              aria-label="link"
              className="w-full no-underline text-black block px-3 py-3 h-full"
              onClick={() => setIsSubmenuOpen(false)}
              href={item.link}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default BigSubmenu;
