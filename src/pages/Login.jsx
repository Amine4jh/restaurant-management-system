import LoginForm from "../components/auth/LoginForm";
import AuthHeader from "../layouts/AuthHeader";
import Footer from "../layouts/Footer";

const Login = () => {
  return (
    <div className="bg-beige">
      <AuthHeader />
      <div className="max-w-[1240px] mx-auto pt-30 pb-50">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
