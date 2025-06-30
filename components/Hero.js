import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full bg-[#f8f6f0] font-playfair">

      
      <Link href="/">
        <div className="flex items-center gap-4 px-6 py-6 mx-auto cursor-pointer max-w-7xl hover:opacity-80">
          <Image src="/logo.png" alt="Logo" width={56} height={56} className="w-auto h-14" />
          <div className="text-[#1f3c32]">
            <h1 className="text-2xl font-semibold md:text-3xl">
              Dr. Serena Blake, PsyD
            </h1>
            <p className="text-base md:text-lg">
              Clinical Psychologist
            </p>
          </div>
        </div>
      </Link>

    
      <section className="px-4 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-lg shadow-lg">

       
          <video
            className="w-full h-[65vh] md:h-[80vh] object-cover"
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        
          <div className="absolute inset-0 bg-black/40"></div>

         
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-white md:text-5xl">
              Psychological Support for
            </h2>
            <h3 className="mb-4 text-3xl font-extrabold text-white md:text-5xl">
              Personal Growth, Clarity, and Well-Being
            </h3>
            <p className="text-sm md:text-xl text-white mb-4 max-w-[90%] md:max-w-2xl">
              Providing <strong>individual therapy</strong> and <strong>couples sessions</strong> in California.
            </p>
            <p className="mb-4 text-sm text-white md:text-lg">
              <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
            </p>
            <button className="bg-[#9fc1b4] hover:bg-[#8ab4a5] text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg transition">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
