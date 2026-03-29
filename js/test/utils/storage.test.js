import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
} from "vitest";
import { saveUser, getUsername, clearStorage } from "../../utils/storage.js";

describe("getUsername", () => {
  // Ensure storage is clean before each test
  beforeEach(() => {
    clearStorage();
  });

  beforeEach(() => {
    console.log("Setting up test...");
  });

  afterEach(() => {
    console.log("Cleaning up test...");
  });

  beforeAll(() => {
    console.log("Setting up all tests...");
  });

  afterAll(() => {
    console.log("Cleaning up all tests...");
  });

  it("returns the name from the user object in storage", () => {
    console.log("Running test 1");
    // Arrange
    const user = { name: "stiansame", email: "stiros@stud.noroff.no" };
    saveUser(user);

    // Act
    const result = getUsername();

    // Assert
    expect(result).toBe("stiansame");
  });

  it("returns null when no user exists in storage", () => {
    console.log("Running test 2");
    // Arrange
    // (storage already cleared in beforeEach)

    // Act
    const result = getUsername();

    // Assert
    expect(result).toBeNull();
  });
});
