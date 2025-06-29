

export default function Footer() {
  return (
    <div className="[font-family:'Playfair_Display',serif]">
      {/* Quote Section */}
      <div
        className="min-h-[50vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/sunrise.jpg')" }}
      >
        <div className="p-6 rounded-md">
          <h2 className="text-2xl md:text-3xl text-black font-semibold leading-relaxed">
            “Caring for mental health isn't self-indulgent.
            <br /> It’s an act of survival.”
          </h2>
          <p className="text-base text-black mt-2">— Dr. Serena Blake</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-[#f3f0e8] py-10 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-[#41413f]">
            Dr. Serena Blake, PsyD
            <br />
            Licensed Clinical Psychologist
          </h3>

          <p className="text-[16px] mb-1 text-[#41413f]">
            Email:{" "}
            <a
              href="mailto:serena@blakepsychology.com"
              className="underline hover:text-teal-800"
            >
              serena@blakepsychology.com
            </a>
          </p>

          <p className="text-[16px] mb-4 text-[#41413f]">
            Phone:{" "}
            <a href="tel:3235550192" className="underline hover:text-teal-800">
              (323) 555-0192
            </a>
          </p>

          <p className="text-[16px] mb-1 text-[#41413f]">
            1287 Maplewood Drive, Los Angeles, CA 90026
          </p>

          <p className="text-[16px] mt-2 text-[#41413f]">
            Experience: 8 years of practice, 500+ client sessions
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="#"
              className="underline text-[16px] hover:text-teal-800 text-[#41413f]"
            >
              Home
            </a>
            <a
              href="#"
              className="underline text-[16px] hover:text-teal-800 text-[#41413f]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="underline text-[16px] hover:text-teal-800 text-[#41413f]"
            >
              Good Faith Estimate
            </a>
          </div>

          <p className="text-sm mt-6 text-[#41413f]">
            © 2025 Dr. Serena Blake, PsyD. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
