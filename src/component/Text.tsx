import React, { useState } from "react";

const Text = () => {
  const [data, setData] = useState<object | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const changeToggleHandler = () => {
    setToggle((prev) => !prev);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div>
      <h1 data-testid="input-element">{input}</h1>
      {toggle && <h1 data-testid="toggle-element">toogle</h1>}
      {data && <h1>data</h1>}
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
      voluptates iusto quaerat omnis accusamus aliquam cupiditate
      exercitationem! Nemo quaerat voluptas placeat autem, vitae, rerum
      molestiae vero, eius consectetur ducimus labore?
      <button data-testid="toggle-button" onClick={changeToggleHandler}>
        Click
      </button>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="input value"
      />
    </div>
  );
};

export default Text;
