import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex space-x-4 justify-end mb-8">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/units">Units</Link>
      </div>
    </div>
  );
}
