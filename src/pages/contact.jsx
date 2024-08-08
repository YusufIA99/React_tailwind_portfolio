import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("All fields are required.");
      return;
    }

    setLoader(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
      });
      setLoader(false);
      alert("Your message has been submitted 👍");
    } catch (error) {
      setLoader(false);
      alert(error.message);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex min-h-screen w-full flex-col items-center"
    >
      <header className="my-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        Contact Me
      </header>
      <div className="w-full max-w-screen-sm rounded-lg bg-neutral-800 p-6 shadow-lg md:max-w-screen-md md:p-8">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white md:text-xl"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full rounded-md border border-neutral-600 bg-neutral-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:p-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white md:text-xl"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-md border border-neutral-600 bg-neutral-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:p-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white md:text-xl"
            >
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 h-32 w-full resize-none rounded-md border border-neutral-600 bg-neutral-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:h-40 md:p-3"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="transform rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:px-6 md:py-3"
            disabled={loader}
          >
            {loader ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
