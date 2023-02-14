import { cursorAtom } from "@/store";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

const useClickOutside = (id: string | number, cb?: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useAtom(cursorAtom);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        cursor === id &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setCursor(-1);
        cb && cb();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, cursor]);

  return ref;
};

export default useClickOutside;
