import { useAtom } from "jotai";
import { useEffect } from "react";
import { TODAY } from "../../constants";
import { daysAtom, tomorrowAtom } from "../../store";

const YearGrid = () => {
  const [days, setDays] = useAtom(daysAtom);
  const [tomorrow, setTomorrow] = useAtom(tomorrowAtom);

  useEffect(() => {
    if (Date.parse(`${TODAY}`) === Date.parse(`${tomorrow}`)) {
      setTomorrow(new Date(new Date(tomorrow).getTime() + 1 * 86400000));
      let newDays = [...days];
      const idx = days.findIndex(
        (day) => Date.parse(`${day.date}`) === Date.parse(`${TODAY}`)
      );
      const dayBeforeIdx = idx - 1;
      const newSystems = newDays[dayBeforeIdx].systems.map((system) => ({
        text: system.text,
        checked: false,
      }));
      newDays[idx] = {
        date: newDays[idx].date,
        systems: newSystems,
      };
      setDays(newDays);
    }
  }, []);

  return (
    <div className="mx-2 mb-1 p-0.5 display flex justify-center items-center flex-wrap">
      {days.map((day, i) => (
        <div
          key={i}
          className={`sm:p-[5px] p-1 m-[1px] ${
            day.systems.length > 0 &&
            day.systems.every((system) => system.checked === true)
              ? "bg-neutral-700 dark:bg-neutral-300"
              : day.systems.every((system) => system.checked === false)
              ? "bg-neutral-300 dark:bg-neutral-800"
              : "bg-neutral-500 dark:bg-neutral-600"
          } ${
            Date.parse(`${day.date}`) === Date.parse(`${TODAY}`) &&
            "outline outline-[1.5px]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default YearGrid;
