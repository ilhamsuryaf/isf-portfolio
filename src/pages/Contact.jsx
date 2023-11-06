import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen flex max-lg:flex-col max-lg:justify-center max-lg:items-center relative bg-neutral-800 px-24 max-md:p-5 pb-8 pt-20 max-lg:py-5 overflow-hidden"
    >
      <h1 className="lg:mx-4 lg:absolute lg:h-full lg:top-45 lg:left-12 lg:opacity-20 lg:w-1/2 font-bold py-2 text-9xl max-lg:text-4xl max-lg:text-center bg-gradient-to-l from-accent-pink via-accent-red to-accent-orange bg-clip-text text-transparent opacity-60">
        Tell Me Something <br />I Should Know <br />
        <span className="text-sm lg:text-xl bg-white bg-clip-text text-transparent">
          a simple hello would be nice too
        </span>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col w-full gap-8 z-30 justify-center items-center max-lg:mt-6"
      >
        <ContactForm />
      </motion.div>
      <div className="lg:mx-4 lg:absolute lg:top-28 lg:right-14 text-white py-2 max-lg:text-center">
        <p className="text-md">
          Or you can email me directly at:
          <br />
          <span className="font-semibold text-xl max-lg:text-lg">
            ilhamsuryafernanda@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
