"use client";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are passionate about building innovative digital solutions that
          empower businesses to scale and succeed in the digital era.
        </p>
      </section> */}

      <section className=" text-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-5xl font-[600] mb-4">About Us</p>
          <p className="text-lg md:text-xl opacity-90">
            Empowering businesses with innovative digital solutions to scale and
            thrive in the modern world.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://source.unsplash.com/600x400/?team,technology"
          alt="Our Team"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            At <span className="font-semibold">WebSolutions</span>, we deliver
            world-class services in web development, mobile app development, and
            DevOps solutions. Our mission is to transform ideas into impactful
            digital experiences that drive success.
          </p>
          <p className="text-gray-600">
            With years of experience and a passion for innovation, we help
            businesses of all sizes grow by leveraging the latest technologies
            and best practices.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide top-quality digital solutions that help businesses
              achieve their goals efficiently and effectively.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-purple-600">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a global leader in web, mobile, and cloud solutions, known
              for innovation and excellence.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-green-600">
              Our Values
            </h3>
            <p className="text-gray-600">
              Integrity, customer satisfaction, innovation, and continuous
              improvement in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Our team of skilled professionals is dedicated to delivering the best
          solutions for your business needs.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: "Rahul Kumar",
              role: "Founder & CEO",
              img: "https://source.unsplash.com/150x150/?man,developer",
            },
            {
              name: "Priya Sharma",
              role: "UI/UX Designer",
              img: "https://source.unsplash.com/150x150/?woman,designer",
            },
            {
              name: "Arjun Verma",
              role: "Lead Developer",
              img: "https://source.unsplash.com/150x150/?developer",
            },
            {
              name: "Simran Kaur",
              role: "Project Manager",
              img: "https://source.unsplash.com/150x150/?manager",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
