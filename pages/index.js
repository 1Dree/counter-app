import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);

  const addCount = () => setCount(count + 1);

  return (
    <div>
      <p>{count}</p>

      <button onClick={addCount}>add count</button>
    </div>
  );
}

export default Home;
