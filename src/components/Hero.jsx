export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-cyan-400">Hello, I'm</p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Srimathi Nagarajan
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            B.Tech IT graduate and Full Stack Developer with hands-on
            experience in React.js, Next.js, Node.js, Express.js, MySQL,
            and MongoDB. Passionate about building user-friendly,
            reliable web applications and solving real-world problems
            through technology.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download="Srimathi_Nagarajan_Resume.pdf"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">
            <a
              href="https://github.com/Srimathi0910/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/srimathi-nagarajan-0076ba24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:Srimathinagarajan0910@gmail.com"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              Email
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            <img
              src="/profile.jpg"
              alt="Srimathi Nagarajan"
              className="relative h-64 w-64 rounded-full border-4 border-cyan-400/30 object-cover md:h-80 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
