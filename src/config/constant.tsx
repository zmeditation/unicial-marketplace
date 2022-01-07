export const tabs = {
  land: 1,
};

export const getLastUrl = (url: string) => {
  return url.substring(url.lastIndexOf("/") + 1);
};

export const tabId = {
  marketplace: 1,
  builder: 2,
  docs: 3,
  events: 4,
  dao: 5,
  blog: 6,
};
