import { render, screen, cleanup } from "../../common/helpers/renderWrapper";
import Units from "../index";

afterEach(cleanup);
describe("Units", () => {
  it("should have units heading", () => {
    render(<Units />);
    expect(screen.getByRole("heading")).toHaveTextContent("Units Page");
  });
});
