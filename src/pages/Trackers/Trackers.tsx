import { List, TextArea, YearGrid } from "@/components";
import { useTrackers } from "@/hooks";

const Trackers = () => {
  const { systems, deleteSystem, updateSystem, addSystem } = useTrackers();
  return (
    <>
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
