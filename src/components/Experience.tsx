import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Work <span className="text-pulse-500">Experience</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional journey in software development
            </p>
          </div>

          {/* Experience Card */}
          <Card className="hover:shadow-elegant transition-all duration-300 animate-on-scroll">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left: Company Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pulse-400 to-pulse-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Software Engineer Intern</h3>
                      <p className="text-lg text-pulse-600 font-semibold">Stackmod Innovations Pvt Ltd</p>
                    </div>
                  </div>

                  {/* Location and Duration */}
                  <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pulse-500" />
                      <span>Trivandrum, Kerala</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-pulse-500" />
                      <span>July 2024 - Present</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Developed and deployed full stack web applications using the MERN stack 
                      (MongoDB, Express.js, React.js, Node.js). Ensured seamless front-end 
                      integration and gained hands-on experience in building applications through 
                      both personal and academic projects.
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {[
                          "Built responsive web applications using React and modern JavaScript",
                          "Developed RESTful APIs using Node.js and Express.js",
                          "Integrated MongoDB databases for efficient data management",
                          "Collaborated on multiple projects following agile development practices",
                          "Gained expertise in full-stack development lifecycle"
                        ].map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-600">
                            <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: Skills Used */}
                <div className="lg:w-80">
                  <h4 className="font-semibold text-gray-900 mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Node.js", 
                      "Express.js",
                      "MongoDB",
                      "JavaScript",
                      "HTML/CSS",
                      "Git",
                      "RESTful APIs"
                    ].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pulse-100 text-pulse-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center animate-on-scroll">
            <p className="text-gray-600 italic">
              Currently building expertise in modern web development while contributing to innovative projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;