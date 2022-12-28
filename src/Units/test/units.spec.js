import { render, screen, cleanup, fireEvent } from "../../common/helpers/renderWrapper";
import { act } from "react-dom/test-utils";
import Units from "../index";

afterEach(cleanup);
describe("Units", () => {
  it("should have units heading", () => {
    render(<Units />);
    expect(screen.getByRole("heading")).toHaveTextContent("Units Page");
  });
  
  it("should trigger the function when clicking the age buttons", async() => {
    const mockCallback = jest.fn()
    render(<Units setModuleCallback={mockCallback}/>)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act (async()=>{
      fireEvent.click(screen.getByRole('button',{name: 'Dark'}))  
    })

    expect(mockCallback).toHaveBeenCalled()
  });

  it("should trigger the function when change range costs", async() => {

    const mockCallback = jest.fn()
    render(<Units setModuleCallback={mockCallback}/>)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act (async()=>{
      fireEvent.change(screen.getByTestId('wood'), { target: { value: 170 } });
    })

    expect(mockCallback).toHaveBeenCalled()
  });
 
});
