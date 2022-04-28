import logo from "./logo.svg";
import "./App.css";
import { data } from "autoprefixer";

function App() {
  // const hardRandom =
  //   "https://opentdb.com/api.php?amount=25&difficulty=hard&type=multiple";
  // fetch(hardRandom)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // const mediumRandom =
  //   "https://opentdb.com/api.php?amount=25&difficulty=medium&type=multiple";
  // fetch(mediumRandom)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  const easyRandom =
    "https://opentdb.com/api.php?amount=25&difficulty=easy&type=multiple";
  fetch(easyRandom)
    .then((response) => response.json())
    .then((data) => console.log(data));

  data.results.map((result) => {
    console.log(result);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
