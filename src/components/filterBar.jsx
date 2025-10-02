const FilterBar = ({ filters, setFilters }) => {
  return (
    <div className="flex gap-4 mb-6 bg-[#27277d]">
      <select
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        className="border p-2 rounded  bg-[#27277d]"
      >
        <option value="all">All Types</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="border p-2 rounded bg-[#27277d]"
      >
        <option value="all">All Status</option>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
        <option value="stolen">Stolen</option>
      </select>

      <input
        type="text"
        placeholder="Şehir"
        className="border p-2 rounded bg-[#27277d]"
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
      />
    </div>
  );
};

export default FilterBar;
