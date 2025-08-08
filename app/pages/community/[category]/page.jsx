export default function CommunityCategoryPage({ params }) {
  const { category } = params;

  const categoryNameMap = {
    developers: "Developers",
    designers: "Designers",
    "ai-researchers": "AI Researchers",
    "product-managers": "Product Managers",
    "open-source": "Open Source Contributors",
    founders: "Startups & Founders",
  };

  const membersByCategory = {
    developers: [
      { id: 1, name: "Rahul Kumar", role: "Full Stack Developer", rating: 4.8 },
      { id: 3, name: "Arjun Verma", role: "Backend Engineer", rating: 4.9 },
    ],
    designers: [
      { id: 2, name: "Priya Sharma", role: "UI/UX Designer", rating: 4.5 },
      { id: 4, name: "Simran Kaur", role: "Product Designer", rating: 4.7 },
    ],
    "ai-researchers": [
      { id: 5, name: "Aakash Gupta", role: "ML Engineer", rating: 4.6 },
    ],
    "product-managers": [
      { id: 6, name: "Nisha Patel", role: "PM", rating: 4.4 },
    ],
    "open-source": [
      { id: 7, name: "Open Dev", role: "OSS Contributor", rating: 4.8 },
    ],
    founders: [
      { id: 8, name: "Startup Lead", role: "Founder", rating: 4.7 },
    ],
  };

  const reviews = [
    { user: "Ravi", comment: "Great community and helpful peers!", stars: 5 },
    { user: "Meera", comment: "Found awesome collaborators here.", stars: 4 },
  ];

  const displayName = categoryNameMap[category] || "Community";
  const members = membersByCategory[category] || [];

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{displayName}</h1>
        <p className="text-gray-600 mb-8">
          Explore profiles, reviews, and connect with {displayName.toLowerCase()}.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <a
              key={m.id}
              href={`/component/details/${m.id}`}
              className="block bg-gray-50 rounded-xl border p-5 shadow hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="text-lg font-semibold">{m.name}</div>
              <div className="text-sm text-gray-600">{m.role}</div>
              <div className="mt-2 text-yellow-600 text-sm">⭐ {m.rating}</div>
              <div className="mt-3 text-blue-700 font-semibold">View details →</div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">Community Reviews</h2>
          <ul className="space-y-3">
            {reviews.map((r, idx) => (
              <li key={idx} className="bg-gray-50 border rounded-lg p-4">
                <div className="font-medium">{r.user}</div>
                <div className="text-yellow-600">{"★".repeat(r.stars)}</div>
                <div className="text-gray-700">{r.comment}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}