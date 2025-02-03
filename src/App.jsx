import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";
import "./App.css";

function App() {
  const { catFact, refreshFact } = useCatFact();
  const { imageURL } = useCatImage({ catFact });

  function handleClick() {
    refreshFact();
  }

  return (
    <>
      <h1>Prueba tecnica trainee</h1>
      {catFact && <p>{catFact}</p>}
      {imageURL && (
        <img
          src={imageURL}
          alt={`a cat image saying ${catFact.split(" ", 3).join(" ")}`}
        />
      )}
      <button onClick={handleClick}>Recover cat fact</button>
    </>
  );
}

export default App;
