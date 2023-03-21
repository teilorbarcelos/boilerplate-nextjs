import { renderHook } from "@testing-library/react";
import { useRequest } from "./useRequest";
import { act } from "@testing-library/react";

test("should test useRequest", async () => {
  const { result } = renderHook(() => useRequest());

  await act(async () => {
    const response = await result.current.request({
      method: "get",
      url: `/use-request`,
    });
    expect(JSON.stringify(response.data)).toBe('{"name":"John Doe"}');
  });
});
