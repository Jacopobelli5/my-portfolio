import '../css/Banner.css';

// You may need to install bootstrap-icons: npm install bootstrap-icons

export default function Banner() {
  return (
    <>
      <section className="container d-flex flex-column align-items-center justify-content-center min-vh-75" style={{ minHeight: '75vh' }}>
        <h1 className="display-3 fw-bold text-center mb-3">Jacopo Belli</h1>
        <h2 className="h3 text-center mb-4">Front End Engineer</h2>
        <p className="lead text-center mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </section>
      <div className="banner-social-icons">
        <a href="https://www.linkedin.com/in/jacopo-belli" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/jacopobelli5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://instagram.com/ja_shepha" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </>
  );
} 