import Link from "next/link";

const serviceMeta = {
  "web-development": {
    title: "Web Development",
    summary:
      "High-performance, scalable web apps using Next.js, React, and Node.js.",
  },
  "mobile-apps": {
    title: "Mobile App Development",
    summary: "Cross-platform iOS & Android apps with great UX and speed.",
  },
  "ai-ml": {
    title: "Artificial Intelligence & ML",
    summary: "Automation, predictions, and insights powered by ML models.",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    summary: "Beautiful, user-centered designs for web and mobile.",
  },
  "devops-cloud": {
    title: "DevOps & Cloud Services",
    summary: "Scalable CI/CD, cloud infra, and observability.",
  },
  "data-analytics-bi": {
    title: "Data Analytics & BI",
    summary: "Dashboards, analytics pipelines, and data insights.",
  },
  ecommerce: {
    title: "E-commerce Solutions",
    summary: "End-to-end e-commerce platforms and integrations.",
  },
  "custom-software": {
    title: "Custom Software Development",
    summary: "Tailored software for unique workflows and scale.",
  },
};

const reviews = [
  { user: "Anita", stars: 5, text: "Excellent delivery and quality!" },
  { user: "Vikram", stars: 4, text: "Solid work, would recommend." },
];

export default function ServiceDetailPage({ params }) {
  const { service } = params;
  const meta = serviceMeta[service] || { title: "Service", summary: "" };

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{meta.title}</h1>
        <p className="text-gray-600 mb-8">{meta.summary}</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/pages/web" className="bg-gray-50 border rounded-xl p-6 block">
            <div className="font-semibold">Explore Experts</div>
            <div className="text-sm text-gray-600">Browse available experts and book sessions.</div>
            <div className="mt-2 text-blue-700 font-semibold">Go to listings →</div>
          </Link>
          <Link href="/pages/community" className="bg-gray-50 border rounded-xl p-6 block">
            <div className="font-semibold">Join the Community</div>
            <div className="text-sm text-gray-600">Connect with peers, mentors, and contributors.</div>
            <div className="mt-2 text-blue-700 font-semibold">Visit community →</div>
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Recent Reviews</h2>
          <ul className="space-y-3">
            {reviews.map((r, idx) => (
              <li key={idx} className="bg-gray-50 border rounded-lg p-4">
                <div className="font-medium">{r.user}</div>
                <div className="text-yellow-600">{"★".repeat(r.stars)}</div>
                <div className="text-gray-700">{r.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}