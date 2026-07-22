import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { contact, experience, projects, skills } from "../data/siteData";
import Reveal from "../components/Reveal";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="pageShell">
      <Reveal as="section" className="hero">
        <div className="heroContent">
          <p className="eyebrow">Computer Science & Engineering Graduate</p>

          <h1>
            I build software, <span>data, and cloud solutions.</span>
          </h1>

          <p className="heroText">
            I&apos;m Brandon, a Computer Science and Engineering graduate who
            enjoys building practical applications, improving workflows, and
            turning data into useful tools.
          </p>

          <div className="buttonRow">
            <Link className="primaryButton" to="/projects">
              View projects
            </Link>

            <a
              className="secondaryButton"
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download résumé
            </a>
          </div>
        </div>

        <div className="portraitFrame">
          <img
            src="/images/headshot.png"
            alt="Brandon Aulac"
            className="portrait"
          />
          <div className="portraitNote">
            <span>Currently</span>
            <strong>Exploring software, data, and business roles</strong>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="statusGrid" aria-label="Current information">
        <div>
          <span>Based in</span>
          <strong>Connecticut</strong>
        </div>
        <div>
          <span>Interested in</span>
          <strong>Software, data & analytics</strong>
        </div>
        <div>
          <span>Working with</span>
          <strong>AWS, SQL, Python & React</strong>
        </div>
        <div>
          <span>Outside work</span>
          <strong>Volleyball, Reading, and Volunteering</strong>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="sectionHeading">
          <p className="sectionLabel">About</p>
          <h2>I enjoy solving problems where technology and data meet.</h2>
        </div>

        <div className="aboutGrid">
          <div className="prose">
            <p>
              Whether I&apos;m automating a repetitive workflow, building a
              React application, supporting a cloud data process, or analyzing
              a dataset, I like creating solutions that are practical and easy
              to understand.
            </p>
            <p>
              I&apos;m especially interested in opportunities that combine
              technical work with real business needs, collaboration, and
              measurable improvement.
            </p>
          </div>

          <aside className="statementCard">
            <span>Recent achievement</span>
            <strong>
              Improved an enterprise PowerShell workflow by 40%.
            </strong>
          </aside>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="sectionHeading">
          <p className="sectionLabel">Experience</p>
          <h2>Work that shaped how I approach technology.</h2>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal
              key={`${item.company}-${item.role}`}
              delay={index * 120}
            >
              <article className="timelineItem" key={`${item.company}-${item.role}`}>
                <div className="timelineYear">{item.year}</div>

                <div className="timelineContent">
                  <div className="experienceTop">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                    </div>
                    <p className="date">{item.dates}</p>
                  </div>

                  <p className="experienceSummary">{item.summary}</p>

                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="achievement">
                    <span>Achievement</span>
                    <strong>{item.achievement}</strong>
                  </div>

                  <div className="tagList">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="splitHeading">
          <div className="sectionHeading">
            <p className="sectionLabel">Featured projects</p>
            <h2>Projects built around real problems.</h2>
          </div>

          <Link className="textLink" to="/projects">
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="featuredProjects">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 100}
              className="projectReveal"
            >
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="sectionHeading">
          <p className="sectionLabel">Outside of work</p>
          <h2>A little more about the person behind the projects.</h2>
        </div>

        <div className="interestGrid">
          {[
            ["Formula 1", "Strategy, engineering, data, and race weekends."],
            ["Fitness", "Consistency, progress, and time to reset."],
            ["Investing", "Long-term planning and personal finance."],
            ["Travel", "New places, experiences, and perspectives."],
          ].map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="sectionHeading">
          <p className="sectionLabel">Capabilities</p>
          <h2>Tools I use to build, analyze, and improve.</h2>
        </div>

        <div className="skillGrid">
          {skills.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div className="tagList">
                {group.values.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="contactBanner">
        <p className="sectionLabel">Get in touch</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          I&apos;m currently exploring software, data, analytics, and
          business-focused technology opportunities.
        </p>

        <div className="buttonRow">
          <a className="primaryButton" href={`mailto:${contact.email}`}>
            Send me an email
          </a>
          <Link className="secondaryButton" to="/contact">
            Contact details
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
