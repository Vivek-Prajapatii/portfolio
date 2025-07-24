export default function ProjectCard({ title, description, link }) {
  return (
    <div className="card" style={{ margin: "1.5rem 0" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        View Code
      </a>
    </div>
  );
}
