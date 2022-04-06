import {
  InputBorderListDropdownStyle,
  StyledInput,
} from "./InputBorderListDropdownStyle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { rareData } from "./../../../../src/config/constant";
import { useState, useEffect } from "react";
import clsx from "clsx";

interface Props {
  type?: string;
  data?: any;
  className?: any;
}

export default function InputBorderListDropdown({
  type,
  data,
  className,
}: Props) {
  const classes = InputBorderListDropdownStyle();
  const [openStatus, setOpenStatus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [resultData, setResultData] = useState<any>([]);
  let placeholderValue;
  switch (type) {
    case "rarity":
      placeholderValue = "Select a rarity";
      break;
    case "category":
      placeholderValue = "Select a category";
  }
  const handleItem = (index: number) => {
    setInputValue(data[index - 1].name);
    setOpenStatus(false);
  };
  const handleIcon = () => {
    setResultData(data);
    setOpenStatus(!openStatus);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleInputClick = (e: any) => {};

  let temp: any[] = [];
  useEffect(() => {
    if (inputValue === "") {
      //   setResultData(rareData);
      //     setOpenStatus(true);
      setResultData(data);
      setOpenStatus(false);
    } else {
      setOpenStatus(true);
      for (let i = 0; i < data.length; i++) {
        if (data[i]?.name?.toLowerCase() === inputValue.toLowerCase()) {
          setOpenStatus(false);
          temp.push(data[i]);
          setResultData(temp);
        } else if (
          data[i]?.name?.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          temp.push(data[i]);
        }
      }
      setResultData(temp);
    }
  }, [inputValue]);

  return (
    <div className={clsx(classes.totalRoot, className)}>
      <div className={classes.root}>
        <div className={classes.container}>
          <StyledInput
            className={classes.inputContainer}
            placeholder={placeholderValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            value={inputValue}
          />
          <ExpandMoreIcon className={classes.expandIcon} onClick={handleIcon} />
        </div>
      </div>
      <div
        className={clsx(classes.searchResultRoot, {
          [classes.Nonedisplay]: openStatus === false,
        })}
      >
        {resultData.map((item: any, key: any) => (
          <div
            className={classes.itemContainer}
            onClick={() => handleItem(item?.index)}
            key={key}
          >
            <span>{item.name}</span>
            {type === "rarity" ? (
              <div className={classes.rareTagContainer}>
                {item?.frequency} &nbsp; unit
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
