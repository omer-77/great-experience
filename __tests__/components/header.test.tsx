import { render, screen } from "@testing-library/react";
import Header from "@/components/Layout/Header";
import "@testing-library/jest-dom";


jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/image", () => {
  return () => "img";
});

describe("Render Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Great Experince Store");
  });
});
