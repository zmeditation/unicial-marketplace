export const tabs = {
  land: 1,
};

export const headerId = {
  marketplace: 1,
  admin: 2,
};

export const topTabIndex = {
  land: 1,
  auction: 2,
  partners: 3,
  myassets: 4,
  mybids: 5,
};

export const searchbarBtn = {
  tableBtn: 1,
  locationBtn: 2,
};

export const searchBarIndex = {
  land: 1,
  collectibles: 2,
  mystore: 3,
  auction: 4,
  default: 0,
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
    rpcUrls: ["http://54.255.250.212:80"],
    blockExplorerUrls: ["http://testnet.znxscan.com"],
  },
};
