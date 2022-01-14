import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands/Lands";
import Auction from "../../pages/Auction/Auction";
import Contracts from "../../pages/Contracts/Contracts";
import MarketPlace from "../../pages/MarketPlace/MarketPlace";

import Bid from "../../pages/Bid/Bid";
import Buy from "../../pages/Buy/Buy";
import SignIn from "../../pages/SignIn/SignIn";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import AdminLands from "../../pages/Admin/AdminLands/AdminLands";
import AdminEstate from "../../pages/Admin/AdminEstate/AdminEstate";
export default function Layout() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/need" element={<MarketPlace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/lands" element={<Lands />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/contracts/bid" element={<Bid />} />
        <Route path="/contracts/buy" element={<Buy />} />
        {/* admin relate */}
        <Route path="/admin/lands" element={<AdminLands />} />
        <Route path="/admin/estate" element={<AdminEstate />} />
      </Routes>
      <Footer />
    </Router>
  );
}
