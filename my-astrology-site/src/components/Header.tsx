import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4">
        <h1 className="text-3xl font-bold text-center">
          <Link to="/">星占い</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
