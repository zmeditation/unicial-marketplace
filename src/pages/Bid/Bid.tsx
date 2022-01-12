import { useNavigate } from "react-router";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import ActionButton from "../../components/Base/ActionButton";
import TokenImg from "../../assets/img/1.png";
import NeedSignIn from "../../components/NoSign/NeedSignIn";
import { useStyles } from "./BidStyle";
import { BackButton } from "../../components/BackButton/BackButton";

const Bid = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  var isSignIn = 1;

  return (
    <div className={classes.root}>
      {isSignIn === 1 ? (
        <div>
          <BackButton />
          <div className={classes.bidCard}>
            <div className={classes.leftCard}>
              <div className={classes.imgContent}>
                <img
                  src={TokenImg}
                  className={classes.tokenImg}
                  alt="token"
                ></img>
              </div>
            </div>
            <div className={classes.rightCard}>
              <div className={classes.title}>Place a bid</div>
              <div className={classes.subtitle}>
                Set a price and expiration date for your bid on{" "}
                <span>Genesis Plaza</span>.
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <div className={classes.subheader_label}>PRICE</div>

                  <FormControl>
                    <Input
                      placeholder="1000"
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <i className={classes.symbol}>⏣</i>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <p>&nbsp;</p>
                <div className={classes.date_container}>
                  <div className={classes.subheader_label}>EXPIRATION DATE</div>
                  <form noValidate>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue="2017-05-24"
                      // className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </div>
              </div>
              {/* buttons */}
              <div className={classes.buttons}>
                <ActionButton
                  color="dark"
                  className={classes.cancelchange}
                  onClick={() => navigate(-1)}
                >
                  CANCEL
                </ActionButton>
                <ActionButton
                  disabled
                  color="red"
                  className={classes.bidchange}
                >
                  BID
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NeedSignIn />
      )}
    </div>
  );
};

export default Bid;
