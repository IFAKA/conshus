import { useAtom } from "jotai";
import { SectionType } from "../../models";
import { sectionAtom } from "../../store";
import MantraWord from "../MantraWord/MantraWord";

const Header = () => {
  const [, setSection] = useAtom(sectionAtom);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSection(e.target.value as SectionType);

  return (
    <header className="w-full max-w-sm flex justify-between items-center h-11 p-2">
      <MantraWord />
      {/* <select
        name="sections"
        id="sections"
        className="border-r-8 border border-transparent px-2 h-full rounded text-lg cursor-pointer"
        onChange={handleSelect}
      >
        <option value="journals">Journals</option>
        <option value="tables">Tables</option>
        <option value="systems">Systems</option>
      </select> */}
    </header>
  );
};

export default Header;
