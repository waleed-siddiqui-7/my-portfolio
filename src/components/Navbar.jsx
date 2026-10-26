
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-xl backdrop-blur-lg">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-2xl font-black shadow-lg shadow-blue-500/20">
                        C
                    </div>

                    <span className="text-2xl font-bold tracking-tight">
                        Console<span className="text-sky-400">Dot</span>
                    </span>
                </a>

                <ul className="hidden items-center gap-2 md:flex">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`block rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeLink === link.href
                                    ? "bg-sky-400/10 text-sky-400"
                                    : "text-slate-300 hover:bg-white/5 hover:text-sky-400"
                                    }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg border border-white/10 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <ul className="space-y-1 border-t border-white/10 px-6 py-4 md:hidden">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-sky-400"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
