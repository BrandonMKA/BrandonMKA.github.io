import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/siteData";

const filters = ["All", "Software", "Data", "Cloud"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;

    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <main className="pageShell">
      <Reveal>
        <PageHero
          eyebrow="Projects"
          title="Software, data, cloud, and analytics work."
        >
          <p>
            These case studies explain the problem, my role, the technical
            approach, the outcome, and what I would improve next.
          </p>
        </PageHero>
      </Reveal>

      <Reveal as="section" className="filterBar" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            type="button"
            key={item}
            className={filter === item ? "filterButton active" : "filterButton"}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </Reveal>

      <section className="projectGrid">
        {visibleProjects.map((project, index) => (
          <Reveal
            key={`${filter}-${project.slug}`}
            delay={index * 100}
            className="projectReveal"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </section>
    </main>
  );
}