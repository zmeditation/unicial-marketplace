import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands";
import Contracts from "../../pages/Contracts";
import MarketPlace from "../../pages/MarketPlace/MarketPlace";
import TopTab from "../TopTab/TopTab";
// import HeaderMobileMenu from "../Header/component/HeaderMobileMenu/HeaderMobileMenu";
export default function Layout() {
  return (
    <Router>
      {/* <HeaderMobileMenu /> */}
      <TopTab />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/lands" element={<Lands />} />
        <Route
          path="/contracts/:contractaddress/tokens/:tokensid"
          element={<Contracts />}
        />
      </Routes>
    </Router>
  );
}
