import workSvg from '../assets/works.svg';
import '../css/Works.css';

// Array of works to be displayed in the works section
const works = [
  {
    title: 'Movie App',
    description: 'A React app that fetches and displays popular movies using the TMDB API. Users can search for movies and save their favorites locally. Tech Stack: React (Hooks), React Router, JavaScript, CSS.',
    link: 'https://jacoposmovieapp.vercel.app',
  },
  {
    title: 'Game Project',
    description: 'A simple game project I built to practice using p5.js. It is a platform-style game designed to experiment with basic game mechanics, asset handling, and interactivity in JavaScript.',
    link: 'https://mygameproject-five.vercel.app/',
  },
  {
    title: 'Music Visualiser',
    description: 'A real-time audio visualiser that listens to a loaded track or your microphone, runs a fast Fourier transform on the sound, and renders a variety of dynamic patterns—waveforms, spectrum bars, concentric circles that pulse in sync with the music.',
    link: 'https://my-music-visualiser.vercel.app/',
  },
];

export default function Works() {
  return (
    <section className="section-container container py-5 my-5">
      <h2 className="section-title fw-bold mb-4">Projects</h2>
      <div className="row g-4">
        {works.map((work, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-6 d-flex">
            <div className="card flex-fill shadow-sm">
              <div className="work-image">
                <img src={workSvg} alt="Work preview" />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold card-text mb-2">{work.title}</h5>
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