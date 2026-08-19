export default function Learning() {
  const learning = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "API Integration",
    "Full Stack Web Development",
    "Software Testing",
    "SEO Principles",
  ];

  return (
    <section id="learning" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">Continuous Learning</p>

        <h2 className="mt-2 text-4xl font-bold">
          Growing through technology
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          I continuously strengthen my technical skills through practical
          projects, internship experience, and professional courses while
          exploring modern approaches to full-stack web development.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {learning.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/20"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
