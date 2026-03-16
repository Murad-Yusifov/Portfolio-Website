import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://backend-j7xy.onrender.com/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(" Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Failed to send: ${data.message}`);
      }
    } catch (err) {
      setStatus("Failed to send email. Try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Theme-based classes
  const sectionBg = theme === "light" ? "bg-white" : "bg-black";
  const textPrimary = theme === "light" ? "text-gray-900" : "text-white";
  const textSecondary = theme === "light" ? "text-gray-700" : "text-gray-300";
  const inputBg = theme === "light" ? "bg-white border-gray-300" : "bg-gray-800 border-gray-700";
  const inputText = theme === "light" ? "text-gray-900" : "text-white";

  return (
    <section
      id="contact"
      className={`border-t-2 border-gray-100 panel contact-panel px-4 sm:px-6 md:px-12 lg:px-24 py-12 ${sectionBg} ${textPrimary} transition-colors duration-300`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Contact Me
      </h2>

      <form
        id="contactForm"
        className="contact-form max-w-3xl mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg} ${inputText}`}
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg} ${inputText}`}
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${inputBg} ${inputText}`}
        />

        <div className="controls flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
          <button
            type="submit"
            disabled={loading}
            className="btn bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          <div
            id="formStatus"
            className={`form-status text-sm mt-2 sm:mt-0 ${textSecondary}`}
            aria-live="polite"
          >
            {status}
          </div>
        </div>
      </form>

      <p className={`note max-w-3xl mx-auto mt-6 text-center ${textSecondary}`}>
        I usually respond within 24 hours. You can also email me at{" "}
        <strong>muradyusifov969@gmail.com</strong>
      </p>
    </section>
  );
};

export default Contact;