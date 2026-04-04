import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap form submit ka logic daal sakte hain (jaise API call ya Email send)
    console.log('Form Submitted:', formData);
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Name Input */}
        <div className="relative group">
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *" 
            required
            className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[13px] md:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B89672] transition-colors placeholder:text-gray-400"
          />
        </div>

        {/* Phone Input */}
        <div className="relative group">
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *" 
            required
            className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[13px] md:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B89672] transition-colors placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Email Input */}
        <div className="relative group">
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address" 
            className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[13px] md:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B89672] transition-colors placeholder:text-gray-400"
          />
        </div>

        {/* Service Dropdown */}
        <div className="relative group">
          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            aria-label="Interested Service"
            className={`w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[13px] md:text-sm focus:outline-none focus:border-[#B89672] transition-colors appearance-none cursor-pointer ${formData.service ? 'text-[#1A1A1A]' : 'text-gray-400'}`}
          >
            <option value="" disabled hidden>Interested Service *</option>
            <option value="Modular Kitchen" className="text-[#1A1A1A]">Modular Kitchen</option>
            <option value="Living Room" className="text-[#1A1A1A]">Living Room</option>
            <option value="Bedroom" className="text-[#1A1A1A]">Bedroom Design</option>
            <option value="Full Home Interior" className="text-[#1A1A1A]">Full Home Interior</option>
            <option value="Commercial Space" className="text-[#1A1A1A]">Commercial Space</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="relative group">
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project or requirements..." 
          rows="2"
          className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[13px] md:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B89672] transition-colors placeholder:text-gray-400 resize-none h-14"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="mt-4 flex justify-start sm:justify-end">
        <button 
          type="submit"
          className="bg-[#B89672] hover:bg-[#9a7b5c] text-white px-8 py-3 md:py-3.5 rounded text-[13px] md:text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group w-full sm:w-auto"
        >
          Submit Inquiry
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
