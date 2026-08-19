const skills = {
  Programming: ["Python", "Java"],
  Frontend: ["React.js", "Next.js"],
  Backend: ["Node.js", "Express.js"],
  Databases: ["MySQL", "MongoDB"],
  Development: ["Full Stack Web Development"],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-cyan-400">Technical Skills</p>

        <h2 className="mt-2 text-4xl font-bold">
          Technologies I work with
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          My technical skills include frontend and backend development,
          database management, programming, and full-stack web application
          development.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <h3 className="text-xl font-semibold text-white">
                {category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
