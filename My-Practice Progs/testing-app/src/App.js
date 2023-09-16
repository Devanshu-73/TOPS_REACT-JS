import { useState } from "react";

function App() {
  const colors = ['red', 'blue', 'green', 'black'];
  const [index, setIndex] = useState(-1); // Start with -1 for no color

  const bgChange = () => {
    if (index === colors.length - 1) {
      setIndex(0); // Reset to the first color when reaching the end
    } else {
      setIndex(index + 1); // Increment the index
    }
  }

  return (
    <>
      <div
        id="bgDiv"
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid black',
          backgroundColor: index === -1 ? 'transparent' : colors[index], // Set transparent background for -1 index
        }}
      ></div>
      <button onClick={bgChange}>Click</button>
    </>
  );
}

export default App;
