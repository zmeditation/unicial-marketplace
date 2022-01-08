import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands";
import Contracts from "../../pages/Contracts";
import MarketPlace from "../../pages/MarketPlace/MarketPlace";

import Bid from "../../pages/Bid";

export default function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/lands" element={<Lands />} />
        <Route
          path="/contracts/:contractaddress/tokens/:tokensid"
          element={<Contracts />}
        />
        <Route
          path="/contracts/:contractaddress/tokens/:tokensid/bid"
          element={<Bid />}
        />
      </Routes>
    </Router>
  );
}
