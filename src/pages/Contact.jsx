import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaCode,
  FaUsers,
  FaCloud,
  FaBriefcase,
  FaChartBar,
} from "react-icons/fa";

import { MdEmail, MdLocationOn } from "react-icons/md";

import { contact } from "../data/siteData";
import Reveal from "../components/Reveal";

const opportunities = [
  {
    title: "Software Engineering",
    description:
      "Frontend, full-stack, and application development opportunities using React, JavaScript, TypeScript, Python, and modern cloud services.",
    icon: FaCode,
  },
  {
    title: "Data & Analytics",
    description:
      "Data analyst, reporting analyst, business analyst, and data engineering roles involving SQL, Python, Tableau, ETL, and reporting.",
    icon: FaChartBar,
  },
  {
    title: "Cloud & AWS",
    description:
      "Opportunities involving cloud-based applications, data pipelines, automation, APIs, and services across the AWS ecosystem.",
    icon: FaCloud,
  },
  {
    title: "Professional Connections",
    description:
      "Conversations with recruiters, engineers, analysts, hiring managers, and other professionals working across technology.",
    icon: FaUsers,
  },
];

const contactMethods = [
  {
    title: "Email",
    description:
      "Send me a message about an opportunity, project, question, or professional connection.",
    action: "Send an email",
    href: `mailto:${contact.email}`,
    icon: MdEmail,
    external: false,
  },
  {
    title: "LinkedIn",
    description:
      "Connect with me professionally and follow my experience, projects, and career development.",
    action: "View LinkedIn",
    href: contact.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    title: "GitHub",
    description:
      "Explore my source code, software projects, data work, and technical documentation.",
    action: "View GitHub",
    href: contact.github,
    icon: FaGithub,
    external: true,
  },
  {
    title: "Résumé",
    description:
      "Review my education, technical skills, professional experience, and selected projects.",
    action: "View résumé",
    href: contact.resume,
    icon: FaFileAlt,
    external: true,
  },
];

export default function Contact() {
  return (
    <main className="pageShell contactPage">
      <Reveal as="section" className="contactHero">
        <p className="eyebrow">Contact</p>

        <h1>Let&apos;s build something meaningful.</h1>

        <p className="contactHeroCopy">
          I&apos;m currently interested in software engineering, data,
          analytics, cloud, and business-focused technical opportunities. I
          welcome conversations with recruiters, hiring managers, engineers,
          analysts, and other professionals.
        </p>

        <div className="contactHeroActions">
          <a className="primaryButton" href={`mailto:${contact.email}`}>
            <MdEmail size={18} aria-hidden="true" />
            Email me
          </a>

          <a
            className="secondaryButton"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={18} aria-hidden="true" />
            Connect on LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal as="section" className="availabilitySection">
        <div className="availabilityIntro">
          <p className="sectionLabel">Availability</p>

          <h2>Open to the right opportunity.</h2>

          <p>
            I&apos;m interested in roles where I can contribute to practical
            software, data, cloud, reporting, and business technology
            solutions while continuing to grow as a technical professional.
          </p>
        </div>

        <div className="availabilityPanel">
          <div className="availabilityStatus">
            <span className="statusIndicator" aria-hidden="true" />

            <div>
              <span>Current status</span>
              <strong>Open to full-time opportunities</strong>
            </div>
          </div>

          <div className="availabilityDetails">
            <div>
              <FaBriefcase size={19} aria-hidden="true" />

              <div>
                <span>Work type</span>
                <strong>Full-time</strong>
              </div>
            </div>

            <div>
              <MdLocationOn size={19} aria-hidden="true" />

              <div>
                <span>Location</span>
                <strong>Connecticut · Hybrid · Remote</strong>
              </div>
            </div>

            <div>
              <FaUsers size={19} aria-hidden="true" />

              <div>
                <span>Also open to</span>
                <strong>Networking and conversations</strong>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="contactSection">
        <Reveal className="sectionHeading">
          <p className="sectionLabel"> I&apos;m looking for</p>
          <h2>Software engineering, data engineering,
             and analytics roles</h2>
        </Reveal>

        <div className="opportunityGrid">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;

            return (
              <Reveal
                as="article"
                className="opportunityCard"
                delay={index * 90}
                key={opportunity.title}
              >
                <div className="contactIcon" aria-hidden="true">
                  <Icon size={27} />
                </div>

                <h3>{opportunity.title}</h3>
                <p>{opportunity.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="contactSection contactMethodsSection">
        <Reveal className="sectionHeading">
          <p className="sectionLabel">Connect</p>
          <h2>Choose the easiest way to reach me.</h2>
        </Reveal>

        <div className="contactGrid">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <Reveal
                as="article"
                className="contactCard"
                delay={index * 90}
                key={method.title}
              >
                <div className="contactIcon" aria-hidden="true">
                  <Icon size={27} />
                </div>

                <h3>{method.title}</h3>
                <p>{method.description}</p>

                <a
                  className="contactCardLink"
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                >
                  {method.action}
                  <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Reveal as="section" className="contactClosing">
        <div>
          <p className="sectionLabel">Start a conversation</p>

          <h2>Have an opportunity or project in mind?</h2>

          <p>
            Send me an email with a little context, and I&apos;ll get back to
            you as soon as I can.
          </p>
        </div>

        <a className="primaryButton" href={`mailto:${contact.email}`}>
          <MdEmail size={18} aria-hidden="true" />
          {contact.email}
        </a>
      </Reveal>
    </main>
  );
}