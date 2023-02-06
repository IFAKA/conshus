import { atomWithStorage } from "jotai/utils";
import { ITable } from "../models";

export const tablesAtom = atomWithStorage("tables", [] as ITable[]);
