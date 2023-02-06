import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { inputSelectedAtom, textAreaAtom } from "../../store";

const ScrollToEnd = <T,>({ listenTo }: { listenTo: T[] }) => {
  const [value] = useAtom(textAreaAtom);
  const [inputSelected] = useAtom(inputSelectedAtom);
  const scrollRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (inputSelected && !value) {
      scrollRef.current &&
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
    }
  }, [listenTo, inputSelected]);

  return <li ref={scrollRef} />;
};

export default ScrollToEnd;
