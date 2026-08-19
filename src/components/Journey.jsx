const journey = [
  {
    year: "2018 – 2019",
    title: "Completed SSLC",
    description:
      "Completed SSLC at Government Girls Higher Secondary School, Komarapalayam, securing 87.6%.",
  },
  {
    year: "2019 – 2021",
    title: "Completed HSC",
    description:
      "Completed HSC at Government Girls Higher Secondary School, Komarapalayam, securing 92.27%.",
  },
  {
    year: "2021 – 2025",
    title: "B.Tech. Information Technology",
    description:
      "Pursued B.Tech. in Information Technology at Sri Shanmugha College of Engineering and Technology and graduated with an 8.92 CGPA.",
  },
  {
    year: "2023 – 2024",
    title: "BPO Internship",
    description:
      "Worked at In22Labs, NSIC Tech Park, Ekkaduthangal, Chennai, gaining experience in client communication, data management, and process optimization.",
  },
  {
    year: "2025",
    title: "Web Development Internship",
    description:
      "Worked as a Web Development Intern at Qveto Technologies, Hyderabad, focusing on frontend development and project implementation.",
  },
  {
    year: "2025 – Present",
    title: "Digital Full Stack Developer",
    description:
      "Working as a Digital Full Stack Developer Intern at Omaeva Ltd, UK, developing full-stack web applications involving frontend, backend, databases, and API integration.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">My Journey</p>

        <h2 className="mt-2 text-4xl font-bold">
          My learning & career journey
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          From my academic foundation to gaining practical experience
          through internships, each stage has helped me develop my
          technical and professional skills.
        </p>

        <div className="relative mt-12 border-l border-cyan-400/30 pl-8">
          {journey.map((item) => (
            <div
              key={`${item.year}-${item.title}`}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-900" />

              <p className="text-sm font-semibold text-cyan-400">
                {item.year}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
