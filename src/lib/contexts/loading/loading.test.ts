import { act } from "@testing-library/react";
import { useLoadingStore } from ".";

describe("useLoadingStore", () => {
  test("should set isLoading to true when showLoading is called", () => {
    act(() => {
      useLoadingStore.getState().showLoading();
    });
    expect(useLoadingStore.getState().isLoading).toBe(true);
  });

  test("should set isLoading to false when hideLoading is called", () => {
    act(() => {
      useLoadingStore.getState().hideLoading();
    });
    expect(useLoadingStore.getState().isLoading).toBe(false);
  });
});
