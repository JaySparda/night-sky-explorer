import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ExoplanetTable from "../components/ExoplanetTable";
import RequestState from "../components/RequestState";

const sortOptions = [
  { label: "None", value: "" },
  { label: "Name", value: "name" },
  { label: "Distance", value: "distance" },
];

const limitOptions = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "15", value: 15 },
];

export default function Exoplanets() {
  // Sorting and pagination state
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  // Fetch data from backend
  const { data, loading, error, retry } = useFetch("/exoplanets", {
    sort,
    page,
    limit,
  });

  // Extract records and pagination metadata
  const items = data?.data ?? [];
  const total = data?.total ?? 0;
  const totalPages = data?.totalPages ?? 0;

  // Calculate displayed record range
  const start = items.length > 0 ? (page - 1) * limit + 1 : 0;

  const end = items.length > 0 ? start + items.length - 1 : 0;

  // Reset page when sorting changes
  function handleSortChange(value) {
    setSort(value);
    setPage(1);
  }

  // Reset page when page size changes
  function handleLimitChange(value) {
    setLimit(value);
    setPage(1);
  }

  function handleReset() {
    setSort("");
    setPage(1);
    setLimit(5);
  }

  return (
    <section className="page">
      <h1>Exoplanets</h1>

      <p className="subtitle">Planets that orbit stars other than out Sun.</p>

      <RequestState
        loading={loading}
        error={error}
        items={items}
        retry={retry}
        onReset={handleReset}
        loadingMessage="Loading exoplanets..."
        emptyTitle="No exoplanets found"
        emptyMessage="Try resetting the current options."
      >
        <p className="result-count">
          Showing {start}–{end} of {total} exoplanets
        </p>

        <ExoplanetTable items={items} />
      </RequestState>
    </section>
  );
}
