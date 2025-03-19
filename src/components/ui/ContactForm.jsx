import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="lg:w-[520px] p-5 bg-gradient-to-br from-[#00154E] to-[#002A7A] rounded-2xl shadow-lg border border-[#2B5BB2] text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md bg-transparent border border-[#2B5BB2] text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="support@envobyte.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md bg-transparent border border-[#2B5BB2] text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="+1 (667) 777 2477"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md bg-transparent border border-[#2B5BB2] text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Envobyte"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md bg-transparent border border-[#2B5BB2] text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold">Message</label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 mt-2 rounded-md bg-transparent border border-[#2B5BB2] text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-[150px] cursor-pointer bg-transparent border border-[#2B5BB2] py-3 rounded-md text-white font-semibold transition-transform transform hover:scale-105 flex justify-center items-center gap-2"
        >
          Send message →
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
