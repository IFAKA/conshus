import { TextArea, TrackerList, YearGrid } from "@/components";
import { useAtom } from "jotai";
import { TODAY } from "../../constants";
import { daysAtom, textAreaAtom } from "../../store";

const Trackers = () => {
  const [value] = useAtom(textAreaAtom);
  const [days, setDays] = useAtom(daysAtom);

  const addItem = () => {
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

  return (
    <>
      <YearGrid />
      <TrackerList />
      <TextArea placeholder={"Habit"} onSubmit={addItem} />
    </>
  );
};

export default Trackers;
