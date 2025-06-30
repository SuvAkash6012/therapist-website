

import Image from 'next/image';

export default function Services() {
  return (
    <section className="bg-[#fdfaf4] py-16 px-6 [font-family:'Playfair_Display',serif]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8 text-4xl font-light" style={{ color: "#41413f" }}>
          Therapy is a meaningful investment in yourself — 
          <br />a powerful act of self-care and growth.
        </h2>

        <p className="mx-auto mb-1 max-w-10xl" style={{ color: "#41413f" }}>
          Life may bring you to therapy through anxiety, overwhelming stress, relationship struggles, trauma, grief, or challenges with self-worth.
          Whatever you&apos;re carrying, 
          you don&apos;t have to navigate it alone. Therapy offers a supportive space to work toward clarity, healing, and balance.
        </p>

        <hr className="w-full my-10 border-gray-500" />

        <h3 className="mb-10 text-3xl font-light" style={{ color: "#41413f" }}>
          Services & Specialties
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

          {/* Service 1 */}
          <div>
            <Image
              src="/service-1.jpg"
              alt="Anxiety"
              width={500}
              height={500}
              className="object-cover w-full mb-4 rounded-full h-72"
            />
            <p className="text-lg" style={{ color: "#41413f" }}>
              Struggling with anxiety or stress? Gentle, effective tools to help
              you feel more grounded, calm, and supported in daily life.
            </p>
          </div>

          {/* Service 2 */}
          <div>
            <Image
              src="/Service-2.jpg"
              alt="Relationship"
              width={500}
              height={500}
              className="object-cover w-full mb-4 rounded-full h-72"
            />
            <p className="text-lg" style={{ color: "#41413f" }}>
              Facing relationship challenges? Get support in communication,
              boundary setting, and building deeper emotional connections.
            </p>
          </div>

          {/* Service 3 */}
          <div>
            <Image
              src="/service-3.jpg"
              alt="Trauma"
              width={500}
              height={500}
              className="object-cover w-full mb-4 rounded-full h-72"
            />
            <p className="text-lg" style={{ color: "#41413f" }}>
              Healing from trauma with kindness, patience, and trauma-informed
              therapy. Support for moving forward with strength.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
