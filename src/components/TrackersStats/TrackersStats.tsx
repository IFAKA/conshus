import { initDay } from "@/models";
import { useAtom } from "jotai";
import { useEffect, useMemo } from "react";
import { TODAY } from "../../constants";
import { daysAtom, tomorrowAtom } from "../../store";
import Tooltip from "../Tooltip/Tooltip";

const TrackersStats = () => {
  const [days, setDays] = useAtom(daysAtom);
  const [tomorrow, setTomorrow] = useAtom(tomorrowAtom);

  const today = useMemo(
    () =>
      days.find(
        (day) => Date.parse(`${day.date}`) === Date.parse(`${TODAY}`)
      ) || initDay,
    [days]
  );

  const completed = useMemo(
    () =>
      days.filter(
        (day) =>
          day.systems.length > 0 &&
          day.systems.every((system) => system.checked === true)
      ).length || 0,
    [days]
  );
  const missSomething = useMemo(
    () =>
      days.filter(
        (day) =>
          day.systems.length > 0 &&
          !day.systems.every((system) => system.checked === true) &&
          !day.systems.every((system) => system.checked === false)
      ).length || 0,
    [days]
  );
  const didNothing = useMemo(
    () =>
      days.filter(
        (day) =>
          day.systems.length > 0 &&
          day.systems.every((system) => system.checked === false)
      ).length || 0,
    [days]
  );

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
    <div className="flex justify-between mx-2 mb-2">
      <h3
        className={`text-lg font-semibold leading-6 px-[11px] py-[7px] rounded-xl ease-in-out duration-150 ${
          today.systems.length > 0 &&
          today.systems.every((system) => system.checked === true)
            ? "bg-neutral-700 dark:bg-neutral-300 dark:text-neutral-900 text-white"
            : today.systems.every((system) => system.checked === false)
            ? "bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300"
            : "bg-neutral-500 dark:bg-neutral-600 dark:text-neutral-300 text-white"
        }`}
      >
        Today
      </h3>
      <div className="flex items-center">
        <div className="outline outline-1 rounded-xl flex items-center">
          <Tooltip label="Uncompleted days">
            <div className="text-lg leading-6 px-[11px] py-[7px] rounded-l-xl bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300">
              {didNothing}
            </div>
          </Tooltip>
          <Tooltip label="Almost completed days">
            <div className="text-lg leading-6 px-[11px] py-[7px] bg-neutral-500 dark:bg-neutral-600 dark:text-neutral-300 text-white">
              {missSomething}
            </div>
          </Tooltip>
          <Tooltip label="Completed days">
            <div className="text-lg leading-6 px-[11px] py-[7px] rounded-r-xl bg-neutral-700 dark:bg-neutral-300 dark:text-neutral-900 text-white">
              {completed}
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default TrackersStats;
