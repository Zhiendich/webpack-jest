import React from "react";
import Text from "../component/Text";
import Counter from "../component/Counter";
const Main = () => {
  return (
    <div data-testid="main-page">
      <Text />
      <Counter />
    </div>
  );
};

export default Main;
