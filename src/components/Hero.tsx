import React from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pulse-50 to-pulse-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pulse-200 rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-pulse-300 rounded-full animate-float opacity-40" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-pulse-400 rounded-full animate-float opacity-50" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-pulse-400 to-pulse-600 p-1 shadow-elegant">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl sm:text-5xl font-bold text-pulse-600">
                AF
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pulse-500 to-pulse-700 bg-clip-text text-transparent">
              Abin F
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 animate-fade-in font-medium">
            MERN Stack Developer
          </p>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            A dedicated and passionate full-stack developer with extensive hands-on experience 
            in building modern web applications. I specialize in creating scalable, user-friendly 
            solutions using the latest technologies.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-pulse-500" />
              <span>7356384946</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-pulse-500" />
              <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="_blank">abinkummil@gmail.com</a>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
         <Button 
  size="lg" 
  onClick={() => window.open("https://miocoodtteidyiubfkrd.supabase.co/storage/v1/object/public/Blog.ai_bucket/1756211692867-Abin%20F%20MERN%20Stack%20Developer%20.pdf.pdf", "_blank")}
  className="bg-pulse-500 hover:bg-pulse-600 text-white shadow-elegant hover:shadow-elegant-hover transition-all duration-300 group"
>
  View Resume
</Button>

          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            <a 
              href="https://www.linkedin.com/in/abin-f-709b8132a/" 
              target="_blank"
              className="text-gray-600 hover:text-pulse-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://github.com/abinfpro" 
              target="_blank"
              className="text-gray-600 hover:text-pulse-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pulse-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pulse-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;