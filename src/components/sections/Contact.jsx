import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

const socials = [
  {
    name: "Email",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm0 0 9.75 6.75 9.75-6.75" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    value: "hayatttt1111@gmail.com",
    link: "mailto:hayatttt1111@gmail.com",
    color: "teal"
  },
  {
    name: "GitHub",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.302 2.792 7.953 6.67 9.24.487.09.665-.211.665-.47 0-.232-.008-.846-.013-1.66-2.713.59-3.286-1.308-3.286-1.308-.443-1.127-1.082-1.428-1.082-1.428-.885-.605.067-.593.067-.593  .978.069 1.493 1.005 1.493 1.005.87 1.492 2.283 1.061 2.84.812.088-.63.34-1.062.618-1.306-2.167-.247-4.444-1.084-4.444-4.827 0-1.066.38-1.938 1.003-2.62-.101-.247-.435-1.24.096-2.586 0 0 .816-.262 2.675 1.001A9.32 9.32 0 0 1 12 6.844c.827.004 1.66.112 2.438.328 1.858-1.263 2.673-1.001 2.673-1.001.533 1.346.199 2.339.098 2.586.625.682 1.002 1.554 1.002 2.62 0 3.751-2.28 4.578-4.453 4.822.35.302.66.899.66 1.814 0 1.31-.012 2.367-.012 2.69 0 .261.176.563.67.468C18.96 19.95 21.75 16.3 21.75 12c0-5.385-4.365-9.75-9.75-9.75Z" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    value: "github.com/Hytmel",
    link: "https://github.com/Hytmel",
    color: "purple"
  },
  {
    name: "LinkedIn",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M16.5 8.25A6.75 6.75 0 0 1 23.25 15v3.75A2.25 2.25 0 0 1 21 21H3A2.25 2.25 0 0 1 .75 18.75V15A6.75 6.75 0 0 1 7.5 8.25h9Z" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.25 21V12.75M15.75 21V12.75M12 21v-4.5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    value: "linkedin.com/in/mellal-hayat-05bb11361/",
    link: "https://www.linkedin.com/in/mellal-hayat-05bb11361/",
    color: "teal"
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-purple-950/60 via-teal-950/40 to-black/80"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full flex flex-col md:flex-row gap-12 items-stretch">
          {/* Contact Info & Socials */}
          <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0 bg-white/5 border border-teal-400/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 via-purple-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              Get In Touch
            </h2>
            <div className="space-y-6">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className={`rounded-full p-2 bg-gradient-to-tr ${s.color === "teal" ? "from-teal-400 to-purple-400" : "from-purple-400 to-teal-400"} shadow-md group-hover:scale-110 transition-transform`}>{s.icon}</span>
                  <span className="text-lg font-semibold text-white group-hover:underline">{s.value}</span>
                </a>
              ))}
            </div>
          </div>
          {/* Contact Form */}
          <div className="flex-1 flex items-center">
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-teal-400/5 border border-teal-400/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-teal-400 focus:bg-teal-400/10 placeholder:text-teal-200/70"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-purple-400/5 border border-purple-400/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-purple-400 focus:bg-purple-400/10 placeholder:text-purple-200/70"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-teal-400 focus:bg-teal-400/5 placeholder:text-gray-300/70"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 via-purple-400 to-teal-300 text-white py-3 px-6 rounded-lg font-bold shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};