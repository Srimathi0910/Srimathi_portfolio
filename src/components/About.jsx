export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">About Me</p>

        <h2 className="mt-2 text-4xl font-bold">
          Building modern solutions with technology
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="leading-8 text-slate-400">
            I am a B.Tech Information Technology graduate with a strong
            interest in full-stack web development. I have hands-on
            experience working with React.js, Next.js, Node.js, Express.js,
            MySQL, and MongoDB, and I enjoy creating responsive,
            user-friendly applications that solve real-world problems.
          </p>

          <p className="leading-8 text-slate-400">
            Through my internships at Omaeva Ltd, Qveto Technologies, and
            In22Labs, I have gained practical experience in full-stack
            development, frontend development, API integration, client
            communication, and data management. I am passionate about
            continuously learning new technologies and growing as a
            software professional.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold text-cyan-400">8.92</h3>
            <p className="mt-2 text-slate-400">B.Tech CGPA</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold text-cyan-400">3</h3>
            <p className="mt-2 text-slate-400">Internship Experiences</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold text-cyan-400">Full Stack</h3>
            <p className="mt-2 text-slate-400">Development Focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
