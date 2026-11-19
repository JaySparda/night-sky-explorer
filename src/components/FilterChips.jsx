export default function FilterChips({ label, options, value, onChange }) {
  return (
    <div className="filter-group">
      <h3 className="filter-label">{label}</h3>

      <div className="chip-row" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`chip ${value === option.value ? "active" : ""}`}
            aria-pressed={value === option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
