


export default function Services() {
  return (
    <section className="bg-[#fdfaf4] py-16 px-6 [font-family:'Playfair_Display',serif]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light mb-8" style={{ color: "#41413f" }}>
          Therapy is a meaningful investment in yourself — 
          <br />a powerful act of self-care and growth.
        </h2>
        <p className="max-w-10xl mx-auto mb-1" style={{ color: "#41413f" }}>
          Life may bring you to therapy through anxiety, overwhelming stress, relationship struggles, trauma, grief, or challenges with self-worth.
          Whatever you&apos;re carrying, 
          you don&apos;t have to navigate it alone. Therapy offers a supportive space to work toward clarity, healing, and balance.
        </p>

        <hr className="border-gray-500 my-10 w-full" />

        <h3 className="text-3xl font-light mb-10" style={{ color: "#41413f" }}>
          Services & Specialties
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div>
            <img
              src="/service-1.jpg"
              alt="Anxiety"
              className="w-full h-72 object-cover rounded-full mb-4"
            />
            <p className="text-lg" style={{ color: "#41413f" }}>
              Struggling with anxiety or stress? Gentle, effective tools to help
              you feel more grounded, calm, and supported in daily life.
            </p>
          </div>

          {/* Service 2 */}
          <div>
            <img
              src="/service-2.jpg"
              alt="Relationship"
              className="w-full h-72 object-cover rounded-full mb-4"
            />
            <p className="text-lg" style={{ color: "#41413f" }}>
              Facing relationship challenges? Get support in communication,
              boundary setting, and building deeper emotional connections.
            </p>
          </div>

          {/* Service 3 */}
          <div>
            <img
              src="/service-3.jpg"
              alt="Trauma"
              className="w-full h-72 object-cover rounded-full mb-4"
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
