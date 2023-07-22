import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Footer />
      </div>
    </>
  );
}

export default App;
