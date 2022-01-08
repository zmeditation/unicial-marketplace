import { Theme, makeStyles } from "@material-ui/core/styles";

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
    backgroundColor: "#ff2d55",
    padding: "13px 32px",
    minWidth: "128px",
    fontSize: "13px",
    justifyContent: "center",
    margin: "20px 0px 10px 0px",
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: "#ff3d61",
    },
  },
}));

interface ButtonProps {
  children: React.ReactNode;
}

const ActionButton = ({ children }: ButtonProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>{children}</div>
    </>
  );
};

export default ActionButton;
