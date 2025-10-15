import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <header className="py-9 px-15 bg-dark">
      <Link to={"/"} className="text-primary text-3xl font-bold">
        Red<span className="text-gold">Sky</span>
      </Link>
    </header>
  );
};

export default AuthHeader;
