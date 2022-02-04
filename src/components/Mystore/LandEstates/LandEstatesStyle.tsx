import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

export const LandEstatesStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
    },
    createBtnContainer:{
      display:"flex",
      justifyContent: "end",  
      marginRight: "20px",
      marginBottom:"50px"
    },
    createBtn:{
      width:"200px"
    }
  })
);
