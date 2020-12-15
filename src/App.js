import logo from "./logo.svg";
import "./App.css";
import Row from "./Components/Row";
import requests from "./API/requests";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        dataURL={requests.fetchNetFlixOriginal}
        islarge
      ></Row>
      <Row title="TRENDING MOVIES" dataURL={requests.fetchTrending}></Row>
      <Row title="Top Rated" dataURL={requests.fetchTopRated}></Row>
      <Row title="Action Movies" dataURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" dataURL={requests.fetchComedyMovies}></Row>
    </div>
  );
}

//This has been added from server

export default App;
