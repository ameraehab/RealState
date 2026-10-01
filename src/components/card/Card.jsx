import { Link } from "react-router-dom";
import "./card.css";
function Card({ item }) {
  return (
    <div className="card">
      <Link to={`${item.id}`} className="imageContainer">
        <img className="imag-card" src={item.img} />
      </Link>
      <div className="textConteiner">{item.title}</div>
    </div>
  );
}

export default Card;
