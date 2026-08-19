export default function Github() {
  return (
    <section id="github" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-cyan-400">GitHub</p>

        <h2 className="mt-2 text-4xl font-bold">
          My Code & Projects
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          Explore my development projects and coding work, including
          full-stack applications built using React.js, Node.js,
          Express.js, MySQL, and the MERN stack.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Srimathi0910/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Visit My GitHub →
          </a>

          <a
            href="#projects"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
