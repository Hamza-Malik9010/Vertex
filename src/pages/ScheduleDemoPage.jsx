import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom'; // Ensure Link is imported


const ScheduleDemoPage = () => {
  const [state, handleSubmit] = useForm("mkggrdzo");

  if (state.succeeded) {
    return (
<div className="flex flex-col items-center justify-center min-h-screen bg-[#8D0B41] text-white">
  <h1 className="text-4xl font-bold mb-4">Thank you!</h1>
  <p className="text-xl mb-6">
    Our team will reach out to you shortly. In the meantime, feel free to explore our website. 
    You’ve made the right choice, and we’re excited to help elevate your practice!
  </p>
  <Link
    to="/"
    className="bg-[#8D0B41] text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 text-lg"
  >
    Back to Home
  </Link>
</div>
    
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF8E6] text-white flex items-center justify-center">
      <section className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <img src="/logof2.svg" alt="Vertex Logo" className="h-28 mb-4 mx-auto md:mx-0" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Book your Vertex demo</h1>
          <p className="text-3xl mb-6 text-black">
            Hire trained, qualified remote staff for your team at a fraction of the cost of an on-site hire.
          </p>
          <ul className="text-2xl list-disc list-inside mb-6 text-black">
            <li>✅ Fill open positions in a week</li>
            <li>✅ Save up to 50% in staffing costs</li>
            <li>✅ Offload tedious administrative tasks for good</li>
            <li>✅ 97.4% employee retention rate</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-white text-black rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-bold mb-2">First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-bold mb-2">Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block font-bold mb-2">Email *</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block font-bold mb-2">Phone Number *</label>
              <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <ValidationError prefix="Phone Number" field="phoneNumber" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="companyName" className="block font-bold mb-2">Company Name *</label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <ValidationError prefix="Company Name" field="companyName" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="industry" className="block font-bold mb-2">Industry *</label>
              <select
                id="industry"
                name="industry"
                required
                className="w-full border border-gray-300 rounded-lg p-3 bg-white"
              >
                <option value="">Select one that applies</option>
                <option value="Medical">Medical</option>
                <option value="Dental">Dental</option>
                <option value="Other">Other</option>
              </select>
              <ValidationError prefix="Industry" field="industry" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="hearAboutUs" className="block font-bold mb-2">Where did you hear about us?</label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                className="w-full border border-gray-300 rounded-lg p-3 bg-white"
              >
                <option value="">Please select one that applies</option>
                <option value="Referral">Referral</option>
                <option value="Vertex Partner">Vertex Partner</option>
                <option value="Conference">Conference</option>
                <option value="Webinar">Webinar</option>
                <option value="Google Search">Google Search</option>
                <option value="Online Advertisement">Online Advertisement</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
              <ValidationError prefix="Hear About Us" field="hearAboutUs" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#8D0B41] text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 text-lg w-full"
            >
              Book A Demo
            </button>

            
          </form>
        </div>
      </section>
    </main>
  );
};

export default ScheduleDemoPage;
