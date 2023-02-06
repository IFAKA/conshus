import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { SectionType } from "../models";

export const sectionAtom = atomWithStorage(
  "section",
  "journals" as SectionType
);
export const cursorAtom = atom(-1);
