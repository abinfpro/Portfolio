import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pulse-400 to-pulse-600 flex items-center justify-center text-white font-bold">
                AF
              </div>
              <span className="text-xl font-bold">Abin F</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              MERN Stack Developer passionate about creating innovative web solutions 
              that make a difference. Always ready for new challenges and opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pulse-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pulse-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:abinkummil@gmail.com" className="text-gray-400 hover:text-pulse-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>abinkummil@gmail.com</li>
              <li>+91 7356384946</li>
              <li>Trivandrum, Kerala</li>
              <li className="pt-2">
                <span className="text-pulse-400">Available for freelance work</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            © 2024 Abin F. Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Currently open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;