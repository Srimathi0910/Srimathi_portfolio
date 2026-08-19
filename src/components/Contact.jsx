export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-cyan-400">Contact</p>

        <h2 className="mt-2 text-4xl font-bold">
          Let's connect
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <p className="leading-8 text-slate-400">
              I'm a B.Tech Information Technology graduate and Full Stack
              Developer with experience in React.js, Next.js, Node.js,
              Express.js, MySQL, and MongoDB. If you would like to discuss
              an opportunity, project, or collaboration, feel free to
              get in touch.
            </p>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <p className="text-sm text-slate-500">Email</p>

                <a
                  href="mailto:Srimathinagarajan0910@gmail.com"
                  className="text-cyan-400 transition hover:text-cyan-300"
                >
                  Srimathinagarajan0910@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm text-slate-500">Phone</p>

                <a
                  href="tel:9876543211"
                  className="text-cyan-400 transition hover:text-cyan-300"
                >
                  +91 9876543211
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-sm text-slate-500">LinkedIn</p>

                <a
                  href="https://www.linkedin.com/in/srimathi-nagarajan-0076ba24b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 transition hover:text-cyan-300"
                >
                  linkedin.com/in/srimathi-nagarajan-0076ba24b
                </a>
              </div>

              {/* GitHub */}
              <div>
                <p className="text-sm text-slate-500">GitHub</p>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 transition hover:text-cyan-300"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
            />

            <button
              type="submit"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
