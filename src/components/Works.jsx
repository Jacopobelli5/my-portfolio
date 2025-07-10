import workSvg from '../assets/works.svg';
import '../css/Works.css';

// Array of works to be displayed in the works section
const works = [
  {
    title: 'Movie App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    link: 'https://jacoposmovieapp.vercel.app',
  },
  {
    title: 'Game Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    link: 'https://mygameproject-five.vercel.app/',
  },
  {
    title: 'Music Visualiser',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    link: 'https://my-music-visualiser.vercel.app/',
  },
];

export default function Works() {
  return (
    <section className="container py-5 my-5">
      <h2 className="fw-bold mb-4">Projects</h2>
      <div className="row g-4">
        {works.map((work, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-6 d-flex">
            <div className="card flex-fill shadow-sm">
              <div className="work-image">
                <img src={workSvg} alt="Work preview" />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold mb-2">{work.title}</h5>
                <p className="card-text mb-3">{work.description}</p>
                <button className='align-self-start'><a href={work.link} className='a-btn'>View Project</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 