/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername, clearStorage } from "../../utils/storage.js";

describe("getUsername", () => {
  // Ensure storage is clean before each test
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    // Arrange
    const user = { name: "stiansame", email: "stiros@stud.noroff.no" };
    saveUser(user);

    // Act
    const result = getUsername();

    // Assert
    expect(result).toBe("stiansame");
  });

  it("returns null when no user exists in storage", () => {
    // Arrange
    // (storage already cleared in beforeEach)

    // Act
    const result = getUsername();

    // Assert
    expect(result).toBeNull();
  });
});
