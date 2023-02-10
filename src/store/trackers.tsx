import { atomWithStorage } from "jotai/utils";
import { TODAY } from "../constants";
import { IDay } from "../models";

const firstDayDate = new Date(new Date().getFullYear(), 0, 1);
const days = [...Array(365).keys()].map((_, i) => ({
  date: new Date(firstDayDate.getTime() + i * 86400000),
  systems: [],
}));
export const daysAtom = atomWithStorage("days", days as IDay[]);
export const tomorrowAtom = atomWithStorage("tomorrow", TODAY);
