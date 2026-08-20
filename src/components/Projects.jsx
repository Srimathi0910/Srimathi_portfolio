











const projects = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense management application that allows users to securely manage, track, and organize their expenses with database integration and authentication.",
    technologies: ["Next.js", "React.js", "Node.js", "MongoDB", "TypeScript"],
    github: "https://github.com/Srimathi0910/expense-tracker",
    live: "https://expense-tracker-tan-mu-47.vercel.app/",
    image: "/projects/expense-tracker.png",
  },
  // {
  //   title: "App Free Online Platform",
  //   description:
  //     "A full-stack web application developed to provide an online platform with a responsive frontend, backend services, database integration, and API functionality.",
  //   technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
  //   github: "https://github.com/",
  //   live: "#",
  //   image: "/projects/app-free.png",
  // },
  {
    title: "Omni Food Project",
    description:
      "A responsive food website designed with a clean and user-friendly interface using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Srimathi0910/omni-food",
    live: "https://omni-food-five.vercel.app/ ",
    image: "/projects/omni-food.png",
  },
  // {
  //   title: "Aakam360 Website",
  //   description:
  //     "A MERN stack web project developed with a modern frontend and backend architecture for building a dynamic web application.",
  //   technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  //   github: "https://github.com/Srimathi0910/Aakam360-website",
  //   live: "#",
  //   image: "/projects/aakam360.png",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <p className="text-cyan-400">Portfolio</p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A selection of projects showcasing my experience in frontend,
          backend, database, and full-stack web development.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Existing Projects */}
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    GitHub →
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Coming Soon Card */}
          <article className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-cyan-400/30 bg-slate-900/60 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-slate-900">
            {/* Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10 text-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-white">
              More Projects Coming Soon
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              I’m currently working on new projects and exploring more
              technologies. Stay tuned for more exciting work!
            </p>

            <span className="mt-6 rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              🚀 In Progress
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
