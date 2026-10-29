
import { useEffect, useState } from "react";
import { Faq } from "./api/skill";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { projectapi } from "./api/project";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skill, setSkill] = useState([]);

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

      <Navbar />

      <main>

        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 md:py-24 lg:gap-16 lg:px-10 lg:py-32"
        >

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


            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Explore My Work ---
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Contact Me
              </a>
            </div>


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


        <section
          id="about"
          className="scroll-mt-20 border-y border-white/5 bg-[#0c1321]"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-10">

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
      <Footer />


    </div>
  );
}

export default App;
