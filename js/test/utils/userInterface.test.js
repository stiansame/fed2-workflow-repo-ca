import {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from "vitest";
import { isActivePath } from "../../utils/userInterface.js";

describe("isActivePath", () => {
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

  it("returns true when current path matches href exactly", () => {
    // Arrange
    const href = "/login";
    const currentPath = "/login";

    // Act
    const result = isActivePath(href, currentPath);

    // Assert
    expect(result).toBe(true);
  });

  it('returns true for root path ("/") when path is "/"', () => {
    // Arrange
    const href = "/";
    const currentPath = "/";

    // Act
    const result = isActivePath(href, currentPath);

    // Assert
    expect(result).toBe(true);
  });

  it('returns true for root path ("/") when path is "/index.html"', () => {
    // Arrange
    const href = "/";
    const currentPath = "/index.html";

    // Act
    const result = isActivePath(href, currentPath);

    // Assert
    expect(result).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    // Arrange
    const href = "/venue";
    const currentPath = "/venue/?id=222";

    // Act
    const result = isActivePath(href, currentPath);

    // Assert
    expect(result).toBe(true);
  });

  it("returns false when paths do not match", () => {
    // Arrange
    const href = "/login";
    const currentPath = "/register";

    // Act
    const result = isActivePath(href, currentPath);

    // Assert
    expect(result).toBe(false);
  });
});
