import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Cards from "./pages/Cards";
import Games from "./pages/Games";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./styles/App.css";
import GameInfo from "./pages/GameInfo";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import ScrollToTop from "./components/ScrollToTop";
import useFetch from "./components/useFetch";

function App() {

  const {data:seriesInfo,isPending1,err1} = useFetch("http://localhost:8000/series-info");
  const {data:seriesList,isPendings,err2} = useFetch("http://localhost:8000/seriesList");

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
              { seriesList && <Route path="/Games/GameInfo" element={<GameInfo gameList={seriesList}/>}></Route> }
              {
                seriesInfo && seriesList && seriesInfo.map((games,index1)=>{
                  const gameList = seriesList[index1];
                  return games.gameInfo.map((game,index2)=>{
                    const gameName = gameList.games[index2].replace(/\s+/g, '');
                    return(
                      <Route path={`/Games/GameInfo/${gameName}`} element={<GameInfo gameDetails={game}/>}></Route>
                    )
                  })
                })
              }
              <Route path="/Contact" element={<Contact/>}></Route>
              <Route path="/About" element={<About/>}></Route>
              <Route path="/Gallery" element={<Gallery/>}></Route>
              <Route path="/Feedback" element={<Feedback/>}></Route>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
