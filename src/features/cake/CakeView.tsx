import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { order, restock } from "./cakeSlice";

function CakeView() {
  const [num, setNum] = useState("1");
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>number of cakes: {numOfCakes}</h1>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch(order(Number(num) || 0))}>
        order a cake
      </button>
      <button onClick={() => dispatch(restock(Number(num) || 0))}>
        restock a cake
      </button>
    </>
  );
}

export default CakeView;
