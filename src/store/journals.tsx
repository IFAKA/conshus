import { atomWithStorage } from "jotai/utils";
import { INote } from "../models";

export const journalsAtom = atomWithStorage("notes", [] as INote[]);
