import { render, screen } from "@testing-library/react";
import ProductItem from "@/components/catalog/ProductItem";
import "@testing-library/jest-dom";
import { productDetailsItemInitialValue } from "@/types/Catalog";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/image", () => {
  return () => "img";
});

describe("Render Child of ProductItem", () => {
  it("should renders AddToCart Button when rendering ProductItem", () => {
    render(<ProductItem productItem={productDetailsItemInitialValue} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add To Cart");
  });
});
