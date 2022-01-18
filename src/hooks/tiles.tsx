const TILES_URL = "http://52.221.214.204:8080/api/v1/map";
// const TILES_URL = "https://api.decentraland.org/v2/tiles";
interface AtlasTile {
  x: number;
  y: number;
  type: number;
  left?: number;
  top?: number;
  topLeft?: number;
  owner: string;
  name?: string;
  estate_id?: string;
}

export const fetchTiles = async (
  url: string = TILES_URL
): Promise<Record<string, AtlasTile>> => {
  if (!window.fetch) return {};
  const resp = await window.fetch(url);
  const json = await resp.json();
  return json.data as Record<string, AtlasTile>;
};
