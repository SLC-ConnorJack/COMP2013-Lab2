import "./App.css";
import ResortsContainer from "./Components/ResortsContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <header className="header">
      <h1>Resorts Lite</h1>
      </header>
      <ResortsContainer data={data} />
    </>
  );
}

export default App;
