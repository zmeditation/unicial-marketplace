import { Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    cursor: "pointer",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    borderRadius: "25px",
    gridGap: "8px",
    gap: "8px",
    minWidth: "128px",
    fontSize: "16px",
    lineHeight: "20px",
    justifyContent: "center",
    color: "white",
  },
  darkColor: {
    border: "double 1px transparent",
    borderRadius: "100px",
    backgroundImage:
      "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
    backgroundClip: "content-box, border-box",
    backgroundOrigin: "border-box",
    color: "white",
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: "#28262c",
    },
  },
  lightColor: {
    background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  },
  disablestatus: {
    color: "#7f7d80",
    cursor: "default",
    "&:hover": {
      transform: "translateY(0px)",
    },
  },
  text: {
    margin: "10px 32px",
    display: "flex",
    alignItems: "center",
    "& svg": {
      margin: "0px 5px",
    },
  },
}));

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  disabled?: boolean;
  className?: any;
  onClick?: () => void;
}

const ActionButton = ({
  children,
  color,
  disabled,
  className,
  onClick,
}: ButtonProps) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={clsx(classes.root, className, {
          [classes.darkColor]: color === "dark",
          [classes.lightColor]: color === "light",
          [classes.disablestatus]: disabled,
        })}
        onClick={onClick}
      >
        <span className={classes.text}>{children}</span>
      </div>
    </>
  );
};

export default ActionButton;
