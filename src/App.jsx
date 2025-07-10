import Banner from './components/Banner';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import './css/index.css';

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Left static banner/sidebar */}
        <aside
          className="col-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-start px-4 px-md-3 banner-sidebar"
        >
          <Banner />
        </aside>
        {/* Right scrollable content */}
        <main
          className="col-12 col-md-8 col-lg-6 offset-md-4 offset-lg-5 px-4 py-5"
          style={{ minHeight: '100vh' }}
        >
          <Experience />
          <Works />
          <Contact />
        </main>
      </div>
    </div>
  );
}
