import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../profile.png";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-indigo-400">Subhransu Panda</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Full-Stack Java Developer specializing in Spring Boot, REST APIs,
            React, and scalable backend systems.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-500 rounded-xl hover:bg-indigo-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-700 rounded-xl"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center"
        >
          <img
            src={profileImg}
            alt="Subhransu Panda"
            className="w-64 h-64 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
          />
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Java",
              "Spring Boot",
              "React",
              "MySQL",
              "AWS",
              "Docker",
              "REST APIs",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-slate-800 rounded-xl text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">E-Commerce Backend</h3>
            <p className="mt-3 text-slate-300">
              Spring Boot REST APIs with JWT authentication, cart, orders, and
              payments.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">User Management System</h3>
            <p className="mt-3 text-slate-300">
              Role-based access, profile management, and scalable architecture.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
          <p className="text-slate-300 mb-8">
            Open to remote opportunities and freelance projects.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Subhransupanda2000" target="_blank">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/subhransu-panda-oficial/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="isubhransu.panda@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-slate-500">
        © 2026 Subhransu Panda
      </footer>
    </div>
  );
}
