import { atomWithStorage } from "jotai/utils";
import { ITx } from "../models";

export const budgetAtom = atomWithStorage("budget", [] as ITx[]);
