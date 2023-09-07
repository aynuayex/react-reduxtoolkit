import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { order, restock } from "./icecreamSlice";

function IcecreamView() {
  const [num, setNum] = useState("1");
  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIcecreams
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>number of icecreams: {numOfIcecreams}</h1>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch(order(Number(num) || 0))}>
        order an icecream
      </button>
      <button onClick={() => dispatch(restock(Number(num) || 0))}>
        restock an icecream
      </button>
    </>
  );
}

export default IcecreamView;
