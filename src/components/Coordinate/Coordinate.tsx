import React from "react";
// import { Badge } from 'decentraland-ui'
import { Props } from "./Coordinate.types";
import styles from "./Coordinate.module.css";

const Coordinate = (props: Props) => {
  const { x, y, className } = props;

  return (
    <div className={className}>
      <i className={styles.pin} />
      {`${x},${y}`}
    </div>
  );
};

export default Coordinate;
