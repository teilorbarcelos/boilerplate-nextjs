import { render, act } from "@testing-library/react";
import { useAuthStore } from ".";

describe("useAuthStore", () => {
  test("should set loggedIn to true when called with true", () => {
    act(() => {
      useAuthStore.getState().loggedIn = true;
    });
    expect(useAuthStore.getState().loggedIn).toBe(true);
  });

  test("should set loggedIn to false when called with false", () => {
    act(() => {
      useAuthStore.getState().loggedIn = false;
    });
    expect(useAuthStore.getState().loggedIn).toBe(false);
  });
});
