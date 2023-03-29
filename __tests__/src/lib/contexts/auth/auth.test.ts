import { act } from "@testing-library/react";
import { useAuthStore, UserInfoProps } from "@/lib/contexts/auth";

describe("useAuthStore", () => {
  beforeEach(() => {
    useAuthStore.setState({ loggedIn: false, userInfo: undefined });
  });

  test("default state", () => {
    const { loggedIn, userInfo } = useAuthStore.getState();
    expect(loggedIn).toBe(false);
    expect(userInfo).toBeUndefined();
  });

  test("sets loggedIn state", () => {
    const loggedIn = true;
    act(() => {
      useAuthStore.setState({ loggedIn });
    });
    expect(useAuthStore.getState().loggedIn).toBe(loggedIn);
  });

  test("sets userInfo state", () => {
    const userInfo: UserInfoProps = {
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
    };
    act(() => {
      useAuthStore.setState({ userInfo });
    });
    expect(useAuthStore.getState().userInfo).toEqual(userInfo);
  });
});
