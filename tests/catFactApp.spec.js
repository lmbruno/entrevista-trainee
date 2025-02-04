// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(LOCALHOST);
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(/CatFact App/);
});

test("app is showing cat fact", async ({ page }) => {
  const catFact = await page.getByRole("paragraph").innerText;

  await expect(catFact.length).toBeGreaterThan(0);
});

test("app is showing cat image", async ({ page }) => {
  const img = await page.getByRole("img");
  const imgSrc = await img.getAttribute("src");

  await expect(imgSrc?.length).toBeGreaterThan(0);
});

test("fact is changing when button is clicked", async ({ page }) => {
  const paragraph = await page.getByRole("paragraph");
  const catFact = await paragraph.innerText();

  await page.getByRole("button").click();

  await expect(page.getByRole("paragraph")).not.toHaveText(catFact);
  await expect(page.getByRole("paragraph")).toBeVisible();
});

test("image is changing when button is clicked", async ({ page }) => {
  const img = await page.getByRole("img");
  const imgSrc = await img.getAttribute("src");

  await page.getByRole("button").click();

  await expect(page.getByRole("img")).toBeVisible();
  await expect(page.getByRole("img").getAttribute("src")).toBeDefined();
});
