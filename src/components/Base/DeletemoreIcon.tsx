import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import moreIcon from "./../../assets/svg/more.png";
import { useState, useEffect } from "react";
import DeleteModal from "./../../../src/components/DeleteModal/DeleteModal";

interface Props {
  //   letter?: string;
  className?: any;
  //   onClick?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    moreIconContainer: {
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    deleteContainer: {
      position: "absolute",
      backgroundColor: "#1A1F37",
      borderRadius: "6px",
      width: "187px",
      height: "51px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "17px",
      right: "-6px",
      zIndex: 1,
    },
    deleteLetter: {
      color: "white",
      fontFamily: "Montserrat",
      fontSize: "15px",
      lineHeight: "15px",
      fontWeight: 600,
    },
    Nonedisplay: {
      display: "none",
    },
  })
);

export default function DeletemoreIcon({ className }: Props) {
  const classes = useStyles();
  const [openDeleteStatus, setOpenDeleteStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);

  const handleMoreIcon = () => {
    setOpenDeleteStatus(!openDeleteStatus);
  };

  const handleDeleteItem = () => {
    setOpenDeleteStatus(false);
    setDeleteModalStatus(true);
  };
  const handleDeleteModalClose = () => {
    setDeleteModalStatus(false);
  };
  const handleblur = () => {
    alert("yes");
  };

  return (
    <>
      <div
        className={clsx(classes.root, className)}
        //   onClick={handleIcon}
      >
        <div className={classes.moreIconContainer} onClick={handleMoreIcon}>
          <img src={moreIcon} />
        </div>

        <div
          className={clsx(classes.deleteContainer, {
            [classes.Nonedisplay]: openDeleteStatus === false,
          })}
          onClick={handleDeleteItem}
          //   onBlur={() => {
          //     setOpenDeleteStatus(false);
          //   }}
          onBlur={handleblur}
        >
          <span className={classes.deleteLetter}>Delete</span>
        </div>
      </div>
      <DeleteModal show={deleteModalStatus} onClose={handleDeleteModalClose} />
    </>
  );
}
