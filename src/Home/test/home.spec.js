import { render, screen, cleanup } from "@testing-library/react";
import Home from "../index";

afterEach(cleanup);
describe("Home", () => {
  it("should have heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent("Home Page");
  });
  it("should have img", () => {
    render(<Home />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/images/ageOfEmpires.jpeg"
    );
  });
});
