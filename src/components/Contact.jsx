import '../css/Contact.css';

export default function Contact() {
  return (
    <section className="container py-5 my-5 text-center">
      <h2 className="h2 fw-bold mb-4">Contact</h2>
      <p className="lead mb-2">
        Want to work together or have a question? <br />
        <a href="mailto:jacopo@example.com" className="text-decoration-underline" style={{ color: 'var(--accent-blue)' }}>jacopo@example.com</a>
      </p>
    </section>
  );
} 