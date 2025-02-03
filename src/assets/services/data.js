import {
  CAT_ENDPOINT_IMAGE_URL,
  CAT_ENDPOINT_RANDOM_FACT,
} from "../../constants";

export async function getCatFact() {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  return await response.json();
}

export async function getCatImage(firstWord) {
  const response = await fetch(CAT_ENDPOINT_IMAGE_URL + firstWord);
  return await response.blob();
}
