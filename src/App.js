import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Cards from "./pages/Cards";
import Games from "./pages/Games";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./styles/App.css";
import GameInfo from "./components/GameInfo";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
              <Route path="/GameInfo" element={<GameInfo/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
