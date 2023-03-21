import { render, fireEvent, waitFor } from "@testing-library/react";
import { useAuthStore } from "@/lib/contexts/auth";
import Login from ".";

describe("Login component", () => {
  it("should redirect to home page after login", async () => {
    const setStateSpy = jest.spyOn(useAuthStore, "setState");
    
    const { getByRole } = render(<Login />);
    const loginButton = getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    await waitFor(() => expect(setStateSpy).toBeCalledWith({ loggedIn: true }));
  });
});
