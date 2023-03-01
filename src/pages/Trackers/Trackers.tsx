import { List, TextArea, TrackersStats, YearGrid } from "@/components";
import { useTrackers } from "@/hooks";
import { daysAtom } from "@/store";
import { useAtom } from "jotai";

const Trackers = () => {
  const { systems, deleteSystem, updateSystem, addSystem } = useTrackers();
  const [days, setDays] = useAtom(daysAtom);
  return (
    <>
      <button
        className="bg-neutral-800 rounded mx-3 mb-3"
        onClick={() => {
          const newDays = days.map((day) => ({
            date: day.date,
            systems: day.systems.map((system) => {
              if (system.hasOwnProperty("checked")) {
                return {
                  text: system.text,
                  times: system.checked ? 0 : 1,
                };
              } else {
                return system;
              }
            }),
          }));
          setDays(newDays);
        }}
      >
        Update
      </button>
      <TrackersStats />
      <YearGrid />
      <List
        items={systems}
        position="top-left"
        onDelete={deleteSystem}
        onUpdate={updateSystem}
      />
      <TextArea placeholder={"Habit"} onSubmit={addSystem} />
    </>
  );
};

export default Trackers;
