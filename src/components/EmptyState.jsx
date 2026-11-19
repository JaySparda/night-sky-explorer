export default function EmptyState({
  title = "No results found",
  message = "Try changing your search or filters.",
  onReset,
}) {
  return (
    <div className="request-state empty-state">
      <div className="state-icon" aria-hidden="true">
        ?
      </div>

      <h3>{title}</h3>

      <p>{message}</p>

      {onReset && (
        <button type="button" className="reset-button" onClick={onReset}>
          Clear filters
        </button>
      )}
    </div>
  );
}
