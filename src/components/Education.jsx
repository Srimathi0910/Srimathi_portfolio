const education = [
  {
    degree: "B.Tech. Information Technology",
    institution: "Sri Shanmugha College of Engineering and Technology",
    period: "2021 – 2025",
    score: "8.92 CGPA",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Girls Higher Secondary School, Komarapalayam",
    period: "2019 – 2021",
    score: "92.27%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Government Girls Higher Secondary School, Komarapalayam",
    period: "2018 – 2019",
    score: "87.6%",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">Education</p>

        <h2 className="mt-2 text-4xl font-bold">
          Academic Background
        </h2>

        <div className="mt-10 space-y-6">
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.period}`}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400/40"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-cyan-400">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-slate-400">
                    {item.period}
                  </p>
                </div>

                <div className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                  {item.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
