export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Srimathi Nagarajan. All rights reserved.
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Full Stack Developer · B.Tech Information Technology
          </p>
        </div>

        <div className="flex gap-5 text-sm">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/srimathi-nagarajan-0076ba24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:Srimathinagarajan0910@gmail.com"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
