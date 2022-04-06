import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#1A1F37",
      borderRadius: "9px",
      height: "72px",
      padding: "21px 27px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    descContainer: {
      fontFamily: "Lato",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "29px",
      color: "#96A1DB",
    },
    colorLetter: {
      background: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    closeIcon: {
      cursor: "pointer",
      borderRadius: "100px",
      minWidth: "40px",
      width: "40px",
      height: "40px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      background: "#444858",
      "& i": {
        fontSize: "21px",
        fontWeight: 100,
      },
    },
    Nonedisplay: {
      display: "none",
    },
  })
);

interface Props {
  className?: any;
  onClick?: () => void;
}

export default function CoolNotification({ className, onClick }: Props) {
  const classes = useStyles();
  const [showStatus, setShowStatus] = useState(true);
  const handleClose = () => {
    setShowStatus(false);
  };

  return (
    <div
      className={clsx(classes.root, className, {
        [classes.Nonedisplay]: showStatus === false,
      })}
    >
      <div className={classes.descContainer}>
        Cool! Now you can start working on your items. &nbsp;{" "}
        <span className={classes.colorLetter}>Click here</span> &nbsp; to open
        the editor or click the edit button on any item.
      </div>
      <div className={classes.closeIcon} onClick={handleClose}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}
