import { getCatImage } from "../assets/services/cat";
import { useEffect, useState } from "react";

export function useCatImage({ catFact }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (!catFact) return;
    const firstWord = catFact.split(" ", 3).join(" ");
    getCatImage(firstWord).then((url) => setImageURL(url));
  }, [catFact]);

  return {
    imageURL,
  };
}
