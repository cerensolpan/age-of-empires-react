import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex space-x-4 justify-end my-8">
      <div>
        <Link className=" btn btn-blue" to="/">Home</Link>
      </div>
      <div >
        <Link  className=" btn btn-blue" to="/units">Units</Link>
      </div>
    </div>
  );
}
