import { BrowserRouter, Route, Routes } from "react-router-dom";
import AstrologyRanking from "./components/AstrologyRanking";
import AstrologyDetails from "./components/AstrologyDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<AstrologyRanking />} />
            <Route path="/astrology-details/:astrologyName" element={<AstrologyDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
