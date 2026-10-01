import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faBed,
  faBath,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import { faTwitch } from "@fortawesome/free-brands-svg-icons";

import "./card.css";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`${item.id}`} className="imageContainer">
        <img className="image" src={item.img} />
      </Link>

      <div className="details">
        <h5 className="textConteiner">{item.title}</h5>

        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{item.address}</p>
        </div>

        <div className="price">
          <p>${item.price}</p>
        </div>

        <div className="features">
          <div className="bed-bath">
            <div className="bedroom">
              <FontAwesomeIcon icon={faBed} className="bedIcon" />
              <p>{item.bedroom} Bedrooms</p>
            </div>

            <div className="bathroom">
              <FontAwesomeIcon icon={faBath} className="bathIcon" />
              <p>{item.bathroom} Bathroom</p>
            </div>
          </div>

          <div className="detel-icons">
            <FontAwesomeIcon icon={faBookmark} />
            <FontAwesomeIcon icon={faTwitch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
