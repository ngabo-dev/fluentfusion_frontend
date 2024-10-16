import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isConsultancyDropdownVisible, setIsConsultancyDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const consultancyDropdownRef = useRef(null);

  const changePage = (nav) => {
    setActive(nav);
    hideMobileNav();
  };

  const hideMobileNav = () => {
    if (window.innerWidth < 768) {
      setIsNavVisible(false);
    }
  };

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  // Handle hover for Area of Interest
  const handleDropdownMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  // Handle hover for Consultancy
  const handleConsultancyDropdownMouseEnter = () => {
    setIsConsultancyDropdownVisible(true);
  };

  const handleConsultancyDropdownMouseLeave = () => {
    setIsConsultancyDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md fixed w-full px-4 py-3 md:px-12 z-50">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img
          src="/logo.webp"
          alt="logo"
          className="w-12 rounded-full"
        />
      </div>

      {/* Navigation links */}
      <div className={`absolute left-0 top-16 w-full bg-white md:static md:flex md:w-auto ${isNavVisible ? "block" : "hidden"} md:block`}>
        <div className="flex flex-col md:flex-row md:items-center">
          <Link
            to="/"
            className={`link text-black font-semibold text-lg mx-3 ${
              active === "home" ? "text-green-600" : ""
            }`}
            onClick={() => changePage("home")}
          >
            Homepage
          </Link>
          <Link
            to="/aboutme"
            className={`link text-black font-semibold text-lg mx-3 ${
              active === "lessons" ? "text-green-600" : ""
            }`}
            onClick={() => changePage("lessons")}
          >
            About Us
          </Link>

          {/* Area of Interest dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            ref={dropdownRef}
          >
            <button
              className={`link text-black font-semibold text-lg mx-3 flex items-center ${
                active === "games" ? "text-green-600" : ""
              }`}
            >
              Area of Interest
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </button>
            {isDropdownVisible && (
              <div className="absolute bg-green-900 w-full md:w-96 shadow-lg mt-10 rounded z-50">
                <Link
                  to="#"
                  className="block text-white py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("urbanization")}
                >
                  Urbanization
                </Link>
                <Link
                  to="#"
                  className="block text-white py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("environment")}
                >
                  Environment
                </Link>
                <Link
                  to="#"
                  className="block text-white py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("sustainability")}
                >
                  Sustainability
                </Link>
                <Link
                  to="#"
                  className="block text-white py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("energy")}
                >
                  Renewable Energy
                </Link>
              </div>
            )}
          </div>

          {/* Consultancy dropdown */}
          <div
            className="relative"
            onMouseEnter={handleConsultancyDropdownMouseEnter}
            onMouseLeave={handleConsultancyDropdownMouseLeave}
            ref={consultancyDropdownRef}
          >
            <button
              className={`link text-black font-semibold text-lg mx-3 flex items-center ${
                active === "consultancy" ? "text-green-600" : ""
              }`}
            >
              Consultancy
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </button>
            {isConsultancyDropdownVisible && (
              <div className="absolute bg-green-900 text-white w-full md:w-96 shadow-lg mt-8 rounded z-50">
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("landuse")}
                >
                  Land Use Planning/Zoning Plans
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("physicalplans")}
                >
                  Detailed Physical Plans
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("swotvision")}
                >
                  Spatial SWOT, Visioning and Goal Settings
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("transportplanning")}
                >
                  Transportation Planning
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("environmentalplanning")}
                >
                  Environmental Planning and Modeling
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("disasterplanning")}
                >
                  Disaster Risk Reduction and Resilience Planning
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("capacitybuilding")}
                >
                  Capacity Building and Training
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("smartcity")}
                >
                  Green & Smart City Solutions
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("gis")}
                >
                  Geo-spatial Technology (GIS) Services
                </Link>
                <Link
                  to="#"
                  className="block py-2 px-4 hover:bg-green-700"
                  onClick={() => changePage("events")}
                >
                  Organizing and Hosting Urban Planning Events
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/blogs"
            className={`link font-semibold text-lg mx-3 ${
              active === "contact" ? "text-green-600 underline" : ""
            }`}
            onClick={() => changePage("contact")}
          >
            Event & News
          </Link>
          <Link
            to="/fellowship"
            className={`link font-semibold text-lg mx-3 ${
              active === "fellowship" ? "text-green-600" : ""
            }`}
            onClick={() => changePage("fellowship")}
          >
            Fellowship
          </Link>
        </div>
      </div>

      {/* Contact Us button on desktop */}
      <div className="hidden md:block">
        <a href="/contact">
          <button className="px-10 py-2 bg-pink-600 text-white rounded hover:bg-pink-600 transition duration-300">
            Contact us
          </button>
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button className="md:hidden text-3xl text-pink-600" onClick={toggleNav}>
        {isNavVisible ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
