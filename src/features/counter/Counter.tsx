import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { increment, decrement, addBy } from "./counterSlice";

export function Counter() {
  const value = useSelector((s: RootState) => s.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Redux Counter</h2>
      <p>Valor: <strong>{value}</strong></p>
      <div style={{ display: "flex", gap: ".5rem" }}>
        <button className="btn" onClick={() => dispatch(decrement())}>-</button>
        <button className="btn" onClick={() => dispatch(increment())}>+</button>
        <button className="btn" onClick={() => dispatch(addBy(5))}>+5</button>
      </div>
    </div>
  );
}
