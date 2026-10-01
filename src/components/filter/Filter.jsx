import "./filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Filter() {
  return (
    <div className="filter">
      <h3>
        Search Results For <span>London</span>{" "}
      </h3>
      <div className="location">
        <label htmlFor="city">Location</label>
        <input
          className="loc-place"
          type="text"
          value={""}
          id="city"
          name="city"
          placeholder="City Location"
        />
      </div>
      <div className="filterTypes">
        <div>
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div>
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div>
          <label htmlFor="min-price">Min Price</label>
          <input
            type="number"
            value={""}
            id="min-price"
            name="min-price"
            placeholder="any"
          />
        </div>
        <div>
          <label htmlFor="max-price">Max Price</label>
          <input
            type="number"
            value={""}
            id="max-price"
            name="max-price"
            placeholder="any"
          />
        </div>
        <div>
          <label htmlFor="badroom">Bedroom</label>
          <input
            type="number"
            value={""}
            id="badroom"
            name="badroom"
            placeholder="any"
          />
        </div>
        <button>
          <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default Filter;
