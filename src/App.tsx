import { useAtom } from "jotai";
import {
  Budget,
  Header,
  Journals,
  Systems,
  Tables,
  Trackers,
} from "./components";
import { sectionAtom } from "./store";

function App() {
  const [section] = useAtom(sectionAtom);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md flex flex-col h-screen border border-neutral-400 dark:border-neutral-800 dark:bg-black">
        <Header />

        {section === "journals" ? (
          <Journals />
        ) : section === "tables" ? (
          <Tables />
        ) : section === "systems" ? (
          <Systems />
        ) : section === "trackers" ? (
          // make it work as you expect
          <Trackers />
        ) : section === "budget" ? (
          <Budget />
        ) : null}
      </div>
    </div>
  );
}

export default App;
