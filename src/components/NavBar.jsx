import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(30,0,58,0.92)] backdrop-blur-lg border-b border-teal-400/20 shadow-xl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-extrabold text-2xl tracking-tight text-white flex items-center gap-2">
            <span className="bg-gradient-to-tr from-teal-400 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-mono text-lg shadow-md">H</span>
            <span className="hidden sm:inline">Hayat</span>
            <span className="text-teal-400">.dev</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-teal-300 hover:text-teal-400 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-200 hover:text-teal-400 font-medium transition-colors px-2 py-1 rounded hover:bg-teal-400/10"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-teal-400 font-medium transition-colors px-2 py-1 rounded hover:bg-teal-400/10"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-200 hover:text-teal-400 font-medium transition-colors px-2 py-1 rounded hover:bg-teal-400/10"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-teal-400 font-medium transition-colors px-2 py-1 rounded hover:bg-teal-400/10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};