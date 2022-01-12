import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands/Lands";
import Contracts from "../../pages/Contracts/Contracts";
import MarketPlace from "../../pages/MarketPlace/MarketPlace";

import Bid from "../../pages/Bid/Bid";
import Buy from "../../pages/Buy/Buy";
import SignIn from "../../pages/SignIn/SignIn";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/need" element={<MarketPlace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/lands" element={<Lands />} />
        <Route
          path="/contracts/:contractaddress/tokens/:tokensid"
          element={<Contracts />}
        />
        <Route
          path="/contracts/:contractaddress/tokens/:tokensid/bid"
          element={<Bid />}
        />
        <Route
          path="/contracts/:contractaddress/tokens/:tokensid/buy"
          element={<Buy />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
