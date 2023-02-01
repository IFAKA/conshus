import { useAtom } from "jotai";
import { Header, Journals, Systems } from "./components";
import { sectionAtom } from "./store";

function App() {
  const [section] = useAtom(sectionAtom);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-sm flex flex-col h-screen border border-neutral-800">
        <Header />

        {!section || section === "journals" ? (
          <Journals />
        ) : section === "tables" ? (
          <></>
        ) : section === "systems" ? (
          <Systems />
        ) : null}
      </div>
    </div>
  );
}

export default App;
