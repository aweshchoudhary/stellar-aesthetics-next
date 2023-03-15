import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    document.body.scrollTop = 0;
    window.scrollY = 0;
  }, [pathname]);

  return null;
}
