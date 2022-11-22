import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex space-x-4 justify-end my-8">
      <div>
        <Link className="border border-blue-200 bg-blue-200 px-4 py-2 rounded-lg hover:bg-blue-100 cursor-pointer" to="/">Home</Link>
      </div>
      <div >
        <Link className="border border-blue-200 bg-blue-200 px-4 py-2 rounded-lg hover:bg-blue-100 cursor-pointer" to="/units">Units</Link>
      </div>
    </div>
  );
}
