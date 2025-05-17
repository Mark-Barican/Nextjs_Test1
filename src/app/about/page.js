import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="content-wrapper bg-white dark:bg-gray-900 rounded-xl shadow-lg">
          <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Us
          </h1>
          
          <p className="text-xl leading-relaxed mb-12 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are passionate about creating innovative web solutions that make a difference in people&apos;s lives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Building modern web applications with cutting-edge technology to solve real-world problems and create meaningful digital experiences.
              </p>
            </div>
            
            <div className="card hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Creating seamless user experiences that make a difference in how people interact with technology, making it more accessible and enjoyable for everyone.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <Link 
              href="/" 
              className="button group hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 