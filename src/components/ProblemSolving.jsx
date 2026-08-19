export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">Problem Solving</p>

        <h2 className="mt-2 text-4xl font-bold">
          Coding & Problem Solving
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          I regularly practice data structures, algorithms and
          programming problems to improve my logical thinking and
          problem-solving skills.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://leetcode.com/"
            target="_blank"
            className="rounded-lg border border-white/10 px-5 py-3 hover:bg-white/10"
          >
            LeetCode
          </a>

          <a
            href="https://www.hackerrank.com/"
            target="_blank"
            className="rounded-lg border border-white/10 px-5 py-3 hover:bg-white/10"
          >
            HackerRank
          </a>
        </div>
      </div>
    </section>
  );
}
