export const contact = {
  email: "baulac04@gmail.com",
  github: "https://github.com/BrandonMKA",
  linkedin: "https://www.linkedin.com/in/brandon-aulac",
  resume: "/Resume_Brandon_Aulac.pdf",
};

export const experience = [
  {
    year: "2026",
    role: "IT Data Analyst Intern",
    company: "Nassau Financial Group",
    dates: "June 2026 – August 2026",
    summary:
      "Supported enterprise data workflows, reporting systems, and automation in a financial-services environment.",
    highlights: [
      "Improved a PowerShell automation process by 40%, reducing manual effort and processing time.",
      "Supported AWS workflows using Lambda, Glue, API Gateway, S3, DynamoDB, and CloudWatch.",
      "Created SQL queries, data mappings, and ETL validation checks to support reporting accuracy.",
      "Worked with analysts and developers to troubleshoot data issues and support testing.",
    ],
    skills: ["SQL", "AWS", "PowerShell", "ETL", "Data Mapping"],
    achievement: "Improved an enterprise PowerShell workflow by 40%.",
  },
  {
    year: "2025",
    role: "IT Support Intern",
    company: "Connecticut State Community College",
    dates: "June 2025 – August 2025",
    summary:
      "Provided technical support for students, faculty, and staff across hardware, software, and network issues.",
    highlights: [
      "Installed and deployed desktops, laptops, printers, and peripherals.",
      "Troubleshot Windows, software, and network-connectivity issues.",
      "Assisted users with account access, device setup, and support requests.",
      "Translated technical problems into clear, practical explanations.",
    ],
    skills: ["Windows", "Hardware Support", "Networking", "User Support"],
    achievement: "Strengthened technical communication through direct user support.",
  },
  {
    year: "2025",
    role: "NEXT 25 Summer Program Participant",
    company: "The Cigna Group",
    dates: "June 2025 – July 2025",
    summary:
      "Worked with a cross-functional team to build a cloud-based wellness application focused on healthy sleep habits.",
    highlights: [
      "Designed and developed a Dream Journal feature using React and TypeScript.",
      "Implemented written and audio journal functionality backed by DynamoDB.",
      "Worked in an Agile environment through planning and iterative development.",
      "Contributed to a three-tier application deployed with AWS services.",
    ],
    skills: ["React", "TypeScript", "AWS", "DynamoDB", "Agile", "Git"],
    achievement: "Built written and audio journaling for a cloud wellness app.",
  },
];

export const projects = [
  {
    slug: "ai-procurement",
    featured: true,
    category: "Software",
    type: "Desktop Application",
    title: " Enterprise Procurement Automation Platform",
    client: "Senior Design Project for TE Connectivity",

    shortDescription:
      "A desktop application that extracts structured procurement data from PDFs using OCR, Python, and AI-assisted processing while providing a human-review workflow before export.",

    overview:
      "Our team partnered with TE Connectivity to reduce the time required to process procurement documents. We developed a desktop application that automatically extracts structured information from purchase orders while allowing reviewers to verify, correct, and export the results before they enter downstream systems.",

    problem:
      "Procurement documents varied significantly in quality and structure, ranging from clean digital PDFs to scanned documents with inconsistent layouts, tables, currencies, and line-item formats. Traditional rule-based parsing alone could not reliably extract information across every document type.",

    role: [
      "Managed a three-person senior design team and coordinated project milestones.",
      "Developed portions of the document extraction and processing pipeline.",
      "Designed features for the desktop reviewer interface and validation workflow.",
      "Helped package, test, document, and deliver the application to the project sponsor.",
    ],

    approach: [
      "Built a hybrid extraction pipeline using PyMuPDF for digital PDFs and OCR as a fallback for scanned documents.",
      "Applied document heuristics and structured validation to improve extraction accuracy across varying layouts.",
      "Developed a React and Electron review interface that allowed users to verify and edit extracted information before export.",
      "Stored processed data in Supabase while supporting structured JSON and CSV exports.",
    ],

    challenges: [
      "Supporting both scanned and digitally generated procurement documents.",
      "Extracting tables and line items from inconsistent layouts.",
      "Balancing automated extraction with a reliable human-review process.",
      "Packaging the application for deployment on another Windows computer.",
    ],

    results: [
      "Delivered a fully functional desktop application for sponsor evaluation.",
      "Automated extraction of structured procurement information from multiple document formats.",
      "Implemented a human-in-the-loop validation workflow to improve data accuracy before export.",
      "Provided documentation covering database setup, deployment, and desktop application builds.",
    ],

    lessons:
      "This project reinforced the importance of balancing automation with human review when working with AI-assisted workflows. Given more time, I would migrate the backend to AWS, introduce containerized services, expand automated testing, and further separate extraction, validation, and storage into independent services.",

    technologies: [
      "Python",
      "React",
      "Electron",
      "FastAPI",
      "Supabase",
      "OCR",
      "PyMuPDF",
    ],

    github:
      "https://github.com/BrandonMKA/Enterprise-Procurement-Automation-Platform",

    image: "/images/Enterprise-Procurement/QuoteReview_Home.png",
    imageClass: "te",

    galleryLayout: "default",
    gallery: [
      "/images/Enterprise-Procurement/QuoteReview_Main.png",
      "/images/Enterprise-Procurement/Email.png",
    ],
  },

  {
    slug: "sleep-journal",
    featured: true,
    category: "Cloud",
    type: "Cloud Application",
    title: "Sleep Journal Web Application",
    client: "NEXT 25 Summer Program at The Cigna Group",

    shortDescription:
      "A written and audio dream-journal experience developed for a cloud-based wellness application using React, TypeScript, and AWS.",

    overview:
      "As part of Cigna's NEXT 25 summer program, our team developed a wellness application designed to encourage healthier sleep habits. My primary responsibility was building the Dream Journal feature, allowing users to create written and voice-recorded journal entries that could be organized and revisited through an interactive calendar.",

    problem:
      "The application needed an intuitive way for users to record sleep reflections in multiple formats while keeping entries organized, accessible, and synchronized across the interface.",

    role: [
      "Developed the Dream Journal feature using React and TypeScript.",
      "Implemented written journal entries organized by calendar date.",
      "Added browser-based voice recording using the MediaRecorder API.",
      "Integrated journal data with DynamoDB within the team's AWS architecture.",
    ],

    approach: [
      "Designed a calendar-based interface that allowed users to browse journal entries by date.",
      "Stored written entries and audio metadata in DynamoDB.",
      "Updated the interface immediately after users created or replaced journal entries.",
      "Integrated the feature into the team's existing three-tier cloud architecture.",
    ],

    challenges: [
      "Managing browser-based audio recording and playback.",
      "Keeping written and audio journal entries synchronized by date.",
      "Clearly communicating entry status within the calendar interface.",
      "Integrating an independent feature into a larger collaborative application.",
    ],

    results: [
      "Delivered written and audio journaling functionality for the wellness platform.",
      "Created a calendar-based experience for organizing and revisiting previous entries.",
      "Successfully integrated the feature into the team's AWS-backed application.",
      "Presented the completed application to Cigna leadership during the final program showcase.",
    ],

    lessons:
      "This project strengthened my experience building cloud-connected user interfaces while working within an Agile team. Future improvements would include stronger accessibility support, automated component testing, improved audio storage management, and more polished loading and empty states.",

    technologies: [
      "React",
      "TypeScript",
      "AWS",
      "DynamoDB",
      "MediaRecorder",
    ],

    github: "https://github.com/BrandonMKA/Countdown",

    image: "/images//Sleep-Journal/sleep-journal-logo.png",
    imageClass: "sleep",

    galleryLayout: "sleep",
    gallery: [
      "/images/Sleep-Journal/sleep-journal.png",
      "/images/Sleep-Journal/audio-journal.png",
    ],
  },

  {
    slug: "f1-analysis",
    featured: true,
    category: "Data",
    type: "Analytics Project",
    title: "Formula 1 Pit Stop Analysis",
    client: "Independent Data Visualization Project",

    shortDescription:
      "An interactive Tableau dashboard analyzing Formula 1 pit-stop speed, consistency, and performance trends from 2011 to 2024.",

    overview:
      "This project transformed raw Formula 1 pit-stop data into an interactive Tableau dashboard that highlights trends in performance across teams and seasons. The goal was to make complex race data easier to explore through clear visualizations and interactive filtering.",

    problem:
      "Raw motorsport datasets contain thousands of records that are difficult to interpret without cleaning, aggregation, and effective visualization. The challenge was presenting meaningful insights while allowing users to explore the data interactively.",

    role: [
      "Collected, cleaned, and transformed Formula 1 pit-stop data using Python.",
      "Explored constructor and driver performance through exploratory data analysis.",
      "Designed and built an interactive Tableau dashboard.",
      "Documented the project and analytical findings for GitHub.",
    ],

    approach: [
      "Used Python and Pandas to clean and prepare the dataset for visualization.",
      "Compared average pit-stop times, statistical distributions, outliers, and seasonal trends.",
      "Developed dashboard filters for constructors, drivers, and race seasons.",
      "Designed visualizations that emphasized both speed and consistency across teams.",
    ],

    challenges: [
      "Accounting for unusually long pit stops and statistical outliers.",
      "Comparing team performance fairly across multiple seasons.",
      "Selecting visualizations that clearly communicated analytical insights.",
      "Balancing dashboard flexibility with visual simplicity.",
    ],

    results: [
      "Built an interactive Tableau dashboard featuring multiple analytical views.",
      "Highlighted long-term improvements in Formula 1 pit-stop performance.",
      "Compared constructor consistency using distributions and outlier analysis.",
      "Created a reusable Python data preparation workflow for future analyses.",
    ],

    lessons:
      "This project demonstrated the importance of combining data cleaning, exploratory analysis, and thoughtful visualization to communicate insights effectively. Future improvements could include automated data refreshes, statistical significance testing, race-context variables, and a publicly hosted interactive dashboard.",

    technologies: [
      "Python",
      "Pandas",
      "Tableau",
      "Data Analysis",
    ],

    github: "https://github.com/BrandonMKA/F1-Pitstop-Analysis",

    image: "/images/f1-dashboard/dashboard_preview.png",
    imageClass: "f1",

    galleryLayout: "f1",
    gallery: [
      "/images/f1-dashboard/FastestPitStop.png",
      "/images/f1-dashboard/PitlaneOverSeasons.png",
      "/images/f1-dashboard/AvgConstructor.png",
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    values: ["Python", "SQL", "JavaScript", "TypeScript", "R"],
  },
  {
    title: "Frontend & APIs",
    values: ["React", "HTML", "CSS", "FastAPI", "REST APIs", "Electron"],
  },
  {
    title: "Cloud & Data",
    values: [
      "AWS Lambda",
      "AWS Glue",
      "Amazon S3",
      "DynamoDB",
      "CloudWatch",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    title: "Analytics & Tools",
    values: [
      "Pandas",
      "NumPy",
      "Tableau",
      "Excel",
      "Git",
      "GitHub Actions",
      "Jira",
      "PowerShell",
    ],
  },
];
