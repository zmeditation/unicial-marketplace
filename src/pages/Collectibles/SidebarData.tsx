import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@material-ui/icons/ArrowDropUpRounded";
export const WearablesData = [
  {
    title: "Head",
    path: "head",
    iconClosed: <ArrowDropDownRoundedIcon />,
    iconOpened: <ArrowDropUpRoundedIcon />,
    number: "1",
    subNav: [
      {
        title: "Facial Hair",
        path: "facial_hair",
        parentKey: "1",
        ownKey: "5",
      },
      {
        title: "Hair",
        path: "hair",
        parentKey: "1",
        ownKey: "6",
      },
      {
        title: "Eyes",
        path: "eyes",
        parentKey: "1",
        ownKey: "7",
      },
      {
        title: "Eyebrows",
        path: "eyebrows",
        parentKey: "1",
        ownKey: "8",
      },
      {
        title: "Mouth",
        path: "mouth",
        parentKey: "1",
        ownKey: "9",
      },
    ],
  },
  {
    title: "Upper Body",
    path: "upper_body",
    number: "2",
  },
  {
    title: "Lower Body",
    path: "lower_body",
    number: "3",
  },
  {
    title: "Feet",
    path: "feet",
    number: "4",
  },

  {
    title: "Accessories",
    path: "accessories",
    iconClosed: <ArrowDropDownRoundedIcon />,
    iconOpened: <ArrowDropUpRoundedIcon />,
    number: "5",
    subNav: [
      {
        title: "Earring",
        path: "earring",
        parentKey: "5",
        ownKey: "10",
      },
      {
        title: "Eyewear",
        path: "eyewear",
        parentKey: "5",
        ownKey: "11",
      },
      {
        title: "Hat",
        path: "hat",
        parentKey: "5",
        ownKey: "12",
      },
      {
        title: "Helmet",
        path: "helmet",
        parentKey: "5",
        ownKey: "13",
      },
      {
        title: "Mask",
        path: "mask",
        parentKey: "5",
        ownKey: "14",
      },
      {
        title: "Tiara",
        path: "tiara",
        parentKey: "5",
        ownKey: "15",
      },
      {
        title: "Top Head",
        path: "top_head",
        parentKey: "5",
        ownKey: "16",
      },
    ],
  },
];
