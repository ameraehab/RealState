import "./search.css";
function Search() {
  return (
    <div className="search-box">
      <div className="type">
        <button>buy</button>
        <button>rent</button>
      </div>
      <form>
        <input type="text" name="location" placeholder="city Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price "
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price "
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </form>
    </div>
  );
}

export default Search;
