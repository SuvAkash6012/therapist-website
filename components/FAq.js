"use client";
import { useState } from "react";

export default function FAQ() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

 
  let answer1;
  if (show1) {
    answer1 = (
      <div className="px-4 pb-4 text-sm text-gray-700">
        No, but a superbill is provided for self-submission.
      </div>
    );
  }

  let answer2;
  if (show2) {
    answer2 = (
      <div className="px-4 pb-4 text-sm text-gray-700">
        Yes — all virtual sessions via Zoom.
      </div>
    );
  }

  let answer3;
  if (show3) {
    answer3 = (
      <div className="px-4 pb-4 text-sm text-gray-700">
        24-hour notice required.
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-6 text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

       
        <div className="border rounded-md mb-4">
          <button
            onClick={() => setShow1(!show1)}
            className="w-full text-left px-4 py-3 font-medium"
          >
            Do you accept insurance?
          </button>
          {answer1}
        </div>

        
        <div className="border rounded-md mb-4">
          <button
            onClick={() => setShow2(!show2)}
            className="w-full text-left px-4 py-3 font-medium"
          >
            Are online sessions available?
          </button>
          {answer2}
        </div>

        
        <div className="border rounded-md mb-4">
          <button
            onClick={() => setShow3(!show3)}
            className="w-full text-left px-4 py-3 font-medium"
          >
            What is your cancellation policy?
          </button>
          {answer3}
        </div>
      </div>
    </section>
  );
}
