import { atomWithStorage } from "jotai/utils";
import { ISystem } from "../models";

export const systemsAtom = atomWithStorage("systems", [] as ISystem[]);
