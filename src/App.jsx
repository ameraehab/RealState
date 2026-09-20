import Navbar from "./components/Navbar";
import "./mainLayout.css";
import HomePage from "./components/Routes/homePage/homePage.jsx";
function App() {
  return (
    <div className="layout">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
