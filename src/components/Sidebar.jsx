
import { useState } from "react";

const menuItems = [
    { name: "Dashboard", icon: "▦", href: "/dashboard" },
    { name: "My Courses", icon: "📚", href: "/courses" },
    { name: "My Lessons", icon: "▶", href: "/lessons" },
    { name: "Assignments", icon: "📝", href: "/assignments" },
    { name: "Quizzes", icon: "✓", href: "/quizzes" },
    { name: "My Progress", icon: "📈", href: "/progress" },
];

function Sidebar() {
    const [activeLink, setActiveLink] = useState("/dashboard");
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed left-4 top-4 z-50 rounded-lg bg-slate-900 p-3 text-white shadow-lg md:hidden"
                aria-label="Toggle sidebar"
            >
                ☰
            </button>

            {/* Mobile overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo */}
                <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                        L
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-slate-900">
                            Learn<span className="text-blue-600">Hub</span>
                        </h1>
                        <p className="text-xs text-slate-500">
                            Learning Management
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Learning Menu
                    </p>


                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveLink(item.href);
                                        setOpen(false);
                                    }}
                                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${activeLink === item.href
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                                        }`}
                                >
                                    <span className="flex w-6 justify-center text-lg">
                                        {item.icon}
                                    </span>

                                    <span>{item.name}</span>

                                    {activeLink === item.href && (
                                        <span className="ml-auto h-2 w-2 rounded-full bg-white" />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>


                    {/* Account section */}
                    <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Account
                    </p>

                    <ul className="space-y-1">
                        <li>
                            <a
                                href="/settings"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                            >
                                <span className="w-6 text-center text-lg">⚙</span>
                                Settings
                            </a>
                        </li>

                        <li>
                            <a
                                href="/help"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                            >
                                <span className="w-6 text-center text-lg">?</span>
                                Help & Support
                            </a>
                        </li>
                    </ul>
                </div>

                {/* User profile */}
                <div className="border-t border-slate-200 p-4">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                            ST
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-slate-900">
                                Student Name
                            </p>
                            <p className="text-xs text-slate-500">
                                Student Account
                            </p>
                        </div>

                        <button
                            className="text-slate-400 hover:text-slate-700"
                            aria-label="Profile options"
                        >
                            ⋮
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
