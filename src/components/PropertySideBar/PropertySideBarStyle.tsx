import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

export const PropertySideBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    myItemsBlock: {
      width: "451px",
      height: "100vh",
    },
    propertyNavbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "62px",
      backgroundColor: "#3a3f59",
      textAlign: "center",
    },
  })
);
