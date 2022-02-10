import type { RootState } from "../store";

export const selectSaleParcels = (state: RootState) =>
  state.saleparcels.parcels;
