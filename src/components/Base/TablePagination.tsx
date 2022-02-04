import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

interface Props {
  totalPage: number;
  handlepgnum: (value: any) => void;
  className?: any;
}

export default function TablePagination({ totalPage, handlepgnum }: Props) {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handlepgnum(value);
  };
  return (
    <div className={classes.root}>
      <Pagination count={totalPage} onChange={handleChange} />
    </div>
  );
}
