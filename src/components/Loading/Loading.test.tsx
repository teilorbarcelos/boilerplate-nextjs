import { render } from "@testing-library/react";
import { Loading } from ".";

describe("Loading component", () => {
  test("renders loading image", () => {
    const { getByAltText } = render(<Loading />);
    const loadingImg = getByAltText("Loading image");
    expect(loadingImg).toBeInTheDocument();
  });

  test("loading image has correct src attribute", () => {
    const { getByAltText } = render(<Loading />);
    const loadingImg = getByAltText("Loading image") as HTMLImageElement;
    expect(loadingImg.src).toContain("%2Ficons%2Floading-gif.gif");
  });

  test("loading image has correct dimensions", () => {
    const { getByAltText } = render(<Loading />);
    const loadingImg = getByAltText("Loading image") as HTMLImageElement;
    expect(loadingImg.width).toBe(70);
    expect(loadingImg.height).toBe(70);
  });

  test("container has correct class name", () => {
    const { getByTestId } = render(<Loading />);
    const container = getByTestId("loading-container");
    expect(container).toHaveClass("container");
  });
});
