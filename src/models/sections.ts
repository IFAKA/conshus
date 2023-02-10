import { RefObject } from "react";
import AutosizeInput from "react-input-autosize";

export type SectionType =
  | "journals"
  | "tables"
  | "flow"
  | "trackers"
  | "budget";
export type AutoSizeInputType = RefObject<AutosizeInput> &
  RefObject<HTMLInputElement>;
