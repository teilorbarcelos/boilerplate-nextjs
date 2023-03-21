import { render, fireEvent, waitFor } from "@testing-library/react";
import { useAuthStore } from "@/lib/contexts/auth";
import Login from ".";
import { useRouter } from "next/router";

describe("Login component", () => {
  beforeEach(() => {
    useAuthStore.setState({ loggedIn: false, userInfo: undefined });
  });

  test("renders login button", () => {
    const { getByRole } = render(<Login />);
    const loginButton = getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("successful login updates auth store and redirects to home page", async () => {
    const routerPushSpy = jest.spyOn(useRouter(), "push");
    const { getByRole } = render(<Login />);
    const loginButton = getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(useAuthStore.getState()).toEqual({
        loggedIn: true,
        userInfo: {
          id: "123456",
          name: "John Doe",
          email: "john@email.com",
        },
      });
      expect(routerPushSpy).toBeCalledWith("/");
    });
  });
});
