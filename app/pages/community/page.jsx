// app/components/CommunitySection.jsx

export default function CommunitySection() {
  const community = [
    {
      name: "Developers",
      role: "Building & Contributing",
      icon: "👨‍💻",
    },
    {
      name: "Designers",
      role: "Crafting UI/UX",
      icon: "🎨",
    },
    {
      name: "AI Researchers",
      role: "Driving Innovation",
      icon: "🧠",
    },
    {
      name: "Product Managers",
      role: "Strategizing Growth",
      icon: "📈",
    },
    {
      name: "Open Source Contributors",
      role: "Expanding Impact",
      icon: "🌍",
    },
    {
      name: "Startups & Founders",
      role: "Leading Change",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join Our Thriving Community
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          We bring together innovators, creators, and changemakers to build the
          future.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {community.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all border-l-4 border-blue-600"
            >
              <div className="text-4xl mb-3">{member.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
