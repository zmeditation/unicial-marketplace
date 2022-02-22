export const ApiUrl = "http://192.168.112.107:8080";
// export const ApiUrl = "http://localhost:3000";
export const REQUEST_API_URL = `${ApiUrl}/api/v1`;

export const tabs = {
  land: 1,
};

export const showMoreCount = 6;

export const headerId = {
  marketplace: 1,
  admin: 2,
};

export const topTabIndex = {
  land: 1,
  collectibles: 2,
  mystore: 3,
  auction: 4,
  partners: 5,
  myassets: 6,
  mybids: 7,
  contracts: 8,
};

export const searchbarBtn = {
  tableBtn: 1,
  locationBtn: 2,
};

export const searchbarIndex = {
  collections: 1,
  land: 3,
  parcels: 3,
  estate: 3,
  wearables: 2,
  ens: 4,
  on_sale: 5,
  sales: 0,
  auction: 0,
  contracts: 0,
};

export const networkInfo = {
  chain_id: 1,
  rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  chain_name: "Ethereum Mainnet",
};

export const connectWalletStatus = {
  connect: "1",
  disconnect: "2",
};

export const CHAIN_INFO = {
  MAINNET: {
    chainId: "0x5A",
    chainName: "Zilionixx Mainnet",
    nativeCurrency: {
      name: "ZNX Coin",
      symbol: "ZNX",
      decimals: 18,
    },
    rpcUrls: ["http://52.74.43.98"],
    blockExplorerUrls: ["http://znxscan.com"],
  },
  TESTNET: {
    chainId: "0x5D",
    chainName: "Zilionixx Testnet",
    nativeCurrency: {
      name: "ZNX Coin",
      symbol: "ZNX",
      decimals: 18,
    },
    rpcUrls: ["https://testrpc1.znxscan.com"],
    blockExplorerUrls: ["http://testnet.znxscan.com"],
  },
};

export const typebox = {
  store: "item",
  listing: "nft",
};
export const parcelTypes = ["road", "district", "plaza"];

export const category = {
  collections: "collections",
  land: "land",
  parcels: "parcels",
  estates: "estates",
  wearable: "wearables",
  name: "ens",
};

export const collectiblesTagsColor = {
  DefaultColor: "DefaultColor",
  RareColor: "RareColor",
};

export const categoryWearables = {
  head: "wearables_head",
  facialhair: "wearables_facial_hair",
  hair: "wearables_hair",
  eyes: "wearables_eyes",
  eyebrows: "wearables_eyebrows",
  mouth: "wearables_mouth",
  upperBody: "wearables_upper_body",
  lowerBody: "wearables_lower_body",
  feet: "wearables_feet",
  accessories: "wearables_accessories",
  earring: "wearables_erring",
  eyewear: "wearables_eyewear",
  hat: "wearables_hat",
  helmet: "wearables_helmet",
  mask: "wearables_mask",
  tiara: "wearables_tiara",
  topHead: "wearables_top_head",
};

//------------table page nation setting-----------------
export const onePageCount = 5

export const headerSendData = [
  "Token Address",
  "Token Id",
  "Price",
  "Expires At Time",
  "Action",
];

export const headerReciveData = [
  "Bid Id",
  "Bidder",
  "Price",
  "Expires At Time",
  "Action",
];