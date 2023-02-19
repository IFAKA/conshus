import { ITx } from "@/models";
import { atomWithStorage } from "jotai/utils";

export const budgetAtom = atomWithStorage("budget", [] as ITx[]);
