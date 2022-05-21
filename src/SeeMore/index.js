import { useState } from "react";

const SeeMore = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>See more and more</p>
      <p>{counter}</p>
      <button onClick={() => setCounter((previouscounter) => previouscounter + 1)}>
        Increase number
      </button>
    </>
  );
};

export default SeeMore;
