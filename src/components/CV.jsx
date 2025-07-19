import React from "react";

const skills = [
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "Flutter",
  "Dart",
  "React JS",
  "GitHub",
  "Postman",
];

const experiences = [
  {
    title: "Flutter Developer",
    company: "GuideMe (2nd year project)",
    description:
      "Developed a mobile app as part of a team project in my 2nd year at ESI SBA.",
  },
  {
    title: "React JS Developer",
    company: "NCS Hackathon (ECO-DZ project)",
    description:
      "Built the admin dashboard for our project app ECO-DZ during a 4-day hackathon.",
  },
];

const languages = [
  "Arabic",
  "English",
  "French (basic)",
];

export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white font-sans px-4 py-8 flex flex-col items-center animate-fade-in">
      {/* Header */}
      <header className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-bounce">Hayat Mellal</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-1">Software Engineering Student / Frontend Developer</h2>
        <p className="text-blue-200">Tissemsilt, Algeria</p>
      </header>

      {/* About */}
      <section className="w-full max-w-2xl bg-blue-800 bg-opacity-60 rounded-xl p-6 mb-6 shadow-lg animate-slide-in">
        <h3 className="text-2xl font-semibold mb-2 text-blue-200">About Me</h3>
        <p>
          I am a 3rd year software engineering student at ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès), passionate about frontend development and mobile apps. Experienced in React JS and Flutter, with a strong foundation in Java, JavaScript, HTML, CSS, Dart, and tools like GitHub and Postman. Multilingual: Arabic, English, and some French.
        </p>
      </section>

      {/* Skills */}
      <section className="w-full max-w-2xl mb-6 animate-fade-in delay-200">
        <h3 className="text-2xl font-semibold mb-2 text-blue-200">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-700 bg-opacity-80 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience / Projects */}
      <section className="w-full max-w-2xl mb-6 animate-fade-in delay-300">
        <h3 className="text-2xl font-semibold mb-2 text-blue-200">Experience & Projects</h3>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-blue-900 bg-opacity-70 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-200">
              <h4 className="text-lg font-bold text-blue-100">{exp.title}</h4>
              <p className="text-blue-300 font-semibold">{exp.company}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="w-full max-w-2xl mb-6 animate-fade-in delay-400">
        <h3 className="text-2xl font-semibold mb-2 text-blue-200">Education</h3>
        <div className="bg-blue-900 bg-opacity-70 rounded-lg p-4 shadow-md">
          <p className="font-bold text-blue-100">3rd Year Student</p>
          <p>ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès)</p>
        </div>
      </section>

      {/* Languages */}
      <section className="w-full max-w-2xl mb-6 animate-fade-in delay-500">
        <h3 className="text-2xl font-semibold mb-2 text-blue-200">Languages</h3>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="bg-blue-700 bg-opacity-80 px-4 py-2 rounded-full text-sm font-medium shadow-md"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="w-full max-w-2xl mb-6 animate-fade-in delay-600">
        <h3 className="text-2xl font-semibold mb-2 text-blue-200">Contact</h3>
        <div className="space-y-1">
          <p>Email: <a href="mailto:hayatttt1111@gmail.com" className="text-blue-300 underline">hayatttt1111@gmail.com</a></p>
          <p>Phone: <a href="tel:+213696825204" className="text-blue-300 underline">+213696825204</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/mellal-hayat-05bb11361/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">mellal-hayat-05bb11361</a></p>
          <p>GitHub/Portfolio: <a href="https://hytmel.github.io/hayatdev-portfolio/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">hytmel.github.io/hayatdev-portfolio/</a></p>
        </div>
      </section>
    </div>
  );
}

// Animations (add to your global CSS or Tailwind config if not present):
// .animate-fade-in { animation: fadeIn 1s ease-in; }
// .animate-slide-in { animation: slideIn 1s ease-in; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideIn { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } } 