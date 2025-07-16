import "../css/Experience.css";
import "../css/index.css";

const experiences = [
  {
    role: "Front End Engineer",
    company: "InvestCloud Inc",
    location: "London",
    period: "2022 - Present",
    description:
      "I build and maintain user-facing features for InvestCloud’s digital wealth-management portals. My work includes creating reusable UI components, improving accessibility and usability, and collaborating with design, product, and operations teams to launch reliable, polished interfaces. I also mentor junior developers and help establish best practices across the front-end team.",
  },
  {
    role: "Web Developer",
    company: "Freelance",
    location: "London",
    period: "2021 - 2023",
    description:
      "I collaborated with clients on Fiverr to design and develop over ten single-page marketing sites, ensuring each matched their brand and audience. I implemented responsive, accessible interfaces and managed end-to-end deployment, including Heroku hosting, DNS, SSL, and CI/CD pipelines. Additionally, I provided ongoing support and guidance to clients, helping them maintain and update their sites post-launch.",
  },
];

export default function Experience() {
  return (
    <>
      <section className="section-container scontainer py-5 my-5">
        <h2 className="fw-bold mb-4 section-title">About Me</h2>
        <p className="mb-3">
          Hi! I’m Jacopo, a Front‑End Developer based in London, currently
          working in fintech where I design and implement modular,
          high‑performance digital wealth‑management portals for major financial
          institutions. I turn product specs into reusable, accessible code and
          ensure every feature works flawlessly. Always passionate about IT, I
          first experimented with coding in high school but officially began my
          developer journey with an intensive web‑development bootcamp.
          Realizing that I needed —and wanted— a stronger foundation in computer
          science —something the bootcamp didn’t provide— I enrolled in the BSc
          Computer Science at the University of London and, upon completing my
          first year, I earned a Level 4 Certificate of Higher Education. With a
          front‑end focus, I pay particular attention to UI and UX. My design
          approach is simple: sleek, elegant web apps that feel effortless to
          use. I avoid cluttered, over‑the‑top interfaces and instead aim for
          balanced color palettes, thoughtful typography, and subtle
          interactions that work together without distraction.
        </p>
        <p className="mb-5">
          Outside of Worked, you’ll often find me out on the road – running
          neighbourhood loops or cycling through the fields just outside South
          London to clear my head. Music has been a constant companion—as
          teenagers, a friend and I kicked off our production journey, won a
          contest that earned us a signing with CR2 Records, and went on to
          release several tracks with up‑and‑coming EDM labels. More recently,
          I built a real-time music visualiser to explore how sound frequencies
          translate into visual patterns—an exciting project that combined my
          coding skills with my love for music. I still pick up my guitar
          regularly experimenting with melodies and riffs, and I’m always on the
          lookout for new ways to blend creativity and technology in side
          projects.
        </p>
      </section>
      <section className="section-container scontainer py-5 my-5">
        <h2 className="section-title fw-bold mb-4">Where I've Worked</h2>
        <ul className="list-unstyled">
          {experiences.map((exp, i) => (
            <li key={i} className="mb-4 p-4 rounded experience-item">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-1">
                <span className="fw-bold small-title">{exp.role}</span>
                <span className="small">{exp.period}</span>
              </div>
              <div className="small mb-1">
                {exp.company}, {exp.location}
              </div>
              <p className="mb-0">{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
