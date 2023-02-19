import { List, TextArea, TrackersStats, YearGrid } from "@/components";
import { useTrackers } from "@/hooks";

const Trackers = () => {
  const { systems, deleteSystem, updateSystem, addSystem } = useTrackers();
  return (
    <>
      <TrackersStats />
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
