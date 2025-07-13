import '../css/Banner.css';


export default function Banner() {
  return (
    <>
      <section className="container d-flex flex-column align-items-start justify-content-center py-5 min-vh-75 banner-section">
        <h1 className="fw-bold  mb-3 main-title">Jacopo Belli</h1>
        <h2 className="heading-two mb-4">Front End Engineer</h2>
        <p className="lead mb-0 banner-text">
        I build front ends that feel simple, load fast, and stay out of the way.
        </p>
      </section>
      <div className="banner-social-icons">
        <a href="https://www.linkedin.com/in/jacopo-belli" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/jacopobelli5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href="/Jacopo%20Belli%20Resume%202025.pdf" download="Jacopo Belli Resume 2025.pdf" aria-label="CV">
          <i className="bi bi-download"></i>
        </a>
      </div>
    </>
  );
} 