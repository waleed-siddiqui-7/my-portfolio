import { useEffect } from "react";
import { useState } from "react";
// import { Faq } from "./api/skill";
import { Navlink } from "./api/navlinks";
import { projectapi } from "./api/project";
// const skills = [
//   { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
//   { title: "Backend", items: ["Node.js", "Express.js", "Python", "FastAPI"] },
//   { title: "Database", items: ["MySQL", "PostgreSQL", "SQL"] },
//   { title: "Tools", items: ["Git", "GitHub", "VS Code", "REST APIs"] },
// ];





// const projects = [
//   {
//     number: "01",
//     title: "LMS Dashboard",
//     description:
//       "A learning management dashboard with course navigation, assignments, quizzes, and student progress.",
//     tech: ["React", "Tailwind CSS"],
//     link: "#contact",
//   },
//   {
//     number: "02",
//     title: "Users REST API",
//     description:
//       "A backend API with user registration, login, JWT authentication, validation, and database integration.",
//     tech: ["Node.js", "Express", "MySQL"],
//     link: "#contact",
//   },
//   {
//     number: "03",
//     title: "Product Management API",
//     description:
//       "A structured REST API for creating, retrieving, and managing products with database queries.",
//     tech: ["Express", "MySQL", "REST API"],
//     link: "#contact",
//   },
// ];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skill, setskill] = useState([])
  const [links, setlinks] = useState([])
  const [project, setProject] = useState([])
  async function handleSkill() {
    try {
      const data = []
      console.log(data)
      setskill(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleSkill()
  }, [])


  async function handleLinkds() {
    try {
      const data = await Navlink()
      setlinks(data)
    } catch (error) {

    }
  }

  useEffect(() => {
    handleLinkds()
  }, [])

  async function handleproject() {
    try {
      const data = await projectapi()
      console.log(data)
      setProject(data)
    } catch (error) {

    }
  }

  useEffect(() => {
    handleproject()
  }, [])
  // const navLinks = [
  //   { label: "Home", href: "#home" },
  //   { label: "About", href: "#about" },
  //   { label: "Skills", href: "#skills" },
  //   { label: "Projects", href: "#projects" },
  //   { label: "Contact", href: "#contact" },
  // ];

  return (
    <div className="min-h-screen scroll-smooth bg-[#080d18] text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d18]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-3xl font-black text-blue-500">WS</span>
            <span className="text-lg font-bold">Wania Sheik</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links?.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition hover:text-blue-400 ${index === 0 ? "text-blue-400" : "text-slate-300"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-blue-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-600 md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 px-3 py-2 text-xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <main>
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 lg:px-10 lg:py-32"
        >
          <div>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              👋 Hello, I'm a developer
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Wania
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Sheik
              </span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
              Full Stack Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              I build modern, responsive web applications with a focus on
              clean code, useful features, and great user experiences.
              I'm also exploring Python backend development and data science.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore My Work ↗
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 px-4 py-2">
                React.js
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Node.js
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Python
              </span>
            </div>
          </div>

          {/* Developer visual */}
          <div className="relative flex min-h-80 items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-blue-600/20 blur-3xl sm:h-80 sm:w-80" />

            <div className="relative flex h-72 w-72 flex-col items-center justify-center rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-slate-800 to-slate-950 shadow-2xl shadow-blue-900/30 sm:h-96 sm:w-96">
              <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-400/30 bg-blue-500/10 text-6xl font-black text-blue-400 sm:h-36 sm:w-36 sm:text-7xl">
                {"</>"}
              </div>

              <p className="text-xl font-bold">Building the Web</p>
              <p className="mt-2 text-sm text-slate-400">
                Learn. Build. Improve.
              </p>

              <div className="absolute -left-4 top-10 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl sm:-left-8">
                <p className="text-sm font-semibold text-blue-300">
                  Clean Code
                </p>
              </div>

              <div className="absolute -right-3 bottom-12 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl sm:-right-8">
                <p className="text-sm font-semibold text-cyan-300">
                  Creative Solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-white/5 bg-[#0c1321]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                About Me
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Turning Ideas Into
                <span className="block text-blue-400">
                  Real Web Solutions
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-400">
                I'm a computer science student passionate about software
                development. I enjoy solving problems, learning new
                technologies, and building projects that turn ideas into
                practical applications.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-slate-400">
                My current focus is backend development, APIs, databases,
                and building a strong foundation for future work in
                data science.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-cyan-300"
              >
                Get in touch <span>↗</span>
              </a>
            </div>

            <div id="skills">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                My Skills
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {skill?.map((skills) => (
                  <div
                    key={skills.title}
                    className="rounded-2xl border border-white/10 bg-[#101a2b] p-5 transition hover:border-blue-400/40"
                  >
                    <h3 className="text-lg font-bold">{skills.title}</h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {skills.items.split(",").map((item) => (
                        <span
                          key={item}
                          className="rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Portfolio
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-3 text-slate-400">
                A selection of projects I've been building and learning from.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.map((projects) => (
              <article
                key={projects.id}
                className="group rounded-2xl border border-white/10 bg-[#0d1524] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-blue-500/40">
                    {projects.id}
                  </span>
                  <span className="text-2xl text-blue-400">↗</span>
                </div>

                <h3 className="mt-7 text-xl font-bold transition group-hover:text-blue-400">
                  {projects.title}
                </h3>

                <p className="mt-3 min-h-24 leading-7 text-slate-400">
                  {projects.Discription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {projects.tech.split(",").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={projects.link}
                  className="mt-7 inline-block text-sm font-semibold text-slate-200 hover:text-blue-400"
                >
                  Discuss Project →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-white/10 bg-[#0c1321]">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-5 text-3xl font-black sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-400">
              I'm interested in learning, collaborating, and building
              meaningful software projects. Let's connect.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
            >
              Say Hello ✉
            </a>

            <p className="mt-4 text-sm text-slate-500">
              Replace the example email with your real email address.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Waleed Siddiqui. All rights reserved.
          </p>
          <a href="#home" className="transition hover:text-blue-400">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
