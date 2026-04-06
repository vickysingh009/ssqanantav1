import React, { useState } from 'react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Full_Name: '',
    Phone_Number: '',
    Email_Address: '',
    Interested_Service: '',
    Message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2dfd139f-8208-4fa1-89e7-a58189875b5c",
          subject: "New Project Inquiry | S² Ananta Website",
          from_name: "S² Ananta Portfolio Website",
          email: formData.Email_Address,
          message: `
——————————————————————————————
NEW INQUIRY from S² Ananta Website
——————————————————————————————

Full Name       : ${formData.Full_Name}
Phone Number    : ${formData.Phone_Number}
Email Address   : ${formData.Email_Address || 'Not provided'}
Interested In   : ${formData.Interested_Service}

Message:
${formData.Message || 'No message provided'}
——————————————————————————————
          `
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          Full_Name: '',
          Phone_Number: '',
          Email_Address: '',
          Interested_Service: '',
          Message: ''
        });
      } else {
        alert("Submission failed. Please try again or contact us directly.");
      }
    } catch (error) {
      alert('Network error! Please try again later.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 md:py-16 text-center animate-pulse-once">
        <div className="w-16 h-16 rounded-full border border-[#B89672]/30 flex items-center justify-center mb-6 bg-[#FCFAF8]">
          <svg className="w-8 h-8 text-[#B89672]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">Inquiry Received</h3>
        <p className="text-gray-500 text-sm md:text-[15px] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out! Our lead design team will review your requirements and contact you shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-[#B89672] text-[13px] uppercase tracking-widest font-medium hover:text-[#9a7b5c] transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 md:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Name Input */}
        <div className="relative group">
          <input
            type="text"
            name="Full_Name"
            value={formData.Full_Name}
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
            name="Phone_Number"
            value={formData.Phone_Number}
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
            name="Email_Address"
            value={formData.Email_Address}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-transparent border-b border-gray-300 py-2.5 md:py-3 text-[13px] md:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B89672] transition-colors placeholder:text-gray-400"
          />
        </div>

        {/* Service Dropdown */}
        <div className="relative group">
          <select
            name="Interested_Service"
            value={formData.Interested_Service}
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
            <option value="Other" className="text-[#1A1A1A]">Other</option>
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
          name="Message"
          value={formData.Message}
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
