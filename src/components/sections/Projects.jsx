import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "GuideMe Mobile App",
    desc: "A mobile application developed with Flutter, focusing on providing an intuitive and responsive user experience with clean UI design and optimal performance.",
    tech: ["Flutter", "Dart"],
    color: "teal",
    link: "#",
    img: (
      <svg width="100%" height="100" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="100" rx="18" fill="#2dd4bf" fillOpacity="0.15" />
        <text x="50%" y="55%" textAnchor="middle" fill="#2dd4bf" fontSize="32" fontFamily="Inter, sans-serif" dy=".3em">GuideMe</text>
      </svg>
    ),
  },
  {
    title: "Weather Website",
    desc: "A web app that displays the weather in your current location and all wilayas in Algeria, integrated with OpenWeatherMap for real-time data.",
    tech: ["React.js", "OpenWeatherMap API", "JavaScript", "Geolocation"],
    color: "teal",
    link: "#",
    img: (
      <svg width="100%" height="100" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="100" rx="18" fill="#2dd4bf" fillOpacity="0.15" />
        <text x="50%" y="55%" textAnchor="middle" fill="#2dd4bf" fontSize="32" fontFamily="Inter, sans-serif" dy=".3em">Weather</text>
      </svg>
    ),
  },
  {
    title: "ECOdz Admin Website",
    desc: "Admin dashboard website created during a hackathon for the ECOdz application, featuring user management and administrative controls with modern web technologies.",
    tech: ["React.js", "HTML", "CSS", "JavaScript"],
    color: "purple",
    link: "#",
    img: (
      <svg width="100%" height="100" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="100" rx="18" fill="#a78bfa" fillOpacity="0.15" />
        <text x="50%" y="55%" textAnchor="middle" fill="#a78bfa" fontSize="32" fontFamily="Inter, sans-serif" dy=".3em">ECOdz</text>
      </svg>
    ),
  },
  {
    title: "Personal Portfolio",
    desc: "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and clean design principles.",
    tech: ["React.js", "TailwindCSS", "JavaScript", "Responsive Design"],
    color: "teal",
    link: "#",
    img: (
      <svg width="100%" height="100" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="100" rx="18" fill="#2dd4bf" fillOpacity="0.15" />
        <text x="50%" y="55%" textAnchor="middle" fill="#2dd4bf" fontSize="32" fontFamily="Inter, sans-serif" dy=".3em">Portfolio</text>
      </svg>
    ),
  },
  {
    title: "Coming Soon...",
    desc: "Working on exciting new projects! Stay tuned for more innovative web and mobile applications.",
    tech: ["React.js", "Flutter", "New Technologies", "Innovation"],
    color: "purple",
    link: "#",
    img: (
      <svg width="100%" height="100" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="100" rx="18" fill="#a78bfa" fillOpacity="0.15" />
        <text x="50%" y="55%" textAnchor="middle" fill="#a78bfa" fontSize="32" fontFamily="Inter, sans-serif" dy=".3em">Soon</text>
      </svg>
    ),
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-purple-950/60 via-teal-950/40 to-black/80"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-teal-400 via-purple-400 to-teal-300 bg-clip-text text-transparent text-center drop-shadow-lg tracking-tight">
            Featured Projects
          </h2>
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`break-inside-avoid p-7 rounded-2xl border shadow-xl transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl group ${
                  project.color === "teal"
                    ? "border-teal-400/20 bg-white/5 hover:border-teal-400/40"
                    : "border-purple-400/20 bg-white/5 hover:border-purple-400/40"
                }`}
              >
                <div className="mb-4 rounded-xl overflow-hidden shadow-md transition-all duration-200 group-hover:scale-105">
                  {project.img}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${project.color === "teal" ? "text-teal-300" : "text-purple-300"}`}>{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm font-semibold transition ${
                        project.color === "teal"
                          ? "bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 hover:shadow-md"
                          : "bg-purple-400/10 text-purple-200 hover:bg-purple-400/20 hover:shadow-md"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className={`font-semibold transition-colors my-4 ${
                      project.color === "teal"
                        ? "text-teal-300 hover:text-teal-200"
                        : "text-purple-300 hover:text-purple-200"
                    }`}
                  >
                    {project.title === "Coming Soon..." ? "Stay Updated →" : "View Project →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};