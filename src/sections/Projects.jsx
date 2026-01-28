import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Projects</h2>

        <ProjectCard
          title="MERN Internal System"
          description="Enterprise-style internal system with authentication, role-based access control (RBAC), dynamic permissions, and protected routes."
          stack="MongoDB, Express, React, Node.js, JWT, Docker"
          demo="https://crud-jj.netlify.app"
          repo="https://github.com/danyhazard/MERN-CRUD"
        />

        {/* Puedes agregar más ProjectCard aquí en el futuro */}
      </div>
    </section>
  );
}
