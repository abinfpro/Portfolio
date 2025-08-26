import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Server, Smartphone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-pulse-500">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating innovative web solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <div className="space-y-6 animate-on-scroll">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Building the Future, One Line of Code at a Time
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                I am a dedicated and passionate MERN stack developer with extensive hands-on experience 
                gained through a self-driven internship over the past year. My journey in web development 
                has equipped me with a strong foundation in frontend and backend technologies.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                I love tackling various challenges and delivering high-quality results. My experience 
                spans from building responsive user interfaces to developing robust backend systems 
                and everything in between.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-pulse-50 rounded-lg">
                  <div className="text-2xl font-bold text-pulse-600">1+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-pulse-50 rounded-lg">
                  <div className="text-2xl font-bold text-pulse-600">5+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right: Skills Grid */}
            <div className="grid grid-cols-2 gap-6 animate-on-scroll">
              <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pulse-100 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-pulse-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Frontend</h4>
                  <p className="text-sm text-gray-600">React, JavaScript, HTML/CSS, Bootstrap, Tailwind</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pulse-100 rounded-full flex items-center justify-center">
                    <Server className="w-8 h-8 text-pulse-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Backend</h4>
                  <p className="text-sm text-gray-600">Node.js, Express.js, RESTful APIs</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pulse-100 rounded-full flex items-center justify-center">
                    <Database className="w-8 h-8 text-pulse-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Database</h4>
                  <p className="text-sm text-gray-600">MongoDB, MySQL</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pulse-100 rounded-full flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-pulse-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Tools</h4>
                  <p className="text-sm text-gray-600">Git, VSCode, Postman, Socket.IO</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;