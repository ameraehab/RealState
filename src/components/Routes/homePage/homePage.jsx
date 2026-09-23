import "./homePage.css";
import Search from "../../search";
function HomePage() {
  return (
    <div className="home-layout">
      <img src="public/images/heroImage.jpg" alt="Description" />
      <div className="textContent">
        <h1 className="heading">Find Real Estate & Get Your Dream Place</h1>
        <p className="description">
          Discover the perfect property that matches your lifestyle and budget.
        </p>
        <Search />
        <div className="main-box">
          <div className="box">
            <h1>16+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="box">
            <h1>200</h1>
            <p>Award Gained</p>
          </div>
          <div className="box">
            <h1>1200+</h1>
            <p>Property Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
