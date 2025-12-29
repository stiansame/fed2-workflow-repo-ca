import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    // 1️⃣ Go to login page
    await page.goto("/login/");

    // 2️⃣Fill in form using name attributes
    await page.locator('input[name="email"]').fill(process.env.E2E_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.E2E_USER_PASSWORD);

    // 3️⃣Click login
    await page.getByRole("button", { name: "Login" }).click();

    // 4️⃣Check if we see logout button - means we're logged in
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("wrong password shows error", async ({ page }) => {
    // 1️⃣ Go to login page
    await page.goto("/login/");

    // 2️⃣Fill in form using name attributes
    await page.locator('input[name="email"]').fill(process.env.E2E_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrongpassword");

    // 3️⃣Click login
    await page.getByRole("button", { name: "Login" }).click();

    // 4️⃣ Check for error in message container
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
