import { RevealOnScroll } from "../RevealOnScroll";

const timeline = [
  {
    type: "education",
    title: "Computer Science Student",
    place: "ESI SBA, Sidi Bel Abbès, Algeria",
    period: "2023 - Present",
    icon: "🎓",
    color: "teal",
  },
  {
    type: "experience",
    title: "Flutter Developer",
    place: "Personal & Academic Projects",
    icon: "💼",
    color: "purple",
    desc: "Developed a mobile application using Flutter, focusing on user experience and performance.",
  },
  {
    type: "experience",
    title: "Web Developer",
    place: "Personal & Academic Projects",
    icon: "💻",
    color: "teal",
    desc: "Building modern, responsive web applications using React.js, JavaScript, and the latest web technologies.",
  },
  {
    type: "experience",
    title: "Hackathon Participant",
    place: "Hackathon Participant",
    icon: "🚀",
    color: "purple",
    desc: "Participated in a hackathon, contributing to the development of both a web and a mobile application, and demonstrating teamwork and development skills.",
  },
];

export const About = () => {
  const frontendSkills = [
    "React.js",
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub",
    "Postman",
    "Java",
  ];
  const mobileSkills = ["Flutter", "Dart"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-purple-950/60 via-teal-950/40 to-black/80"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12">
          {/* Timeline */}
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-teal-400 via-purple-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              About Me
            </h2>
            <div className="relative border-l-4 border-teal-400/30 pl-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="mb-10 relative">
                  <span
                    className={`absolute -left-10 top-0 w-8 h-8 rounded-full flex items-center justify-center text-2xl shadow-lg ${
                      item.color === "teal"
                        ? "bg-teal-400/80 text-white"
                        : "bg-purple-400/80 text-white"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {item.title}
                    </h3>
                    <div className="text-teal-200 text-sm mb-1">{item.place}</div>
                    <div className="text-gray-400 text-xs mb-2">{item.period}</div>
                    {item.desc && <div className="text-gray-200 text-sm">{item.desc}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Skills Card */}
          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="rounded-2xl p-8 border border-teal-400/20 bg-white/5 shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-teal-300 text-center">Web Frontend Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {frontendSkills.filter(skill => !["GitHub", "Postman", "Java"].includes(skill)).map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full text-sm font-semibold hover:bg-teal-400/20 hover:shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 border border-purple-400/20 bg-white/5 shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-300 text-center">Mobile Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {mobileSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-400/10 text-purple-200 py-1 px-3 rounded-full text-sm font-semibold hover:bg-purple-400/20 hover:shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 border border-blue-400/20 bg-white/5 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-300 text-center">Other Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {frontendSkills.filter(skill => ["GitHub", "Postman", "Java"].includes(skill)).map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-400/10 text-blue-300 py-1 px-3 rounded-full text-sm font-semibold hover:bg-blue-400/20 hover:shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};