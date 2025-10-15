import ContactForm from "../homepage/ContactForm";

const Contact = () => {
  return (
    <div className="bg-[url(./images/contact-bg.jpg)] bg-no-repeat bg-cover">
      <div className="backdrop-brightness-30 text-dark px-30 py-50 text-center">
        <h1 className="text-4xl font-bold text-beige">
          <span className="text-lightRed">Get</span> in Touch
        </h1>
        <p className="text-lg px-100 my-5 opacity-50 text-beige">
          Have questions, feedback, or partnership inquiries? We'd love to hear
          from you!
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
