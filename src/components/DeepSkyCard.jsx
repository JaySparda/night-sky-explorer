export default function DeepSkyCard({ item }) {
  return (
    <article className="card sky-card">
      <div className={`card-header ${item.type}`}>
        <span>{item.type}</span>
        <span>{item.catalogue}</span>
      </div>

      <div className="card-body">
        <h2>{item.name}</h2>

        <p>Constellation: {item.constellation}</p>

        <p>Magnitude: {item.magnitude}</p>
      </div>
    </article>
  );
}
