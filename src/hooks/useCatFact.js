import { useState, useEffect } from "react";
import { getCatFact } from "../assets/services/cat";

export function useCatFact() {
  const [catFact, setCatFact] = useState("");

  const refreshFact = () => {
    getCatFact().then((newFact) => setCatFact(newFact));
  };

  useEffect(refreshFact, []);

  return {
    catFact,
    refreshFact,
  };
}
