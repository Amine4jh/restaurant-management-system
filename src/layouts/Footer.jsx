const Footer = () => {
  return (
    <footer className="bg-dark text-beige pt-30">
      <div className="flex items-start justify-evenly">
        <a href="/">
          <h1 className="text-primary text-5xl font-bold">
            Red<span className="text-gold">Sky</span>
          </h1>
        </a>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-5">Quick Links</h2>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            Restaurant
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            Features
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            About
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-5">Social Links</h2>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            GitHub
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            YouTube
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            X
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-5">Additional Links</h2>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            Terms of Service
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            Carrer
          </a>
          <a
            href=""
            className="text-lg opacity-50 transition duration-150 ease hover:opacity-100 hover:underline"
          >
            FAQs
          </a>
        </div>
      </div>
      <p className="text-center opacity-50 mt-20">
        © 2025 <b>RedSky</b>. All rights reserved.
      </p>
      <p className="text-center opacity-50">
        Powered by <b>HeroSolve Dev.</b>
      </p>
    </footer>
  );
};

export default Footer;
