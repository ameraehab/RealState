function Filter() {
  return (
    <div className="filter">
      <h2>
        Search Results For <span>London</span>{" "}
      </h2>
      <div className="location">
        <h6>Location</h6>
        <input
          type="text"
          value={""}
          id="city"
          name="city"
          placeholder="City Location"
        />
      </div>
      <div className="filterTypes">
        <div>
          <h6>Type</h6>
          <input />
        </div>
        <div>
          <h6>Type</h6>
          <input />
        </div>
        <div>
          <h6>Type</h6>
          <input />
        </div>
        <div>
          <h6>Type</h6>
          <input />
        </div>
        <div>
          <h6>Type</h6>
          <input />
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default Filter;
