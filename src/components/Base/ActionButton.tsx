import { Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    cursor: "pointer",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    borderRadius: "6px",
    gridGap: "8px",
    gap: "8px",

    padding: "13px 32px",
    minWidth: "128px",
    fontSize: "13px",
    justifyContent: "center",
    margin: "20px 0px 10px 0px",
  },
  darkColor: {
    backgroundColor: "#242129",
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: "#28262c",
    },
  },
  redColor: {
    backgroundColor: "#ff2d55",
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: "#ff3d61",
    },
  },
  disablestatus: {
    backgroundColor: "#7f1f34",
    color: "#7f7d80",
    cursor: "default",
    "&:hover": {
      transform: "translateY(0px)",
      backgroundColor: "#7f1f34",
      color: "#7f7d80",
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
          [classes.redColor]: color === "red",
          [classes.disablestatus]: disabled,
        })}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
};

export default ActionButton;
