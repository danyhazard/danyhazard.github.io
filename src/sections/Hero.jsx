export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I’m <span className="highlight">Josué Juárez</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build scalable internal systems focused on clean architecture,
          security, and real-world business needs.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a
            href="https://github.com/danyhazard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
