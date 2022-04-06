import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backIcon: {
      cursor: "pointer",
      borderRadius: "100px",
      minWidth: "40px",
      width: "40px",
      height: "40px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      background: "#444858",
      //   marginBottom: "20px",
      "& i": {
        fontSize: "21px",
        fontWeight: 100,
      },
    },
  })
);

interface Props {
  className?: any;
  onClick?: () => void;
}

export default function RoundBackBtn({ className, onClick }: Props) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleToName = () => {
    navigate(-1);
  };

  return (
    <div className={clsx(classes.backIcon, className)} onClick={handleToName}>
      <i className="fas fa-angle-left"></i>
    </div>
  );
}
