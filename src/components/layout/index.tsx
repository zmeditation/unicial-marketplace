import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands.tsx";
import Contracts from "../../pages/Contracts.tsx";
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
