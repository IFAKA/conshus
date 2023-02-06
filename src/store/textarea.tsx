import { atom } from "jotai";

export const textAreaAtom = atom("");
export const refAtom = atom(
  null as React.RefObject<HTMLTextAreaElement> | null
);
export const editableAtom = atom("");
