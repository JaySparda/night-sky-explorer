export default function MeteorDash({ item }) {
  return (
    <article className="meteor-card">
      <div className="meteor-rate">
        <strong>{item.peakRate}</strong>
        <small>Peak rate</small>
      </div>

      <div className="meteor-info">
        <h2>{item.name}</h2>

        <p>Parent body: {item.parentBody}</p>

        <div className="meteor-tags">
          <span>{item.month}</span>
          <span>{item.hemisphere}</span>
        </div>
      </div>
    </article>
  );
}
