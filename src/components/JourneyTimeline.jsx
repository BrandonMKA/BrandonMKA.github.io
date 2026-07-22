import Reveal from "./Reveal";

const milestones = [
  {
    year: "2022",
    title: "Started at CT State",
    description:
      "Began studying computer science and building a foundation in programming, mathematics, and problem-solving.",
  },
  {
    year: "2024",
    title: "Transferred to UConn",
    description:
      "Transferred to the University of Connecticut to complete my Computer Science and Engineering degree.",
  },
  {
    year: "2025",
    title: "Cigna NEXT 25",
    description:
      "Helped build a cloud-based wellness application using React, TypeScript, AWS, and DynamoDB.",
  },
  {
    year: "2025–2026",
    title: "TE Connectivity",
    description:
      "Managed a senior design team developing an AI-powered procurement document processing application.",
  },
  {
    year: "2026",
    title: "Nassau Financial Group",
    description:
      "Worked as an IT Data Analyst Intern using SQL, AWS, data mapping, and PowerShell automation.",
  },
  {
    year: "Today",
    title: "Building What’s Next",
    description:
      "Seeking full-time opportunities across software engineering, data, analytics, and business technology.",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="journeyTimeline">
      <div className="journeyLine" aria-hidden="true" />

      {milestones.map((milestone, index) => (
        <Reveal
          key={`${milestone.year}-${milestone.title}`}
          delay={index * 75}
          className="journeyReveal"
        >
          <article className="journeyMilestone">
            <span className="journeyYear">{milestone.year}</span>

            <span className="journeyDot" aria-hidden="true" />

            <div className="journeyContent">
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}