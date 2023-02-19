import { IJournal } from "@/models";
import { atomWithStorage } from "jotai/utils";

export const journalsAtom = atomWithStorage("journals", [] as IJournal[]);
