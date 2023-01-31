import { atomWithStorage } from "jotai/utils";
import { INote } from "../models";

export const notesAtom = atomWithStorage("notes", [] as INote[]);
