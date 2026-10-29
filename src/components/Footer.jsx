
import { Navlink } from "../api/navlinks";
import { useState } from "react";
import { useEffect } from "react";
function Footer() {
    const [links, setLinks] = useState([]);
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
    return (
        <div>
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
                                Full Stack Developer building modern web applications with clean code,
                                useful features, and great user experiences.
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
                                if you have any project contact with me hurry!!
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
    )
}

export default Footer
