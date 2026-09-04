import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HashNavigation = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const scrollToSection = () => {
      const section = document.getElementById(hash.slice(1));
      if (!section) return;

      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - navbarHeight, behavior: "auto" });
    };

    scrollToSection();
    const retries = [100, 300, 800].map((delay) => window.setTimeout(scrollToSection, delay));
    window.addEventListener("load", scrollToSection);

    return () => {
      retries.forEach(window.clearTimeout);
      window.removeEventListener("load", scrollToSection);
    };
  }, [pathname, hash]);

  return null;
};

export default HashNavigation;
