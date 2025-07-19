import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-900/80 via-teal-900/60 to-black/90 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl z-0" />
      <RevealOnScroll>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl px-4 gap-12 md:gap-20">
          {/* Profile image */}
          <div className="flex-shrink-0 flex items-center justify-center mb-8 md:mb-0">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-teal-400 via-purple-400 to-teal-300 shadow-xl flex items-center justify-center overflow-hidden border-4 border-white/10">
              {/* Placeholder image */}
              <svg width="100%" height="100%" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="64" cy="64" r="64" fill="#1e003a" />
                <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="48" fontFamily="Inter, sans-serif" dy=".3em">H</text>
              </svg>
            </div>
          </div>
          {/* Intro text and buttons */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 via-purple-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
              Hi, I'm Hayat
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto md:mx-0 font-medium">
              Creative developer passionate about building beautiful, performant web and mobile experiences. I love crafting interfaces that feel alive and intuitive.
            </p>
            <div className="flex flex-col md:flex-row md:justify-start justify-center gap-4">
              <a
                href="#projects"
                className="bg-teal-400/90 text-white py-3 px-7 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-teal-500/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-teal-400 text-teal-300 py-3 px-7 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:bg-teal-400/10 hover:text-white hover:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};