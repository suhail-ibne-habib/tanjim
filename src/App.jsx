import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./components/pages/FirstPage";
import SecondPage from "./components/pages/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";
import Fourth from "./components/pages/Fourth";
import Fifth from './components/pages/Fifth'
import Sixth from './components/pages/Sixth'
import Nav from "./components/Nav";
import FrFirstPage from "./components/fr/FrFirstPage";
import FrSecondPage from "./components/fr/FrSecondPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>        
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<Fourth />} />
        <Route path="/fifth-page" element={<Fifth />} />
        <Route path="/sixth-page" element={<Sixth />} />
        <Route path="/fr/" element={<FrFirstPage />} />
        <Route path="/fr/second-page" element={<FrSecondPage />} />
      </Routes>
    </Router>
);
}

export default App;
