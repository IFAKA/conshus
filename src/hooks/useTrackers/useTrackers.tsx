import { TODAY } from "@/constants";
import { cursorAtom, daysAtom, textAreaAtom } from "@/store";
import { useAtom } from "jotai";

const useTrackers = () => {
  const [cursor] = useAtom(cursorAtom);
  const [days, setDays] = useAtom(daysAtom);
  const idx = days?.findIndex(
    ({ date }) => Date.parse(`${date}`) === Date.parse(`${TODAY}`)
  );
  const systems = days[idx]?.systems || [];

  const deleteSystem = () => {
    const systemToDelete = systems[cursor];
    const newSystems = systems.filter((system) => system !== systemToDelete);
    let newDays = [...days];

    newDays[idx] = { date: newDays[idx].date, systems: newSystems };

    setDays(newDays);
  };

  const updateSystem = (value: string) => {
    let newSystems = [...systems];
    let newDays = [...days];

    newSystems[cursor] = {
      checked: newSystems[cursor].checked,
      text: value.trim(),
    };
    newDays[idx] = { date: newDays[idx].date, systems: newSystems };

    setDays(newDays);
  };

  const addSystem = (value: string) => {
    const isRepeated = !days.some((day) =>
      day.systems.some((system) => system.text === value.trim())
    );

    if (isRepeated) {
      let newDays = [...days];
      const idx = newDays.findIndex(
        (day) => Date.parse(`${day.date}`) === Date.parse(`${TODAY}`)
      );
      newDays[idx] = {
        date: newDays[idx].date,
        systems: [
          ...newDays[idx].systems,
          { checked: false, text: value.trim() },
        ],
      };
      setDays(newDays);
    }
  };
  return { systems, deleteSystem, updateSystem, addSystem };
};

export default useTrackers;
