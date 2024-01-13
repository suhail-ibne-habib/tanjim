import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Nav from "./components/Nav";
import Fourth from "./components/Fourth";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>        
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<Fourth />} />
      </Routes>
    </Router>
);
}

export default App;
