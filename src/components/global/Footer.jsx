import Link from "next/link"
import menu from "@/data/menu.json";

const Footer = () => {
  const handleTop = () => {
    document.body.scrollTop = 0;
  };
  return (
    <footer className="border-t">
      <div className="border-b gap-2 flex items-center justify-between p-5">
        <h2 className="text-2xl font-semibold text-primary">
          Stellar Aesthetics
        </h2>
        <button
          className="border-2 border-primary rounded-full py-2 md:px-5 px-3 text-primary hover:text-black hover:border-black transition"
          onClick={handleTop}
        >
          Back Top
        </button>
      </div>
      <ul className="sm:p-10 p-4 sm:flex justify-between">
        <li className="list-none lg:w-[20%] shrink-0 sm:px-10 sm:w-1/2 w-full">
          <h3 className="text-lg font-semibold text-primary">Useful Links</h3>
          <ul className="my-5">
            {menu.map((item, key) => {
              return (
                <li key={key} className="list-none my-1">
                  <Link
                    aria-label="link"
                    className="text-h-primary no-underline text-black"
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="list-none lg:w-[20%] shrink-0 sm:px-10 sm:w-1/2 w-full">
          <h3 className="text-lg font-semibold text-primary">Company</h3>
          <ul className="my-5">
            {menu.map((item, key) => {
              return item.label === "about" || item.link === "/about-us" ? (
                <>
                  <li key={key} className="list-none my-1">
                    <Link
                      aria-label="link"
                      className="text-h-primary no-underline text-black"
                      href={item.link}
                    >
                      {item.label}
                    </Link>
                  </li>
                  {item.submenu.map((subitem, key) => {
                    return (
                      <li key={key} className="list-none my-1">
                        <Link
                          aria-label="link"
                          className="text-h-primary no-underline text-black"
                          href={subitem.link}
                        >
                          {subitem.label}
                        </Link>
                      </li>
                    );
                  })}
                </>
              ) : null;
            })}
          </ul>
        </li>
        <li className="list-none lg:w-[40%] shrink-0 sm:px-10 sm:w-1/2 w-full">
          <h3 className="text-lg font-semibold text-primary">Courses</h3>
          <ul className="my-5">
            {menu.map((item) => {
              return item.label === "course" || item.link === "/courses" ? (
                <>
                  {item.submenu.map((subitem, key) => {
                    return subitem.heading ? (
                      <>
                        {subitem.items.map((subsubitem, key) => {
                          return (
                            <li key={key} className="list-none my-1">
                              <Link
                                aria-label="link"
                                className="text-h-primary no-underline text-black"
                                href={subsubitem.link}
                              >
                                {subsubitem.label}
                              </Link>
                            </li>
                          );
                        })}
                      </>
                    ) : (
                      <li key={key + Math.random()} className="list-none my-1">
                        <Link
                          aria-label="link"
                          className="text-h-primary no-underline text-black"
                          href={subitem.link}
                        >
                          {subitem.label}
                        </Link>
                      </li>
                    );
                  })}
                </>
              ) : null;
            })}
          </ul>
        </li>
        <li className="list-none lg:w-[20%] shrink-0 sm:px-10 sm:w-1/2 w-full">
          <h3 className="text-lg font-semibold text-primary">Procedures</h3>
          <ul className="my-5">
            {menu.map((item, key) => {
              return item.label === "procedures" || item.link === "/procedures"
                ? item.submenu.map((subitem) => (
                    <li key={key} className="list-none my-1">
                      <Link
                        aria-label="link"
                        href={subitem.link}
                        className="text-h-primary no-underline text-black"
                      >
                        {subitem.label}
                      </Link>
                    </li>
                  ))
                : null;
            })}
          </ul>
        </li>
      </ul>
      <p className="sm:text-lg text-sm text-center border-t py-4">
        @Stellar Aesthetics All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
