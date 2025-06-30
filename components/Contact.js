export default function Contact() {
  return (
    <section className="bg-[#9fc1b4] min-h-screen flex items-center justify-center font-playfair">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md border border-gray-200">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-2 text-gray-800">
          Get in Touch
        </h2>

        {/* Sub Text */}
        <p className="text-sm text-center text-gray-600 mb-6">
          Please fill out the form below. This form is <strong>private, safe, and confidential</strong>.
          Your information will only be used to contact you regarding your inquiry.
        </p>

        
        <form action="#" method="POST" noValidate className="space-y-3">
          
          
          <div>
            <label className="block mb-1 text-gray-800 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-400 rounded px-4 py-2 text-gray-900 
              hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2
              focus:outline-none transition"
              required
            />
          </div>

          
          <div>
            <label className="block mb-1 text-gray-800 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-400 rounded px-4 py-2 text-gray-900
              hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2
              focus:outline-none transition"
              required
            />
          </div>

          
          <div>
            <label className="block mb-1 text-gray-800 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 234-5678"
              pattern="[0-9]{10,15}"
              className="w-full border border-gray-400 rounded px-4 py-2 text-gray-900
              hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2
              focus:outline-none transition"
            />
          </div>

          
          <div>
            <label className="block mb-1 text-gray-800 font-medium">
              What brings you here?
            </label>
            <textarea
              name="message"
              rows={6}
              className="w-full border border-gray-400 rounded px-4 py-2 text-gray-900
              hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2
              focus:outline-none transition"
              required
            ></textarea>
          </div>

         
          <div>
            <label className="block mb-1 text-gray-800 font-medium">
              Preferred Contact Time
            </label>
            <input
              type="text"
              name="contactTime"
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              className="w-full border border-gray-400 rounded px-4 py-2 text-gray-900
              hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2
              focus:outline-none transition"
            />
            <p className="text-xs text-gray-500 mt-1">
              Let us know when you&apos;re typically available for a call or consultation.

            </p>
          </div>

          

          {/* Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              className="mr-2 mt-1"
              required
            />
            <label className="text-sm text-gray-800">
              I agree to be contacted.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition"
          >
            Submit
          </button>

          {/* Footer Note */}
          <p className="text-xs text-center text-gray-500 mt-2">
            Your information is handled with utmost privacy and will not be shared.
          </p>
        </form>
      </div>
    </section>
  );
}
