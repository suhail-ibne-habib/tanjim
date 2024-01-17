import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./components/pages/FirstPage";
import SecondPage from "./components/pages/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";
import Fourth from "./components/pages/Fourth";
import Fifth from './components/pages/Fifth'
import Sixth from './components/pages/Sixth'
// import Nav from "./components/Nav";
import FrFirstPage from "./components/fr/FrFirstPage";
import FrSecondPage from "./components/fr/FrSecondPage";
import FrThirdPage from "./components/fr/FrThirdPage";
import FrFourthPage from "./components/fr/FrFourthPage";
import FrFifthPage from "./components/fr/FrFifthPage";
import FrSixthPage from "./components/fr/FrSixthPage";
// nl
import NlFirstPage from "./components/nl/NlFirstPage";
import NlSecondPage from "./components/nl/NlSecondPage";
import NlThirdPage from "./components/nl/NlThirdPage";
import NlFourthPage from "./components/nl/NlFourthPage";
import NlFifthPage from "./components/nl/NlFifthPage";
import NlSixthPage from "./components/nl/NlSixthPage";


function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>        
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<Fourth />} />
        <Route path="/fifth-page" element={<Fifth />} />
        <Route path="/sixth-page" element={<Sixth />} />
        <Route path="/fr/" element={<FrFirstPage />} />
        <Route path="/fr/second-page" element={<FrSecondPage />} />
        <Route path="/fr/third-page" element={<FrThirdPage />} />
        <Route path="/fr/fourth-page" element={<FrFourthPage />} />
        <Route path="/fr/fifth-page" element={<FrFifthPage />} />
        <Route path="/fr/sixth-page" element={<FrSixthPage />} />
        <Route path="/nl/" element={<NlFirstPage />} />
        <Route path="/nl/second-page" element={<NlSecondPage />} />
        <Route path="/nl/third-page" element={<NlThirdPage />} />
        <Route path="/nl/fourth-page" element={<NlFourthPage />} />
        <Route path="/nl/fifth-page" element={<NlFifthPage />} />
        <Route path="/nl/sixth-page" element={<NlSixthPage />} />
      </Routes>
    </Router>
);
}

export default App;
