const achievements = [
  {
    title: "Paper Presentation – ZERONE-23",
    description:
      "Attended and participated in a paper presentation at ZERONE-23 organized by Velalar College of Engineering and Technology.",
  },
  {
    title: "Paper Presentation – Sri Ramakrishna Institution of Technology",
    description:
      "Attended and participated in a paper presentation at Sri Ramakrishna Institution of Technology.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">Achievements</p>

        <h2 className="mt-2 text-4xl font-bold">
          Academic Achievements
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Participated in academic events and paper presentations,
          demonstrating an interest in learning, technology, and
          knowledge sharing.
        </p>

        <div className="mt-10 space-y-5">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                  ✓
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {achievement.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
