import '../css/Experience.css';

const experiences = [
  {
    role: "Front End Engineer",
    company: "InvestCloud Inc",
    location: "London",
    period: "2022 - Present",
    description: "Description of the role to be completed"
  },
  {
    role: "Web Developer",
    company: "Freelance",
    location: "London",
    period: "2021 - 2023",
    description: ""
  },
];

export default function Experience() {
  return (
    <section className="container py-5 my-5">
      <h2 className="fw-bold mb-4">About Me</h2>
      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. Sed cursus, enim nec dictum dictum, sapien erat cursus enim, nec dictum sapien erat nec enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc eu nunc. Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. Nullam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. Sed cursus, enim nec dictum dictum, sapien erat cursus enim, nec dictum sapien erat nec enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc eu nunc. Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.</p>
      <h2 className="fw-bold mb-4">Experience</h2>
      <ul className="list-unstyled">
        {experiences.map((exp, i) => (
          <li key={i} className="mb-4 p-4 rounded experience-item">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-1">
              <span className="fw-bold small-title">{exp.role}</span>
              <span className="small">{exp.period}</span>
            </div>
            <div className="small mb-1">{exp.company}, {exp.location}</div>
            <p className="mb-0">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
} 