const { useState } = React;

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => setResult(Number(num1) + Number(num2));
  const sub = () => setResult(Number(num1) - Number(num2));
  const mul = () => setResult(Number(num1) * Number(num2));
  const div = () => setResult(Number(num1) / Number(num2));

  return (
    <div>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />

      <button onClick={add}>Add</button>
      <button onClick={sub}>Subtract</button>
      <button onClick={mul}>Multiply</button>
      <button onClick={div}>Divide</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);