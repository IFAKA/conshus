import { useAtom } from "jotai";
import { Budget, Flow, Header, Journals, Tables, Trackers } from "./components";
import { sectionAtom } from "./store";

function App() {
  const [section] = useAtom(sectionAtom);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md flex flex-col h-screen border border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 bg-neutral-50">
        <Header />

        {section === "journals" ? (
          <Journals />
        ) : section === "tables" ? (
          <Tables />
        ) : section === "flow" ? (
          <Flow />
        ) : section === "trackers" ? (
          <Trackers />
        ) : section === "budget" ? (
          <Budget />
        ) : null}
      </div>
    </div>
  );
}

export default App;
