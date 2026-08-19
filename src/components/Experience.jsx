const experiences = [
  {
    role: "Digital Full Stack Developer Intern",
    company: "Omaeva Ltd, UK",
    period: "November 6, 2025 – Present",
    description:
      "Developing full-stack web applications with frontend, backend, database integration, and API integration. Working on practical web development tasks and gaining experience in full-stack application development.",
  },
  {
    role: "Web Development Intern",
    company: "Qveto Technologies, Hyderabad, Telangana, India",
    period: "June 7, 2025 – September 7, 2025",
    description:
      "Worked on frontend development and project implementation, contributing to the development of web-based projects and gaining practical experience in web development.",
  },
  {
    role: "BPO Intern",
    company: "In22Labs, NSIC Tech Park, Ekkaduthangal, Chennai",
    period: "December 2023 – May 2024",
    description:
      "Handled client communication, data management, and process optimization while gaining practical experience in professional communication and business processes.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">Experience</p>

        <h2 className="mt-2 text-4xl font-bold">
          Internship & Experience
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          My internship experiences have provided me with practical
          exposure to full-stack development, frontend development,
          client communication, data management, and project
          implementation.
        </p>

        <div className="mt-12 space-y-12 border-l border-cyan-400/30 pl-8">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-900" />

              <h3 className="text-2xl font-semibold text-white">
                {experience.role}
              </h3>

              <p className="mt-2 font-medium text-cyan-400">
                {experience.company}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {experience.period}
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
