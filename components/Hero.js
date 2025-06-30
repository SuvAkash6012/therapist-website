// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <div className="w-full bg-[#f8f6f0] font-playfair">
     
//       <Link href="/">
//       <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4 cursor-pointer hover:opacity-80">
//         <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
//         <div className="text-[#1f3c32]">
//           <h1 className="text-2xl md:text-3xl font-semibold">
//             Dr. Serena Blake, PsyD
//           </h1>
//           <p className="text-base md:text-lg">
//             Clinical Psychologist
//           </p>
//         </div>
//       </div>
//     </Link>

   
//       <section className="max-w-7xl mx-auto px-4">
//         <div className="relative rounded-lg overflow-hidden shadow-lg">
//           <video
//             className="w-full h-auto object-cover"
//             src="/video.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src="/video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <div className="absolute inset-0 bg-black/40"></div>

//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//               Psychological Support for
//             </h2>
//             <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//               Personal Growth, Clarity, and Well-Being
//             </h3>
//             <p className="text-base md:text-xl text-white mb-6 max-w-2xl">
//               Providing <strong>individual therapy</strong> and <strong>couples sessions</strong> in California.
//             </p>
//             <p className="text-base md:text-lg text-white mb-4">
//               <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
//             </p>
//             <button className="bg-[#9fc1b4] hover:bg-[#8ab4a5] text-white font-semibold px-8 py-3  rounded-full text-lg transition">
//               Schedule a Consultation
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-full bg-[#f8f6f0] font-playfair">

      {/* Logo Header */}
      <Link href="/">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4 cursor-pointer hover:opacity-80">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          <div className="text-[#1f3c32]">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Dr. Serena Blake, PsyD
            </h1>
            <p className="text-base md:text-lg">
              Clinical Psychologist
            </p>
          </div>
        </div>
      </Link>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-lg">

          {/* Video */}
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

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Psychological Support for
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Personal Growth, Clarity, and Well-Being
            </h3>
            <p className="text-sm md:text-xl text-white mb-4 max-w-[90%] md:max-w-2xl">
              Providing <strong>individual therapy</strong> and <strong>couples sessions</strong> in California.
            </p>
            <p className="text-sm md:text-lg text-white mb-4">
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
