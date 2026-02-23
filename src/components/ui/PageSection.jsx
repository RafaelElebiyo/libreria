export function PageSection({ title, description, children }) {
  return (
    <section className="section-card">
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
      {children}
    </section>
  );
}
