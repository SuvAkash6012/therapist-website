
export default function About() {
  return (
    <section className="bg-white py-16 px-6 [font-family:'Playfair_Display',serif]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <img
          src="/dr-img.jpg"
          alt="Dr. Serena Blake"
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-[#7e7e6b]">
            Meet Dr. Serena Blake
          </h2>

          <p className="text-lg leading-relaxed mb-5 text-[#7e7e6b]">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like cognitive-behavioral
            therapy and mindfulness—with compassionate, personalized care to help
            you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>

          <p className="text-lg leading-relaxed text-[#7e7e6b]">
            Whether you meet in her Maplewood Drive office or connect virtually via
            Zoom, Dr. Blake is committed to creating a safe, supportive space for
            you to thrive.
          </p>
        </div>
      </div>

      <hr className="border-[#7e7e6b] my-10 w-full" />
    </section>
  );
}
