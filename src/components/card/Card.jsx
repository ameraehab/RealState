import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`${item.id}`} className="imageContainer">
        <img src={item.img} />
      </Link>
      <div className="textConteiner">{item.title}</div>
    </div>
  );
}

export default Card;
