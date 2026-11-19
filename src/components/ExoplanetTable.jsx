export default function ExoplanetTable({ items }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Host Star</th>
            <th>Distance (ly)</th>
            <th>Planet Type</th>
            <th>Discovery Year</th>
          </tr>
        </thead>

        <tbody>
          {items.map((planet) => (
            <tr key={planet.id}>
              <td>{planet.name}</td>
              <td>{planet.hostStar}</td>
              <td>{planet.distance}</td>
              <td>{planet.planetType}</td>
              <td>{planet.discoveryYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
