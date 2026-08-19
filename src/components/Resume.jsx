export default function Resume() {
  return (
    <section id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-10 text-center">
        <p className="text-cyan-400">Resume</p>

        <h2 className="mt-3 text-4xl font-bold">
          Explore My Professional Profile
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          I'm a B.Tech Information Technology graduate and Full Stack
          Developer with experience in React.js, Next.js, Node.js,
          Express.js, MySQL, and MongoDB. My resume includes my
          education, internship experience, technical skills, projects,
          certifications, and academic achievements.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            download="Srimathi_Nagarajan_Resume.pdf"
            className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Download Resume
          </a>

          <a
            href="mailto:Srimathinagarajan0910@gmail.com"
            className="rounded-lg border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400">
          <span className="rounded-full bg-white/5 px-4 py-2">
            B.Tech IT · 8.92 CGPA
          </span>

          <span className="rounded-full bg-white/5 px-4 py-2">
            Full Stack Development
          </span>

          <span className="rounded-full bg-white/5 px-4 py-2">
            React.js & Next.js
          </span>

          <span className="rounded-full bg-white/5 px-4 py-2">
            Node.js & Express.js
          </span>
        </div>
      </div>
    </section>
  );
}
