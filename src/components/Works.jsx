import moviesapp from '../assets/moviesapp.png';
import gameproject from '../assets/gameproject.png';
import musicvis from '../assets/musicvis.png';
import '../css/Works.css';

// Array of works to be displayed in the works section
const works = [
  {
    title: 'Movie App',
    description: 'A sleek React app that fetches and displays trending and popular movies from the TMDB API, lets users search titles in real time, and bookmark their favorites for quick access.',
    link: 'https://jacoposmovieapp.vercel.app',
    image: moviesapp
  },
  {
    title: 'Game Project',
    description: 'A simple game project I built to practice using p5.js. It is a platform-style game designed to experiment with basic game mechanics, asset handling, and interactivity in JavaScript.',
    link: 'https://mygameproject-five.vercel.app/',
    image: gameproject
  },
  {
    title: 'Music Visualiser',
    description: 'A real-time audio visualiser that listens to a loaded track or your microphone, runs a fast Fourier transform on the sound, and renders a variety of dynamic patterns—waveforms, spectrum bars, concentric circles that pulse in sync with the music.',
    link: 'https://my-music-visualiser.vercel.app/',
    image: musicvis
  },
];

export default function Works() {
  return (
    <section className="section-container container py-5 my-5">
      <h2 className="section-title fw-bold mb-4">Things I Built</h2>
      <div className="row g-4">
        {works.map((work, i) => (
          <div key={i} className="col-12 col-md-12 col-lg-6 d-flex">
            <div className="card flex-fill shadow-sm">
              <div className="work-image">
                <img src={work.image} alt="Work preview" />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold card-text mb-2">{work.title}</h5>
                <p className="card-text mb-3">{work.description}</p>
                <button className='align-self-start works-link'><a href={work.link} className='a-btn'>View Project</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 