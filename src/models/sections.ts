import { RefObject } from "react";
import AutosizeInput from "react-input-autosize";

export type SectionType =
  | "journals"
  | "tables"
  | "systems"
  | "trackers"
  | "budget";
export type AutoSizeInputType = RefObject<AutosizeInput> &
  RefObject<HTMLInputElement>;
