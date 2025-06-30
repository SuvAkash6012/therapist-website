
// export default function About() {
//   return (
//     <section className="bg-white py-16 px-6 [font-family:'Playfair_Display',serif]">
//       <div className="grid items-center max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">

//         {/* Image */}
//         <img
//           src="/dr-img.jpg"
//           alt="Dr. Serena Blake"
//           className="object-cover w-full h-auto shadow-lg rounded-xl"
//         />

//         {/* Text Content */}
//         <div>
//           <h2 className="text-3xl md:text-3xl font-bold mb-4 text-[#7e7e6b]">
//             Meet Dr. Serena Blake
//           </h2>

//           <p className="text-lg leading-relaxed mb-5 text-[#7e7e6b]">
//             Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
//             Los Angeles, CA, with eight years of experience and over 500 client
//             sessions. She blends evidence-based approaches—like cognitive-behavioral
//             therapy and mindfulness—with compassionate, personalized care to help
//             you overcome anxiety, strengthen relationships, and heal from trauma.
//           </p>

//           <p className="text-lg leading-relaxed text-[#7e7e6b]">
//             Whether you meet in her Maplewood Drive office or connect virtually via
//             Zoom, Dr. Blake is committed to creating a safe, supportive space for
//             you to thrive.
//           </p>
//         </div>
//       </div>

//       <hr className="border-[#7e7e6b] my-10 w-full" />
//     </section>
//   );
// }


import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white py-16 px-6 [font-family:'Playfair_Display',serif]">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">

        {/* Image */}
        <Image
          src="/dr-img.jpg"
          alt="Dr. Serena Blake"
          width={600}
          height={600}
          className="object-cover w-full h-auto shadow-lg rounded-xl"
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
