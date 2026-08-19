const projects = [
  {
    title: "App Free Online Platform",
    description:
      "A full-stack web application developed to provide an online platform with a responsive frontend, backend services, database integration, and API functionality.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/",
    live: "#",
    image: "/projects/app-free.png",
  },
  {
    title: "Omni Food Project",
    description:
      "A responsive food website designed with a clean and user-friendly interface using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Srimathi0910/omni-food",
    live: "https://omni-food-five.vercel.app/ ",
    image: "/projects/omni-food.png",
  },
  {
    title: "Aakam360 Website",
    description:
      "A MERN stack web project developed with a modern frontend and backend architecture for building a dynamic web application.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Srimathi0910/Aakam360-website",
    live: "#",
    image: "/projects/aakam360.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-cyan-400">Portfolio</p>

        <h2 className="mt-2 text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A selection of projects showcasing my experience in frontend,
          backend, database, and full-stack web development.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}
