import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { listData } from "../../dataLib/data";
import "./listPage.css";
function listPage() {
  const data = listData;
  return (
    <div className="Page-layout">
      <div className="listContainer">
        <Filter />
        <div className="wrapper">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mapContainer">map</div>
    </div>
  );
}

export default listPage;
