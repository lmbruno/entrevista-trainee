import { useEffect, useState } from "react";

import "./App.css";
import { getCatFact, getCatImage } from "./assets/services/cat";

function App() {
  const [catFact, setCatFact] = useState("");
  const [imageURL, setImageURL] = useState("");

  async function handleClick() {
    const catInfo = await getCatFact();
    setCatFact(catInfo);
  }

  useEffect(() => {
    getCatFact().then((newFact) => setCatFact(newFact));
  }, []);

  useEffect(() => {
    if (!catFact) return;
    const firstWord = catFact.split(" ", 3).join(" ");
    getCatImage(firstWord).then((url) => setImageURL(url));
  }, [catFact]);

  return (
    <>
      <h1>Prueba tecnica trainee</h1>
      {catFact && <p>{catFact}</p>}
      {imageURL && <img src={imageURL} alt={`a cat image saying a word`} />}
      <button onClick={handleClick}>Recover cat fact</button>
    </>
  );
}

export default App;
