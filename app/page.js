import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation bar */}
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <UserButton className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full" />
          <a href="#" className="text-white text-2xl font-bold ml-10">
            EduTech
          </a>
          <div>
            <a href="http://localhost:3000/browse" className="text-white mr-4">
              Browse
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Our Learning Management System
          </h1>
          <p className="text-lg mb-8">
            Empowering you to learn anything, anywhere.
          </p>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample course cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden ">
              <img
                src="/next.jpg"
                alt="Course Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">NextJs Course</h3>
                <p className="text-gray-700">NextJs Tutorial Full courses</p>
                <a
                  href="http://localhost:3000/browse"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden ">
              <img
                src="react.jpg"
                alt="Course Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">React Course</h3>
                <p className="text-gray-700">React Tutorial Full courses</p>
                <a
                  href="http://localhost:3000/browse"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden ">
              <img
                src="/aws.jpg"
                alt="Course Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AWS Course</h3>
                <p className="text-gray-700">AWS Tutorial Full courses</p>
                <a
                  href="http://localhost:3000/browse"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* Repeat the above card structure for other courses */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 mt-16">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Learning Management System. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-500 mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500 mr-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
