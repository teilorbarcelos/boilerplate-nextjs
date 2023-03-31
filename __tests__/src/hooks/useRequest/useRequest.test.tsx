import { renderHook } from "@testing-library/react";
import { useRequest } from "@/hooks/useRequest";
import { act } from "@testing-library/react";

describe("useRequest", () => {
  test("should test useRequest with success response", async () => {
    const { result } = renderHook(() => useRequest());

    await act(async () => {
      const response = await result.current.request({
        method: "get",
        url: `/use-request`,
      });

      expect(JSON.stringify(response.data)).toBe('{"name":"John Doe"}');
    });
  });

  test("should test useRequest with error response", async () => {
    try {
      const { result } = renderHook(() => useRequest());

      await act(async () => {
        await result.current.request({
          method: "get",
          url: `/wrong-route`,
        });
      });
    } catch (error) {
      expect(error).toBe("Request failed with status code 404");
    }
  });
});
