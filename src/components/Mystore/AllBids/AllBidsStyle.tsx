import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const AllBidsStyle = makeStyles((theme: Theme) =>
createStyles({
    root: {
      backgroundColor: "#282E4E",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
      // "& .MuiPaginationItem-root": {
      //   color: "white",
      // },

      // "& .MuiPaginationItem-page.Mui-selected": {
      //   backgroundColor: "#e5080814",
      // },
    },
    reciveBid: {
      minHeight: "150px",
      paddingBottom: "20px",
    },
    reciveTitle: {
      marginBottom: "30px",
    },
    sendBid: {
      borderTop: "solid 1px #373f66",
      minHeight: "150px",
      paddingTop: "50px",
    },
    sendTitle: {
      marginBottom: "30px",
    },
  })
);
