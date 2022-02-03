import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lands from "../../pages/Lands/Lands";
import Auction from "../../pages/Auction/Auction";
import MyStore from "../../pages/MyStore/MyStore";
import Contracts from "../../pages/Contracts/Contracts";
import MarketPlace from "../../pages/MarketPlace/MarketPlace";
import CreateEstates from "../../pages/MyStore/CreateEstate/CreateEstate";
import Estates from "../../pages/MyStore/Estate/Estate";
import Bid from "../../pages/Bid/Bid";
import Buy from "../../pages/Buy/Buy";
import SignIn from "../../pages/SignIn/SignIn";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notification from "../Notifications";
import Spinner from "../Spinner";
import AdminLands from "../../pages/Admin/AdminLands/AdminLands";
import AdminEstate from "../../pages/Admin/AdminEstate/AdminEstate";
import Sell from "../../pages/Sell/Sell";
import Transfer from "../../pages/Transfer/Transfer";
import Collectibles from "../../pages/Collectibles/Collectibles";
import ToLands from "./ToLands";
import ToSignIn from "./ToSignIn";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ParcelDetail from "../../pages/ParcelDetail/ParcelDetail";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <Router>
      <Box className={classes.root}>
        <Header />
        <Routes>
          <Route path="/" element={<MarketPlace />} />
          <Route path="/need" element={<MarketPlace />} />
          <Route path="/lands" element={<Lands />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/browse" element={<Collectibles />} />
          <Route
            path="/account/estate/createestate"
            element={<CreateEstates />}
          />
          <Route path="/account/estate/create" element={<Estates />} />

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
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid/sell"
            element={<Sell />}
          />
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid/transfer"
            element={<Transfer />}
          />
          <Route
            path="/contracts/:contractaddress/tokens/:tokensid/parcel_detail"
            element={<ParcelDetail />}
          />
          <Route path="/signin" element={<ToLands />}>
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route path="/account" element={<ToSignIn />}>
            <Route path="/account" element={<MyStore />} />
          </Route>
        </Routes>
        <Footer />
        <Notification />
        <Spinner />
      </Box>
    </Router>
  );
}
