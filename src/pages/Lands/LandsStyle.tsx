import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  landMap: {
    minHeight: "calc(100vh - 268px)",
    [theme.breakpoints.down(768)]: {
      minHeight: "calc(100vh - 376px)",
    },
    [theme.breakpoints.down(500)]: {
      minHeight: "calc(100vh - 400px)",
    },
  },
}));
