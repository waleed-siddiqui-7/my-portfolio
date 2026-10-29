
import { useEffect, useState } from "react";
import { Faq } from "./api/skill";
import { Navlink } from "./api/navlinks";
import { projectapi } from "./api/project";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skill, setSkill] = useState([]);
  const [links, setLinks] = useState([]);
  const [project, setProject] = useState([]);

  // Fetch skills
  useEffect(() => {
    async function handleSkill() {
      try {
        const data = await Faq();
        setSkill(data);
      } catch (error) {
        console.error("Skills API Error:", error);
      }
    }

    handleSkill();
  }, []);

  // Fetch navigation links
  useEffect(() => {
    async function handleLinks() {
      try {
        const data = await Navlink();
        setLinks(data);
      } catch (error) {
        console.error("Navigation API Error:", error);
      }
    }

    handleLinks();
  }, []);

  // Fetch projects
  useEffect(() => {
    async function handleProject() {
      try {
        const data = await projectapi();
        setProject(data);
      } catch (error) {
        console.error("Projects API Error:", error);
      }
    }

    handleProject();
  }, []);

  // Close mobile menu when a link is clicked
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen overflow-x-clip scroll-smooth bg-[#080d18] text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d18]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <span className="shrink-0 text-2xl font-black text-blue-500 sm:text-3xl">
              WS
            </span>

            <span className="truncate text-sm font-bold sm:text-lg">
              Waleed Siddiqui
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links?.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap text-sm transition hover:text-blue-400 ${index === 0 ? "text-blue-400" : "text-slate-300"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden rounded-full border border-blue-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-600 lg:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="shrink-0 rounded-lg border border-white/10 px-3 py-2 text-xl transition hover:bg-white/5 lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 px-4 py-3 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {links?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold transition hover:bg-blue-500"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 md:py-24 lg:gap-16 lg:px-10 lg:py-32"
        >
          {/* Hero Content */}
          <div className="min-w-0">
            <span className="inline-flex max-w-full flex-wrap items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-300 sm:px-4">
              👋 Hello, I'm a developer
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:mt-7 sm:text-5xl lg:text-7xl">
              Waleed
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Siddiqui
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl lg:text-3xl">
              Full Stack Developer
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
              I build modern, responsive web applications with a focus on
              clean code, useful features, and great user experiences.
              I'm also exploring Python backend development and data science.
            </p>

            {/* Hero Buttons */}
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Explore My Work ↗
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Contact Me
              </a>
            </div>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-400 sm:mt-9 sm:gap-3 sm:text-sm">
              {["React.js", "Node.js", "Python"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-2 sm:px-4"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Developer Image */}
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute h-56 w-56 rounded-full bg-blue-600/20 blur-3xl sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

            <div className="relative w-full max-w-xs overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-slate-800 to-slate-950 p-3 shadow-2xl shadow-blue-900/30 sm:max-w-sm">
              <img
                src="/waleed2.jpg"
                alt="Waleed Siddiqui"
                className="aspect-[4/5] w-full rounded-2xl object-cover float object-top transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="px-3 py-4 text-center">
                <h3 className="text-lg font-bold sm:text-xl">
                  Waleed Siddiqui
                </h3>
                <p className="mt-1 text-sm text-blue-400">
                  Developer & Problem Solver
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About & Skills Section */}
        <section
          id="about"
          className="scroll-mt-20 border-y border-white/5 bg-[#0c1321]"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-10">
            {/* About Me */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                About Me
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Turning Ideas Into
                <span className="block text-blue-400">
                  Real Web Solutions
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
                I'm a computer science student passionate about software
                development. I enjoy solving problems, learning new
                technologies, and building projects that turn ideas into
                practical applications.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                My current focus is backend development, APIs, databases,
                and building a strong foundation for future work in
                data science.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-cyan-300"
              >
                Get in touch <span>↗</span>
              </a>
            </div>

            {/* Skills */}
            <div id="skills" className="scroll-mt-24">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                My Skills
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {skill?.map((skills, index) => (
                  <div
                    key={skills?.title ?? index}
                    className="min-w-0 rounded-2xl border border-white/10 bg-[#101a2b] p-4 transition hover:border-blue-400/40 sm:p-5"
                  >
                    <h3 className="break-words text-lg font-bold">
                      {skills.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {(skills?.items ?? "")
                        .split(",")
                        .filter((item) => item.trim())
                        .map((item) => (
                          <span
                            key={item.trim()}
                            className="max-w-full break-words rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-300"
                          >
                            {item.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                Portfolio
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Featured Projects
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                A selection of projects I've been building and learning from.
              </p>
            </div>
          </div>

          {/* Responsive Project Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project?.map((projects, index) => (
              <article
                key={projects.id ?? index}
                className="group flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#0d1524] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/30 sm:p-6 sm:hover:-translate-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="break-all text-3xl font-black text-blue-500/40 sm:text-4xl">
                    {projects.id}
                  </span>

                  <span className="text-2xl text-blue-400">↗</span>
                </div>

                <h3 className="mt-6 break-words text-xl font-bold transition group-hover:text-blue-400 sm:mt-7">
                  {projects.title}
                </h3>

                <p className="mt-3 break-words text-sm leading-7 text-slate-400 sm:text-base">
                  {projects.Discription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(projects?.tech ?? "")
                    .split(",")
                    .filter((tech) => tech.trim())
                    .map((tech) => (
                      <span
                        key={tech.trim()}
                        className="max-w-full break-words rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                </div>

                <a
                  href={projects.link || "#contact"}
                  target={projects.link ? "_blank" : undefined}
                  rel={projects.link ? "noopener noreferrer" : undefined}
                  className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-slate-200 transition hover:text-blue-400"
                >
                  Discuss Project →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-white/10 bg-[#0c1321]"
        >
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Contact
            </p>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl md:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I'm interested in learning, collaborating, and building
              meaningful software projects. Let's connect.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500 sm:px-8 sm:py-4"
            >
              Say Hello ✉
            </a>

            <p className="mt-4 break-words text-xs text-slate-500 sm:text-sm">
              Replace the example email with your real email address.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#060a14]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <a href="#home" className="inline-flex items-center gap-3">
                <span className="text-3xl font-black text-blue-500">WS</span>
                <span className="text-lg font-bold">Waleed Siddiqui</span>
              </a>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                Full Stack Developer jo clean code, useful features aur behtareen
                user experience ke saath modern web applications banata hai.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </a>

                <a
                  href="mailto:your.email@example.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
                Quick Links
              </h4>

              <ul className="mt-5 space-y-3 text-sm">
                {links?.map((link) => {
                  const label = link.label ?? link.name ?? link.title;
                  const href = link.href ?? link.url ?? link.link;
                  return (
                    <li key={link.id ?? label}>
                      <a
                        href={href}
                        className="text-slate-400 transition hover:text-blue-400"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
                Let's Work Together
              </h4>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Koi project ya idea hai? Mujhse rabta karein, main jald jawab dunga.
              </p>

              <a
                href="mailto:your.email@example.com"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Say Hello ✉
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left sm:text-sm">
            <p>
              © {new Date().getFullYear()} Waleed Siddiqui. All rights reserved.
            </p>

            <p className="text-slate-600">
              Built with React, Node.js & MySQL
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-blue-400 hover:text-blue-400"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
