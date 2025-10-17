import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <header className="bg-dark">
      <div className="max-w-[1240px] mx-auto py-9 px-5">
        <Link to={"/"} className="text-primary text-3xl font-bold">
          Red<span className="text-gold">Sky</span>
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
