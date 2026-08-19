export default function Interests() {
  const interests = [
    "Full Stack Web Development",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "API Integration",
    "Software Testing",
    "Building Practical Applications",
    "Learning New Technologies",
    "SEO & Digital Technology",
  ];

  return (
    <section id="interests" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">Interests</p>

        <h2 className="mt-2 text-4xl font-bold">
          What I enjoy working on
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          I am interested in building practical web applications,
          exploring modern development technologies, and continuously
          improving my technical skills through hands-on projects and
          professional experience.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {interests.map((interest) => (
            <div
              key={interest}
              className="rounded-xl border border-white/10 bg-slate-950 p-5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
