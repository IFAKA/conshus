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
    handleClick,
    mantra,
  } = useMantraWord();

  return (
    <>
      {selected ? (
        <form onSubmit={handleSubmit} className="overflow-auto scrollbar-none">
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
              paddingLeft: "4px",
              paddingRight: "4px",
            }}
          />
        </form>
      ) : (
        <button
          onClick={handleClick}
          className="text-xl px-1 font-semibold truncate"
        >
          {mantra}
        </button>
      )}
    </>
  );
};

export default MantraWord;
