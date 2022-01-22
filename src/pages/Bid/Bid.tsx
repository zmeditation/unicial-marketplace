/** @format */

import { useNavigate } from "react-router";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import ActionButton from "../../components/Base/ActionButton";
import TokenImg from "../../assets/img/1.png";
import NeedSignIn from "../../components/NoSign/NeedSignIn";
import { useStyles, StyledInput, StyledDateInput } from "./BidStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import settingicon from "../../assets/svg/bidpage_settingicon.svg";
import raiseicon from "../../assets/svg/bid_raiseicon.svg";
import { Grid } from "@material-ui/core";

const Bid = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  var isSignIn = 1;

  const handleChange = () => {};

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
                  <Grid container>
                    <Grid md={6} sm={6} xs={6}>
                      <div className={classes.subheader_label}>PRICE</div>
                      <FormControl>
                        <StyledInput
                          placeholder="0"
                          onChange={handleChange}
                          startAdornment={
                            <InputAdornment position="start">
                              <img src={settingicon} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid md={6} sm={6} xs={6}>
                      <div className={classes.subheader_label}>
                        EXPIRATION DATE
                      </div>
                      <FormControl>
                        <StyledDateInput
                          placeholder="0"
                          onChange={handleChange}
                          type="date"
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
                <p>&nbsp;</p>
              </div>
              {/* buttons */}
              <div className={classes.buttons}>
                <ActionButton
                  color="dark"
                  className={classes.cancelchange}
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </ActionButton>
                <ActionButton
                  disabled
                  color="light"
                  className={classes.bidchange}
                >
                  Bid &nbsp;
                  <img src={raiseicon} />
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
