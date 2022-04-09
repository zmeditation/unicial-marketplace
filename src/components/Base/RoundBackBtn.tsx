import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
        marginTop: "1px",
        marginRight: "3px",
      },
    },
  })
);

interface Props {
  className?: any;
  onBack?: () => void;
  type?: string;
}

export default function RoundBackBtn({ className, onBack, type }: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} onClick={onBack}>
      {type === "multiply" ? (
        <i className="fas fa-times"></i>
      ) : (
        <i className="fas fa-angle-left"></i>
      )}
    </div>
  );
}
