import {
  CAT_ENDPOINT_IMAGE_URL,
  CAT_ENDPOINT_RANDOM_FACT,
} from "../../constants";

export async function getCatFact() {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const catInfo = await response.json();

  return catInfo.fact;
}

export async function getCatImage(firstWord) {
  const response = await fetch(CAT_ENDPOINT_IMAGE_URL + firstWord);
  const catImg = await response.blob();
  return URL.createObjectURL(catImg);
}
