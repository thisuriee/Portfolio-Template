import React, { useState } from 'react';


const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add API integration here
  };

  return (
    <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">Contact</h2>
      {submitted ? (
        <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded">Thank you for reaching out!</div>
      ) : (
        <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="input-field dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="input-field dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="input-field dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
