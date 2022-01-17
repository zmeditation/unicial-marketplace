import { Theme, makeStyles } from "@material-ui/core/styles";
export const TypeBoxStyle = makeStyles((theme: Theme) => ({
  typeBoxRoot: {
    //
    border: "double 2px transparent",
    borderRadius: "10px",
    backgroundImage:
      "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
    backgroundClip: "content-box, border-box",
    backgroundOrigin: "border-box",
    //
    display: "flex",
    flexDirection: "column",
    width: "244px",
    height: "auto",
    marginRight: "20px",
  },
  headerTitle: {
    marginLeft: "20px",
    marginTop: "13px",
    marginBottom: "13px",
    color: "#736e7d",
    fontWeight: 600,
    fontSize: "13px",
  },
  boxBody: {
    marginBottom: "8px",
  },
  normalItem: {
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "8px",
    marginRight: "8px",
    padding: "9px 12px",
    cursor: "pointer",
    marginBottom: "8px",
    "&:hover": {
      backgroundColor: "#3e4461",
    },
  },
  activeItem: {
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "8px",
    marginRight: "8px",
    padding: "9px 12px",
    cursor: "pointer",
    marginBottom: "8px",
    backgroundColor: "#3e4461",
  },
  itemTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    color: "white",
  },
  itemDescription: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    color: "#736e7d",
  },
}));
