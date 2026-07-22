import { Link } from "react-router-dom";

export default function ProjectCard({ project, featured = false }) {
  const imageClasses = [
    "projectImage",
    project.imageClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={`projectCard ${featured ? "featuredProject" : ""}`}
    >
      <Link
        className="projectImageLink"
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
      >
        <img
          className={imageClasses}
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
      </Link>

      <div className="projectCardBody">
        <div className="projectMeta">
          {project.category && <span>{project.category}</span>}
          {project.year && <span>{project.year}</span>}
        </div>

        <h3>
          <Link to={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p>{project.summary}</p>

        {project.technologies?.length > 0 && (
          <div className="tagList">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}

        <div className="cardActions">
          <Link to={`/projects/${project.slug}`}>
            Read case study <span aria-hidden="true">→</span>
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}