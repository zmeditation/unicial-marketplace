import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands";
import Contracts from "../../pages/Contracts";
import MarketPlace from "../../pages/MarketPlace/MarketPlace";
import Test from "../../pages/Test";
import Test1 from "../../pages/Test1";
export default function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/lands" element={<Lands />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test1" element={<Test1 />} />
      </Routes>
    </Router>
  );
}
