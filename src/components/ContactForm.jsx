import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setsuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/08d27cbe-3205-4313-97ff-6a8affbcf866",
        data
      )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setsuccess(true);
      });
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-1/2 max-lg:w-full"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="rounded-md p-2 focus:outline-accent-pink outline-none bg-neutral-900 bg-opacity-50 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="rounded-md p-2 focus:outline-accent-pink outline-none bg-neutral-900 bg-opacity-50 text-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="rounded-md p-2 h-96 max-lg:h-48 focus:outline-accent-pink outline-none bg-neutral-900 bg-opacity-50 text-white"
        />
        <div className="flex justify-end overflow-hidden">
          {success && (
            <motion.div
              initial={{ opacity: 0, x: 250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex w-2/3 max-lg:w-3/4 items-center justify-center text-center font-semibold text-accent-pink"
            >
              Your message has been sent successfully!
            </motion.div>
          )}
          <button
            type="submit"
            className="bg-accent-pink p-2 rounded-md max-md:w-1/4 w-1/3 z-30 text-white font-semibold opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
