import { useAtom } from "jotai";
import { PencilSimple } from "phosphor-react";
import { editableAtom } from "../../store";

const EditButton = ({ text }: { text: string }) => {
  const [, setEditable] = useAtom(editableAtom);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    setEditable(text);

  return (
    <button className="mr-2 bg-transparent" onClick={handleEdit}>
      <PencilSimple />
    </button>
  );
};

export default EditButton;
