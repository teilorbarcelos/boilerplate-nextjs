import api from "@/lib/api";

describe("API", () => {
  it("should fetch data from the API", async () => {
    const response = await api.get("/hello");
    expect(response.data).toEqual({ name: "John Doe" });
  });
});
