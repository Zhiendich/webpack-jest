import { RootState } from "../store";

export const selectCounter = (state: RootState) => state?.counter?.value || 0;
