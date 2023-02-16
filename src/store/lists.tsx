import { ILists } from "@/models";
import { atomWithStorage } from "jotai/utils";

export const listsAtom = atomWithStorage("lists", [] as ILists[]);
