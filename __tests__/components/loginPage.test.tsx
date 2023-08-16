import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/pages/login";
import { useRouter } from "next/router";
import { GlobalContextProvider } from "@/context/global";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();

useRouter.mockReturnValue({
  query: {},
  push: pushMock,
});

jest.mock("next/image", () => {
  return () => "img";
});

describe("Render Login Page", () => {
  it("should renders a Login Form", () => {
    render(
      <GlobalContextProvider>
        <Login />
      </GlobalContextProvider>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent("Login");
  });
});
