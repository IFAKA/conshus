import { IFlowAction } from "@/models";
import { atomWithStorage } from "jotai/utils";

export const flowAtom = atomWithStorage("flow", [] as IFlowAction[]);
