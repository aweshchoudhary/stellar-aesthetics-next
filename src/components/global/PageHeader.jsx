import { useRouter } from "next/router";
import Link from 'next/link'

const PageHeader = ({ children }) => {
  const { pathname } = useRouter();
  const location = pathname.split("/");
  return (
    <header className="bg-primary py-14 px-10">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-medium text-white">
        {children}
      </h1>
      <div className="mt-5 text-white flex gap-2">
        <Link aria-label="link" href={"/"} className="text-white no-underline">
          Home
        </Link>
        {location.map((item, i) => {
          return (
            <Link
              aria-label="link"
              href={"/" + item}
              className="text-white no-underline"
              key={i}
            >
              {item} /
            </Link> 
          );
        })}
      </div>
    </header>
  );
};

export default PageHeader;
