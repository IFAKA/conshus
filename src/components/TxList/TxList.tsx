import { useAtom } from "jotai";
import { budgetAtom, cursorAtom, editableAtom } from "../../store";
import { ScrollToEnd } from "../ScrollToEnd";
import { TextAreaEdit } from "../TextAreaEdit";
import { TextItem } from "../TextItem";

const TxList = () => {
  const [budget, setBudget] = useAtom(budgetAtom);
  const [cursor] = useAtom(cursorAtom);
  const [editable] = useAtom(editableAtom);

  const handleDelete = (i: number) => () => {
    const systemToDelete = budget[i];
    const newtrackers = budget.filter((system) => system !== systemToDelete);
    setBudget(newtrackers);
  };

  const updateList = (i: number) => (value: string) => {
    let newtrackers = [...budget];
    newtrackers[i] = { text: value, date: newtrackers[i].date };
    setBudget(newtrackers);
  };

  return (
    <ul className="flex-1 flex border-neutral-800 flex-col-reverse items-end px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-300">
      <ScrollToEnd listenTo={budget} />
      {budget.map(({ text }, i) => (
        <div key={text}>
          {editable && cursor === i ? (
            <TextAreaEdit onSubmit={updateList(i)} />
          ) : (
            <TextItem i={i} text={text} onDelete={handleDelete(i)} />
          )}
        </div>
      ))}
    </ul>
  );
};

export default TxList;
