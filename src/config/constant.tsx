export const tabs = {
  land: 1,
};

export const getLastUrl = (url: string) => {
  return url.substring(url.lastIndexOf("/") + 1);
};
