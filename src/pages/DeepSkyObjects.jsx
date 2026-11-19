import { useState } from "react";
import useFetch from "../hooks/useFetch";
import DeepSkyCard from "../components/DeepSkyCard";
import SearchBar from "../components/Searchbar";
import FilterSelect from "../components/FilterSelect";
import RequestState from "../components/RequestState";

const typeOptions = [
  { label: "All", value: "" },
  { label: "Galaxy", value: "Galaxy" },
  { label: "Nebula", value: "Nebula" },
  { label: "Cluster", value: "Cluster" },
];

export default function DeepSkyObjects() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const { data, loading, error, retry } = useFetch("/deep-sky-objects", {
    search,
    type,
  });

  const items = data ?? [];

  function resetFilters() {
    setSearch("");
    setType("");
  }

  function handleReset() {
    setSearch("");
    setType("");
  }

  return (
    <section className="page">
      <h1>Deep-Sky Objects</h1>

      <p className="subtitle">
        Galaxies, nebulae and star clusters beyond our solar system.
      </p>

      <div className="controls">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by name or constellation..."
        />{" "}
        {/* This searchbar is one of the component that filter out the other if the value inside is not related */}
        <FilterSelect
          value={type}
          onChange={setType}
          options={typeOptions}
          label="Filter by object type"
        />
      </div>

      <RequestState
        loading={loading}
        error={error}
        items={items}
        retry={retry}
        onReset={handleReset}
        loadingMessage="Loading deep-sky objects..."
        emptyTitle="No deep-sky objects found"
        emptyMessage="Try another name, constellation or type."
      >
        <p className="result-count">{items.length} objects found</p>

        <div className="card-grid">
          {items.map((item) => (
            <DeepSkyCard key={item.id} item={item} />
          ))}
        </div>
      </RequestState>
    </section>
  );
}
