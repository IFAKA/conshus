import { atomWithStorage } from "jotai/utils";
import { IJournal } from "../models";

export const journalsAtom = atomWithStorage("journals", [] as IJournal[]);
