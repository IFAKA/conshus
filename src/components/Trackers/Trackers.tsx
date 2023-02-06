import { useAtom } from "jotai";
import { systemsAtom, textAreaAtom, trackersAtom } from "../../store";
import TextArea from "../TextArea/TextArea";
import TrackerList from "../TrackerList/TrackerList";
import YearGrid from "../YearGrid/YearGrid";

const Trackers = () => {
  const [value] = useAtom(textAreaAtom);
  const [trackers, setTrackers] = useAtom(trackersAtom);

  const addItem = () => {
    if (!trackers.some((tracker) => tracker.text === value.trim())) {
      setTrackers((crr) => [...crr, { days: [], text: value.trim() }]);
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
