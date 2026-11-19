export default function ErrorMessage({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="request-state error-state" role="alert">
      <div className="state-icon" aria-hidden="true">
        !
      </div>

      <h3>Unable to retrieve data</h3>

      <p>{message}</p>

      {onRetry && (
        <button type="button" className="retry-button" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
