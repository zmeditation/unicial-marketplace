import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands";
import Contracts from "../../pages/Contracts";
import MarketPlace from "../../pages/MarketPlace";
export default function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/lands" element={<Lands />} />
        <Route path="/contracts" element={<Contracts />} />
      </Routes>
    </Router>
  );
}
