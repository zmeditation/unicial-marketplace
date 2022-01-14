import { useNavigate } from "react-router";
import NeedSignIn from "../../components/NoSign/NeedSignIn";
import ActionButton from "../../components/Base/ActionButton";
import TokenImg from "../../assets/img/1.png";
import { useStyles } from "./BuyStyle";
import { BackButton } from "../../components/BackButton/BackButton";

const Buy = () => {
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
              <div className={classes.title}>Buy Estate</div>
              <div className={classes.subtitle}>
                You don't have enough MANA to buy
                <b> Hanzo-Gate1 </b>
                for<i className={classes.symbol}>⏣</i>
                1,000,000.
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
                  BUY
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

export default Buy;
