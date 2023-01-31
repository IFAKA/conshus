import { useAtom } from "jotai";
import { useRef } from "react";
import { systemsAtom } from "../../store";

const Systems = () => {
  const [systems] = useAtom(systemsAtom);
  const boxRef = useRef(null);
  return (
    <>
      {systems.map((system, i) => (
        <li
          key={i}
          className={`whitespace-pre-wrap text-lg border-neutral-700 border-2 px-2 py-1 rounded ${
            i !== 0 && "mt-4"
          }`}
        >
          {system.text.charAt(0).toUpperCase() + system.text.slice(1)}
        </li>
      ))}
      <div ref={boxRef} />
    </>
  );
};

export default Systems;
