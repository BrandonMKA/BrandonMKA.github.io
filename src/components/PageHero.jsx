export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="pageHero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <div className="pageHeroCopy">{children}</div>}
    </section>
  );
}
