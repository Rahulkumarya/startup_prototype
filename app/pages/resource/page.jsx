// app/components/Pages/ServicesPage.jsx

const services = [
  {
    title: "Web Development",
    description:
      "Responsive and high-performance websites tailored to your business needs using modern tech stacks like React, Next.js, and Node.js.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps with sleek UI and seamless performance using React Native, Flutter, or native technologies.",
    icon: "📱",
  },
  {
    title: "Artificial Intelligence & ML",
    description:
      "Custom AI/ML models for automation, prediction, image processing, NLP, and decision-making systems.",
    icon: "🧠",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and aesthetically pleasing designs focusing on user experience and product engagement.",
    icon: "🎨",
  },
  {
    title: "DevOps & Cloud Services",
    description:
      "CI/CD, cloud deployments (AWS, Azure, GCP), Docker, Kubernetes, and monitoring for scalable and reliable infrastructure.",
    icon: "☁️",
  },
  {
    title: "Data Analytics & BI",
    description:
      "Turn your data into insights using dashboards, visualization tools, and analytical models.",
    icon: "📊",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Full-stack e-commerce platforms with secure payment integration, inventory, and customer management.",
    icon: "🛒",
  },
  {
    title: "Custom Software Development",
    description:
      "Enterprise-grade or niche-specific software tailored for performance, security, and scalability.",
    icon: "💻",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">TechNest</h2>
        <p className="text-lg text-gray-600 mb-12">
          We offer a wide range of cutting-edge technology services to help you
          transform ideas into impactful digital solutions.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left shadow hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
