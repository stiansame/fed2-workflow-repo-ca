import { test, expect } from "@playwright/test";

test.describe("Venue details navigation", () => {
  test("User can click the first venue on the home page and see the Venue details page", async ({
    page,
  }) => {
    // 1️⃣ Navigate to the home page
    await page.goto("/");

    // 2️⃣ Wait for the venue list to load inside #venue-container
    const venueContainer = page.locator("#venue-container");

    // Ensure loading has finished and there is at least one venue
    const firstVenue = venueContainer.locator("*").first();
    await expect(firstVenue).toBeVisible();

    // 3️⃣ Click the first venue
    await firstVenue.click();

    // 4️⃣ Verify the Venue Details heading is visible
    const heading = page.getByRole("heading", { name: /venue details/i });
    await expect(heading).toBeVisible();
  });
});
