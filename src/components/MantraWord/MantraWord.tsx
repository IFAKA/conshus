import AutosizeInput from "react-input-autosize";
import { useMantraWord } from "../../hooks";
import { AutoSizeInputType } from "../../models";

const MantraWord = () => {
  const {
    selected,
    handleSubmit,
    inputRef,
    value,
    handleChange,
    handleFocus,
    handleUnfocus,
    mantra,
  } = useMantraWord();

  return (
    <>
      {selected ? (
        <form onSubmit={handleSubmit}>
          <AutosizeInput
            autoFocus
            ref={inputRef as AutoSizeInputType}
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleUnfocus}
            inputStyle={{
              fontWeight: 600,
              fontSize: 20,
            }}
          />
        </form>
      ) : (
        <h1 className="text-xl font-semibold">{mantra}</h1>
      )}
    </>
  );
};

export default MantraWord;
