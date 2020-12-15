import logo from "./logo.svg";
import "./App.css";
import Row from "./Components/Row";
import requests from "./API/requests";
import Banner from "./Components/Banner";

//1.1 Version started 

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

<<<<<<< HEAD
//This is old verison
=======
//This has been added from server
>>>>>>> a423e9eaf0d528a4db050082cfb0f148ac4f0409

export default App;
