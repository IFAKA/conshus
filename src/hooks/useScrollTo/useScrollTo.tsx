import { useEffect, useRef, useState } from "react";

const useScrollTo = <T,>(listenTo: T, initState: boolean = true) => {
  const [firstLoad, setFirstLoad] = useState(initState);
  const scrollRef = useRef<HTMLLIElement>(null);

  const scrollToRef = () =>
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

  useEffect(() => {
    firstLoad ? setFirstLoad(false) : scrollToRef();
  }, [listenTo]);

  return scrollRef;
};

export default useScrollTo;
