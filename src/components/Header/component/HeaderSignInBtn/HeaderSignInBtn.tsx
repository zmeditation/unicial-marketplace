import { HeaderSignInBtnStyle } from "./HeaderSignInBtnStyle";
import singinusersvg from "../../../../assets/svg/signin_user.svg";
import singinsearchsvg from "../../../../assets/svg/signin_search.svg";

interface HeaderSignInBtnProps {
  onClick: () => void;
}

const HeaderSignInBtn = ({ onClick }: HeaderSignInBtnProps) => {
  const classes = HeaderSignInBtnStyle();
  return (
    <div className={classes.signBtn} onClick={onClick}>
      <div className={classes.signBtnContent}>
        <span className={classes.signIcon}>
          <img src={singinusersvg} alt="user"></img>
          <span className={classes.signtext}>Sign in</span>
        </span>
        <span className={classes.signMiddle}></span>
        <span className={classes.signIcon}>
          <img src={singinsearchsvg} alt="user"></img>
        </span>
      </div>
    </div>
  );
};
export default HeaderSignInBtn;
