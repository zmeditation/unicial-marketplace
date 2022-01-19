import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@material-ui/icons/ArrowDropUpRounded";
export const WearablesData = [
  {
    title: "Head",
    path: "",
    iconClosed: <ArrowDropDownRoundedIcon />,
    iconOpened: <ArrowDropUpRoundedIcon />,
    number: "1",
    subNav: [
      {
        title: "Facial Hair",
        path: "/my/orders/exchange/openorder",
        parentKey: "1",
        ownKey: "5",
      },
      {
        title: "Hair",
        path: "/my/orders/exchange/tradeorder",
        parentKey: "1",
        ownKey: "6",
      },
      {
        title: "Eyes",
        path: "/my/orders/exchange/usertrade",
        parentKey: "1",
        ownKey: "7",
      },
      {
        title: "Eyebrows",
        path: "/my/orders/exchange/usertrade",
        parentKey: "1",
        ownKey: "8",
      },
      {
        title: "Mouth",
        path: "/my/orders/exchange/usertrade",
        parentKey: "1",
        ownKey: "9",
      },
    ],
  },
  {
    title: "Upper Body",
    path: "/my/orders/exchange/p2p-order",
    number: "2",
  },
  {
    title: "Lower Body",
    path: "/my/orders/exchange/buysell-history",
    number: "3",
  },
  {
    title: "Feet",
    path: "/my/orders/exchange/buysell-history",
    number: "4",
  },

  {
    title: "Accessories",
    path: "",
    iconClosed: <ArrowDropDownRoundedIcon />,
    iconOpened: <ArrowDropUpRoundedIcon />,
    number: "5",
    subNav: [
      {
        title: "Earring",
        path: "/my/orders/convert/history",
        parentKey: "5",
        ownKey: "10",
      },
      {
        title: "Eyewear",
        path: "/my/orders/convert/openorder",
        parentKey: "5",
        ownKey: "11",
      },
      {
        title: "Hat",
        path: "/my/orders/convert/openorder",
        parentKey: "5",
        ownKey: "12",
      },
      {
        title: "Helmet",
        path: "/my/orders/convert/openorder",
        parentKey: "5",
        ownKey: "13",
      },
      {
        title: "Mask",
        path: "/my/orders/convert/openorder",
        parentKey: "5",
        ownKey: "14",
      },
      {
        title: "Tiara",
        path: "/my/orders/convert/openorder",
        parentKey: "5",
        ownKey: "15",
      },
      {
        title: "Top Head",
        path: "/my/orders/convert/openorder",
        parentKey: "5",
        ownKey: "16",
      },
    ],
  },
];
