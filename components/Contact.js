// export default function Contact() {
//   return (
//     <section className="bg-[#9fc1b4] min-h-screen flex items-center justify-center font-playfair">
//       <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-md">
        
        
//         <h2 className="mb-2 text-3xl font-semibold text-center text-gray-800">
//           Get in Touch
//         </h2>

       
//         <p className="mb-6 text-sm text-center text-gray-600">
//           Please fill out the form below. This form is <strong>private, safe, and confidential</strong>.
//           Your information will only be used to contact you regarding your inquiry.
//         </p>

        
//         <form action="#" method="POST" noValidate className="space-y-3">
          
          
//           <div>
//             <label className="block mb-1 font-medium text-gray-800">Name</label>
//             <input
//               type="text"
//               name="name"
//               className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded // hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
//               required
//             />
//           </div>

          
//           <div>
//             <label className="block mb-1 font-medium text-gray-800">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded // hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
//               required
//             />
//           </div>

          
//           <div>
//             <label className="block mb-1 font-medium text-gray-800">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="(555) 234-5678"
//               pattern="[0-9]{10,15}"
//               className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded // hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
//             />
//           </div>

          
//           <div>
//             <label className="block mb-1 font-medium text-gray-800">
//               What brings you here?
//             </label>
//             <textarea
//               name="message"
//               rows={6}
//               className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded // hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
//               required
//             ></textarea>
//           </div>

         
//           <div>
//             <label className="block mb-1 font-medium text-gray-800">
//               Preferred Contact Time
//             </label>
//             <input
//               type="text"
//               name="contactTime"
//               placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
//               className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded // hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
//             />
//             <p className="mt-1 text-xs text-gray-500">
//               Let us know when you&apos;re typically available for a call or consultation.

//             </p>
//           </div>

          

//           {/* Checkbox */}
//           <div className="flex items-start">
//             <input
//               type="checkbox"
//               name="agree"
//               className="mt-1 mr-2"
//               required
//             />
//             <label className="text-sm text-gray-800">
//               I agree to be contacted.
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-2 text-white transition bg-teal-600 rounded-md hover:bg-teal-700"
//           >
//             Submit
//           </button>

//           {/* Footer Note */}
//           <p className="mt-2 text-xs text-center text-gray-500">
//             Your information is handled with utmost privacy and will not be shared.
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';

export default function Contact() {
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const agree = form.agree.checked;

    if (name === '' || email === '' || message === '') {
      setError('Please fill all the required fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }

    if (!agree) {
      setError('Please agree to be contacted.');
      return;
    }

    setError('');
    alert('Form Submitted Successfully!');
    form.reset();
  }

  return (
    <section className="bg-[#9fc1b4] min-h-screen flex items-center justify-center font-playfair">
      <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="mb-2 text-3xl font-semibold text-center text-gray-800">
          Get in Touch
        </h2>

        <p className="mb-6 text-sm text-center text-gray-600">
          Please fill out the form below. This form is{' '}
          <strong>private, safe, and confidential</strong>.
        </p>

        {error && (
          <div className="px-4 py-2 mb-4 text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block mb-1 font-medium text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="(555) 234-5678"
              className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">
              What brings you here?
            </label>
            <textarea
              name="message"
              rows={6}
              className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">
              Preferred Contact Time
            </label>
            <input
              type="text"
              name="contactTime"
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              className="w-full px-4 py-2 text-gray-900 transition border border-gray-400 rounded hover:border-teal-700 focus:border-teal-700 focus:border-2 hover:border-2 focus:outline-none"
            />
            <p className="mt-1 text-xs text-gray-500">
              Let us know when you're typically available.
            </p>
          </div>

          <div className="flex items-start">
            <input type="checkbox" name="agree" className="mt-1 mr-2" />
            <label className="text-sm text-gray-800">
              I agree to be contacted.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white transition bg-teal-600 rounded-md hover:bg-teal-700"
          >
            Submit
          </button>

          <p className="mt-2 text-xs text-center text-gray-500">
            Your information is handled with utmost privacy and will not be
            shared.
          </p>
        </form>
      </div>
    </section>
  );
}
