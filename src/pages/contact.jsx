import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        name: name,
        email: email,
        message: message,
      });
      setLoader(false);
      alert("Your message has been submitted👍");
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
      className="w-full min-h-screen flex flex-col items-center"
    >
      <header className="text-white text-4xl font-bold my-8">
        Contact Me
      </header>
      <div className="w-full max-w-screen-md p-8 bg-neutral-800 rounded-lg shadow-lg">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-white text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full rounded-md bg-neutral-700 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full rounded-md bg-neutral-700 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 p-2 w-full h-32 rounded-md bg-neutral-700 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
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