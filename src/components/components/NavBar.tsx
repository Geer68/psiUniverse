import { useEffect } from "react";
import { logoImage } from "../../consts/const";
import { Link } from "react-router-dom";

export default function NavBar() {
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
      // Verificar si ambos elementos existen
      const handleToggleClick = () => {
        mobileMenu.classList.toggle("hidden");
      };

      menuToggle.addEventListener("click", handleToggleClick);

      return () => {
        menuToggle.removeEventListener("click", handleToggleClick);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <nav className="bg-[#eae0ff]  px-2 sm:px-4 py-4 rounded shadow top-0 sticky">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoImage()} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple-900">
            Psi-Universe
          </span>
        </Link>
        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="w-full md:block md:w-auto hidden" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-lg text-[#9576c5] border-b border-gray-100 hover:bg-purple-800 hover:text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-purple-900 md:p-0 "
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/psychologists"
                className="block py-2 pr-4 pl-3 text-lg text-[#9576c5] border-b border-gray-100 hover:bg-purple-800 hover:text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-purple-900 md:p-0 "
              >
                Nuestros Profesionales
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pr-4 pl-3 text-lg text-[#9576c5] border-b border-gray-100 hover:bg-purple-800 hover:text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-purple-900 md:p-0 "
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className="block py-2 pr-4 pl-3 text-lg text-[#9576c5] border-b border-gray-100 hover:bg-purple-800 hover:text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-purple-900 md:p-0 "
              >
                Dudas y Consultas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
