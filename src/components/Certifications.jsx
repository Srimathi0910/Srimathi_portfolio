const certifications = [
  {
    name: "Database Front-End Developer and Software Tester",
    provider:
      "Asgardia Foundation in collaboration with TNskills – Vetri Nichayam",
    description:
      "Completed a practical course covering database, frontend development, software development, and software testing with hands-on experience.",
    link: "#",
  },
  {
    name: "SEO Principles: An Essential Guide for Beginners",
    provider: "Semrush Academy",
    description:
      "Completed a beginner-level course covering the fundamental principles and practices of Search Engine Optimization (SEO).",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-cyan-400">Certifications</p>

        <h2 className="mt-2 text-4xl font-bold">
          Courses & Certifications
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Courses and certifications that have helped me strengthen my
          technical knowledge and practical skills in software development,
          testing, databases, and SEO.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                ✓
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {cert.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-cyan-400">
                {cert.provider}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {cert.description}
              </p>

              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
