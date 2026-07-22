import { Link, useParams } from "react-router-dom";
import { projects } from "../data/siteData";
import NotFound from "./NotFound";
import Reveal from "../components/Reveal";

function ListSection({ title, items }) {
  return (
    <Reveal as="section" className="caseSection">
      <h2>{title}</h2>

      <ul className="caseList">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  return (
    <main className="pageShell">
      <article className="caseStudy">
        <Reveal as="header" className="caseHero">
          <Link className="backLink" to="/projects">
            ← All projects
          </Link>

          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="caseClient">{project.client}</p>
          <p className="caseLead">{project.shortDescription}</p>

          <div className="tagList">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="buttonRow">
            <a
              className="primaryButton"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="caseHeroImage"
          />
        </Reveal>

        <div className="caseLayout">
          <aside className="caseSidebar">
            <span>Project sections</span>
            <a href="#overview">Overview</a>
            <a href="#problem">Problem</a>
            <a href="#role">My role</a>
            <a href="#approach">Technical approach</a>
            <a href="#architecture">Architecture</a>
            <a href="#challenges">Challenges</a>
            <a href="#results">Results</a>
            <a href="#lessons">Lessons learned</a>
            <a href="#gallery">Gallery</a>
          </aside>

          <div className="caseContent">
            <Reveal as="section" className="caseSection" id="overview">
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </Reveal>

            <Reveal as="section" className="caseSection" id="problem">
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </Reveal>

            <div id="role">
              <ListSection title="My role" items={project.role} />
            </div>

            <div id="approach">
              <ListSection
                title="Technical approach"
                items={project.approach}
              />
            </div>

            <Reveal
              as="section"
              className="architectureSection"
              id="architecture"
            >
              <h2>Architecture</h2>

              <div className="architectureFlow">
                {project.slug === "ai-procurement" && (
                  <>
                    <span>PDF</span>
                    <b>→</b>
                    <span>OCR / Parsing</span>
                    <b>→</b>
                    <span>Validation</span>
                    <b>→</b>
                    <span>Supabase</span>
                    <b>→</b>
                    <span>React UI</span>
                  </>
                )}

                {project.slug === "sleep-journal" && (
                  <>
                    <span>React UI</span>
                    <b>→</b>
                    <span>API</span>
                    <b>→</b>
                    <span>DynamoDB</span>
                    <b>→</b>
                    <span>AWS</span>
                  </>
                )}

                {project.slug === "f1-analysis" && (
                  <>
                    <span>Raw Data</span>
                    <b>→</b>
                    <span>Pandas</span>
                    <b>→</b>
                    <span>Analysis</span>
                    <b>→</b>
                    <span>Tableau</span>
                  </>
                )}
              </div>
            </Reveal>

            <div id="challenges">
              <ListSection title="Challenges" items={project.challenges} />
            </div>

            <div id="results">
              <ListSection title="Results" items={project.results} />
            </div>

            <Reveal as="section" className="caseSection" id="lessons">
              <h2>What I learned and would improve</h2>
              <p>{project.lessons}</p>
            </Reveal>
          </div>
        </div>

        <Reveal as="section" className="gallerySection" id="gallery">
          <div className="sectionHeading">
            <p className="sectionLabel">Gallery</p>
            <h2>Project Image Gallery</h2>
          </div>

          <div className={`galleryGrid galleryGrid--${project.galleryLayout}`}>
            {project.gallery.map((image, index) => (
              <Reveal
                key={image}
                delay={index * 100}
                className={`galleryReveal galleryItem galleryItem--${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${project.title} view ${index + 1}`}
                />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </article>
    </main>
  );
}