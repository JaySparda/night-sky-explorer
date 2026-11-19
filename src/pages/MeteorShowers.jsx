import { useState } from "react";
import useFetch from "../hooks/useFetch";
import MeteorCard from "../components/MeteorCard";
import FilterChips from "../components/FilterChips";
import RequestState from "../components/RequestState";

const monthOptions = [
  { label: "All", value: "" },
  { label: "Jan", value: "January" },
  { label: "Feb", value: "February" },
  { label: "Mar", value: "March" },
  { label: "Apr", value: "April" },
  { label: "May", value: "May" },
  { label: "Jun", value: "June" },
  { label: "Jul", value: "July" },
  { label: "Aug", value: "August" },
  { label: "Sep", value: "September" },
  { label: "Oct", value: "October" },
  { label: "Nov", value: "November" },
  { label: "Dec", value: "December" },
];

const hemisphereOptions = [
  { label: "All", value: "" },
  { label: "Northern", value: "Northern" },
  { label: "Southern", value: "Southern" },
  { label: "Both", value: "Both" },
];

export default function MeteorShowers() {
  // Independent filter states
  const [month, setMonth] = useState("");
  const [hemisphere, setHemisphere] = useState("");

  // Backend handles both filters
  const { data, loading, error, retry } = useFetch("/meteor-showers", {
    month,
    hemisphere,
  });

  const items = data ?? [];

  function handleReset() {
    setMonth("");
    setHemisphere("");
  }

  return (
    <section className="page">
      <h1>Meteor Showers</h1>

      <p className="subtitle">Yearly showers, with and where to watch them.</p>

      {/* Two independent filter groups */}
      <div className="filter-panel">
        <FilterChips
          label="Filter by Month"
          options={monthOptions}
          value={month}
          onChange={setMonth}
        />

        <FilterChips
          label="Filter by Hemisphere"
          options={hemisphereOptions}
          value={hemisphere}
          onChange={setHemisphere}
        />
      </div>

      <RequestState
        loading={loading}
        error={error}
        items={items}
        retry={retry}
        onReset={handleReset}
        loadingMessage="Loading meteor showers..."
        emptyTitle="No meteor showers found"
        emptyMessage="Try a different month or hemisphere."
      >
        <p className="result-count">{items.length} meteor showers found</p>

        <div className="meteor-list">
          {items.map((item) => (
            <MeteorCard key={item.id} item={item} />
          ))}
        </div>
      </RequestState>
    </section>
  );
}
