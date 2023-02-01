import { useAtom } from "jotai";
import { systemsAtom } from "../../store";
import SystemsInput from "../SystemsInput/SystemsInput";

const Systems = () => {
  const [systems] = useAtom(systemsAtom);
  return (
    <>
      <ul className="flex-1 flex flex-col px-2 scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md scrollbar-track-neutral-800 scrollbar-thumb-neutral-700">
        {systems.map(({ text }, i) => (
          <li key={text}>
            <p className="truncate">
              <span className="text-md">{i}. </span>
              <span className="text-xl">{text}</span>
            </p>
          </li>
        ))}
      </ul>
      <SystemsInput />
    </>
  );
};

export default Systems;
