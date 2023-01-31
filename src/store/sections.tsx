import { atomWithStorage } from "jotai/utils";
import { SectionType } from "../models";

export const sectionAtom = atomWithStorage(
  "section",
  "journals" as SectionType
);
