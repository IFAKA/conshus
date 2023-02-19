import { SectionType } from "@/models";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const sectionAtom = atomWithStorage(
  "section",
  "journals" as SectionType
);
export const cursorAtom = atom(-1);
