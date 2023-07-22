import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
