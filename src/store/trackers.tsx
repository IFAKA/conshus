import { atomWithStorage } from "jotai/utils";
import { ISystem } from "../models";

export const trackersAtom = atomWithStorage("trackers", [] as ISystem[]);
