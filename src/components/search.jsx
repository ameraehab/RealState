import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Search() {
  const [isClicked, setClicked] = useState("btn-buy");

  return (
    <div className="search-box">
      <div className="type">
        <button
          className={isClicked === "btn-buy" ? "selected" : ""}
          onClick={() => setClicked("btn-buy")}
        >
          Buy
        </button>
        <button
          className={isClicked === "btn-rent" ? "selected" : ""}
          onClick={() => setClicked("btn-rent")}
        >
          Rent
        </button>
      </div>
      <form>
        <input
          className="location"
          type="text"
          name="location"
          placeholder="city Location"
        />
        <input
          className="min-price"
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price "
        />
        <input
          className="max-price"
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price "
        />
        <button>
          <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}

export default Search;
