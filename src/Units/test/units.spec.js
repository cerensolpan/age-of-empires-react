import { render, screen, cleanup, fireEvent } from "../../common/helpers/renderWrapper";
import { act } from "react-dom/test-utils";
import Units from "../index";

afterEach(cleanup);
describe("Units", () => {
  it("should have units heading", () => {
    render(<Units />);
    expect(screen.getByRole("heading")).toHaveTextContent("Units Page");
  });
  it("should trigger a function when clicking the age buttons", async() => {
    const mockCallback = jest.fn()
    render(<Units setModuleCallback={mockCallback}/>)

    await act (async()=>{
      fireEvent.click(screen.getByRole('button',{name: 'Dark'}))  
    })
    
    expect(mockCallback).toHaveBeenCalled()
  });
});
