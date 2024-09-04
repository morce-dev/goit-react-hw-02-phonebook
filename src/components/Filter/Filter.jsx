export const Filter = ({ filter, setFilter }) => {
  //filter name based on the the search keyword
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <p>Find Contacts by Name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
