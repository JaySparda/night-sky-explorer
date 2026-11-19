export default function Loading({ message = "Loading data..." }) {
  return (
    <div
      className="request-state loading-state"
      role="status"
      aria-live="polite"
    >
      <div className="spinner" aria-hidden="true" />

      <h3>{message}</h3>

      <p>Please wait while we retrieve the data.</p>
    </div>
  );
}
