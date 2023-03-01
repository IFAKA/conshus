import { TODAY } from "@/constants";
import { cursorAtom, daysAtom } from "@/store";
import { getXTimesNumber } from "@/utils";
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
    const times = getXTimesNumber(value);
    let newSystems = [...systems];
    let newDays = [...days];

    newSystems[cursor] = {
      times: newSystems[cursor].times >= times ? 0 : newSystems[cursor].times,
      text: value.trim(),
    };
    newDays[idx] = { date: newDays[idx].date, systems: newSystems };

    setDays(newDays);
  };

  const addSystem = (value: string) => {
    const text = value.trim();
    const todayIdx = days.findIndex(
      (day) => Date.parse(`${day.date}`) === Date.parse(`${TODAY}`)
    );

    const isRepeated = days[todayIdx].systems?.some(
      (system) => system.text.toLowerCase() === text.toLowerCase()
    );

    if (!isRepeated) {
      const times = getXTimesNumber(text);
      let newDays = [...days];
      newDays[todayIdx] = {
        date: newDays[todayIdx].date,
        systems: [...newDays[todayIdx].systems, { text, times }],
      };
      setDays(newDays);
    }
  };

  return { systems, deleteSystem, updateSystem, addSystem };
};

export default useTrackers;
