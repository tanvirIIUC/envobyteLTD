import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || "home"; // Default to "home"
      setActiveSection(hash);
      smoothScroll(hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Set default active section on page load
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`font-raleway bg-[#04135B] fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1900px] mx-auto flex justify-between items-center px-6 py-4 md:px-20">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-10 md:h-12" />

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-[60px] left-0 w-full md:w-auto text-center bg-[#04135B] md:flex md:gap-8 transition-all duration-300 ease-in-out ${
            isOpen ? "flex flex-col py-5 border-b md:border-none" : "hidden md:flex"
          }`}
        >
          {["HOME", "SERVICE", "COMBO SALES", "PORTFOLIO", "ABOUT US", "BLOGS"].map(
            (section, index) => {
              const sectionId = section.toLowerCase().replace(/ /g, "");
              return (
                <li key={index}>
                  <a
                    href={`#${sectionId}`}
                    className={`text-[16px] font-semibold block py-2 md:py-0 transition-colors ${
                      activeSection === sectionId ? "text-[#FF693B]" : "text-white"
                    } hover:text-[#FF693B]`}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScroll(sectionId);
                      setActiveSection(sectionId);
                      setIsOpen(false);
                      window.location.hash = sectionId;
                    }}
                  >
                    {section}
                  </a>
                </li>
              );
            }
          )}
        </ul>

        <button className="hidden cursor-pointer md:inline-block bg-[#FF693B] w-[238px] py-2 rounded text-[14px] font-sans text-white relative overflow-hidden before:absolute before:inset-0 before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full">
  See Pricing
</button>


      </div>
    </nav>
  );
}
