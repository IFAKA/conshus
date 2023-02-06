import { useAtom } from "jotai";
import { systemsAtom, textAreaAtom } from "../../store";
import SystemList from "../SystemList/SystemList";
import TextArea from "../TextArea/TextArea";

const Systems = () => {
  const [value] = useAtom(textAreaAtom);
  const [systems, setSystems] = useAtom(systemsAtom);

  const addSystem = () => {
    if (!systems.some((system) => system.text === value.trim())) {
      setSystems((crr) => [...crr, { days: [], text: value.trim() }]);
    }
  };

  return (
    <>
      <SystemList />
      <TextArea placeholder="System" onSubmit={addSystem} />
    </>
  );
};

export default Systems;
