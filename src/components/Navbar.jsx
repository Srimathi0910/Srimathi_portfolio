const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold">
          Your<span className="text-cyan-400">Name</span>
        </a>

        <div className="hidden gap-6 md:flex">
          {navItems.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
