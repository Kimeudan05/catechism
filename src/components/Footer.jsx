import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-700 py-6">
      <div className="container mx-auto flex justify-center items-center text-center">
        <p className="text-lg text-gray-300 mb-4">
          © 2024{" "}
          <a
            href="https://github.com/Kimeudan05"
            className="text-red-400 hover:text-red-500 text-3xl transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dante Tech Solutions
          </a>
        </p>
      </div>

      <div className="flex justify-center space-x-6 mb-4">
        {/* Facebook Link */}
        <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-red-400 transition-colors duration-300"
        >
          <i className="fab fa-facebook fa-2x" title="facebook"></i>
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/Kimeudan05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-red-400 transition-colors duration-300"
        >
          <i className="fab fa-github fa-2x" title="github"></i>
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/daniel-masila-55a195245/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-red-400 transition-colors duration-300"
        >
          <i className="fab fa-linkedin fa-2x" title="linkedin"></i>
        </a>

        {/* Twitter Link */}
        <a
          href="https://x.com/kimeudan05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-red-400 transition-colors duration-300"
        >
          <i className="fab fa-x fa-2x" title="twitter"></i>
        </a>

        {/* Instagram Link */}
      </div>
    </footer>
  );
};

export default Footer;
