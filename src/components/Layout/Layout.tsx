import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands/Lands";
import Auction from "../../pages/Auction/Auction";
import MyStore from "../../pages/MyStore/MyStore";
import Contracts from "../../pages/Contracts/Contracts";
import MarketPlace from "../../pages/MarketPlace/MarketPlace";

import Bid from "../../pages/Bid/Bid";
import Buy from "../../pages/Buy/Buy";
import SignIn from "../../pages/SignIn/SignIn";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notification from "../Notifications";

import AdminLands from "../../pages/Admin/AdminLands/AdminLands";
import AdminEstate from "../../pages/Admin/AdminEstate/AdminEstate";
//
import Collectibles from "../../pages/Collectibles/Collectibles";
import { setloginAddress } from "../../store/auth/actions";
import { useAppDispatch } from "../../store/hooks";

export default function Layout() {
  const dispatch = useAppDispatch();

  if (localStorage.loginAddress) {
    dispatch(setloginAddress(localStorage.loginAddress));
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/need" element={<MarketPlace />} />
        <Route path="/lands" element={<Lands />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/browse" element={<Collectibles />} />
        <Route path="/account" element={<MyStore />} />
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
        <Route path="/admin/lands" element={<AdminLands />} />
        <Route path="/admin/estate" element={<AdminEstate />} />

        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
      <Notification/>
    </Router>
  );
}
