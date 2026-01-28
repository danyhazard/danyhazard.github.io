export default function ProjectCard({
  title,
  description,
  stack,
  demo,
  repo,
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      <p className="project-stack">
        <strong>Stack:</strong> {stack}
      </p>

      <div className="project-actions">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Live Demo
          </a>
        )}

        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}
