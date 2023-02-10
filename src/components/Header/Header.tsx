import { useAtom } from "jotai";
import { SectionType } from "../../models";
import { sectionAtom } from "../../store";
import MantraWord from "../MantraWord/MantraWord";

const Header = () => {
  const [section, setSection] = useAtom(sectionAtom);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSection(e.target.value as SectionType);

  return (
    <header className="w-full max-w-md flex justify-between items-center h-11 px-2 py-2">
      <MantraWord />
      <select
        value={section}
        name="sections"
        id="sections"
        className="ml-2 border-r-8 border border-transparent px-2 h-full rounded text-lg cursor-pointer"
        onChange={handleSelect}
      >
        <option value="journals">Journals</option>
        <option value="tables">Tables</option>
        <option value="flow">Flow</option>
        <option value="trackers">Trackers</option>
        <option value="budget">Budget</option>
      </select>
    </header>
  );
};

export default Header;
