import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
// import selectors
import { selectTestCount } from "../../store/Test/selectors";
// import actions
import { getTest } from "../../store/Test";
export default function Test() {
  const dispatch = useAppDispatch();
  const rows = useAppSelector(selectTestCount);
  React.useEffect(() => {
    dispatch(getTest());
  }, []);

  console.log(rows);
  return (
    <>
      <div>this is for redux test {rows}</div>
    </>
  );
}
