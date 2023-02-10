import { atomWithStorage } from "jotai/utils";
import { IFlowAction } from "../models";

export const flowAtom = atomWithStorage("flow", [] as IFlowAction[]);
