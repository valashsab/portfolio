import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you have any questions or interested in a colloboration, feel
              free to contact me.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: val.sab@gmail.com</li>
              <li className="contact-item">Phone: +43 677 12345678</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
