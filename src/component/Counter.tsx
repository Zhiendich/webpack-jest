import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { decrement, increment } from "../store/reducers/counterReducer";
import { selectCounter } from "../store/selectors/counterSelector";

const Counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCounter);
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1 data-testid="counter-value">Счетчик = {counter}</h1>
      <button data-testid="counter-increment" onClick={incrementHandler}>
        Инкремент
      </button>
      <button data-testid="counter-decrement" onClick={decrementHandler}>
        Декремент
      </button>
    </div>
  );
};

export default Counter;
