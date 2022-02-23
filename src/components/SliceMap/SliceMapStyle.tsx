import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    mapRoot:{
        position: "relative",
    height: "400px",
    [theme.breakpoints.down(768)]: {
      margin: "0px calc( (100% - 300px) / 2)",
    },
    [theme.breakpoints.down(501)]: {
      margin: "0px calc( (100% - 300px) / 2)",
    },
    }
}));
