import "./App.css";
import Card from "./Components/Card/Card";
import SearchBar from "./Components/SearchBar/SearchBar";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="font-sans  text-white min-h-full">
      <Title />
      <SearchBar />
    </div>
  );
}

export default App;
