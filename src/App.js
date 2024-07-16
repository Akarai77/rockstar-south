import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Cards from "./pages/Cards";
import Games from "./pages/Games";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./styles/App.css";
import GameInfo from "./pages/GameInfo";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import useFetch from "./components/useFetch";

function App() {

  const {data:series,isPending,err} = useFetch("http://localhost:8000/games-info");

  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
          <Navbar/>
          <div className="body">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Cards" element={<Cards/>}></Route>
              <Route path="/Games" element={<Games/>}></Route>
              { series && <Route path="/GameInfo" element={<GameInfo gameList={series}/>}></Route> }
              {
                series && series.map((games)=>(
                  games.gameInfo.map((game)=>(
                    <Route path={`/GameInfo/${game.title.replace(/\s+/g, '')}`} element={<GameInfo gameDetails={game}/>}/>
                  ))
                ))
              }
              <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
