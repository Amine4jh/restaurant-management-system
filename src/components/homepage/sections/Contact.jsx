import ContactForm from "../common/ContactForm";

const Contact = () => {
  return (
    <div className="bg-[url(./images/contact-bg.webp)] bg-no-repeat bg-cover">
      <div className="backdrop-brightness-30">
        <div className="max-w-[1240px] mx-auto text-dark py-50 text-center">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-beige">
            <span className="text-lightRed">Get</span> in Touch
          </h1>
          <p className="lg:text-lg lg:px-60 md:px-30 px-10 my-5 opacity-50 text-beige">
            Have questions, feedback, or partnership inquiries? We'd love to
            hear from you!
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
