import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      color: "#ffffff",
      textAlign: "center",
      cursor: "pointer",
      "& i": {
        margin: "9px 17px",
        width: "16px",
        height: "16px",
        color: "#ffffff",
      },
    },
  })
);

interface Props {
  className?: any;
  onClick?: () => void;
  type?: string;
}

export default function OvalBtn({ className, onClick, type }: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} onClick={onClick}>
      {type === "toparrow" ? (
        <i className="far fa-arrow-from-bottom"></i>
      ) : (
        <i className="far fa-plus"></i>
      )}
    </div>
  );
}
