import workSvg from '../assets/works.svg';
import '../css/Works.css';

// Array of works to be displayed in the works section
const works = [
  {
    title: 'Movie App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    link: '#',
  },
  {
    title: 'Game Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    link: '#',
  },
  {
    title: 'Work 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    link: '#',
  },
];

export default function Works() {
  return (
    <section className="container py-5 my-5">
      <h2 className="h2 fw-bold mb-4">Projects</h2>
      <div className="row g-4">
        {works.map((work, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card flex-fill shadow-sm">
              <div className="work-image">
                <img src={workSvg} alt="Work preview" />
              </div>
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h5 fw-bold mb-2">{work.title}</h3>
                <p className="card-text mb-3">{work.description}</p>
                <a href={work.link} className="mt-auto btn btn-outline-light btn-sm align-self-start" style={{ color: 'var(--accent-blue)', borderColor: 'var(--accent-blue)' }}>View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 