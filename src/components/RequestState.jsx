import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import EmptyState from "./EmptyState";

export default function RequestState({
  loading,
  error,
  items = [],
  retry,
  onReset,
  loadingMessage = "Loading data...",
  emptyTitle = "No results found",
  emptyMessage = "Try changing your search or filters.",
  children,
}) {
  if (loading) {
    return <Loading message={loadingMessage} />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={retry} />;
  }

  if (items.length === 0) {
    return (
      <EmptyState title={emptyTitle} message={emptyMessage} onReset={onReset} />
    );
  }

  return <>{children}</>;
}
