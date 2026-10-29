import { Navlink } from "../api/navlinks";
import { useState } from "react";
import { useEffect } from "react";
function Navbar() {
    const [links, setLinks] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
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

    // Close mobile menu when a link is clicked
    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <div>

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
        </div>
    );
}

export default Navbar;
