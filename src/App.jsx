import { useState } from "react";

import "./App.css";
import { getCatFact, getCatImage } from "./assets/services/data";

function App() {
  const [catFact, setCatFact] = useState("");
  const [imageURL, setImageURL] = useState("");

  async function handleClick() {
    const catInfo = await getCatFact();
    const firstWord = catInfo.fact.split(" ", 1);

    const catImage = await getCatImage(firstWord);
    const catImageURL = URL.createObjectURL(catImage);

    setCatFact(catInfo.fact);
    setImageURL(catImageURL);
  }

  return (
    <>
      <h1>Prueba tecnica trainee</h1>
      {catFact && (
        <div className="content">
          {imageURL && <img src={imageURL} alt={`a cat image saying a word`} />}
          <p>{catFact}</p>
        </div>
      )}
      <button onClick={handleClick}>Recover cat fact</button>
    </>
  );
}

export default App;
