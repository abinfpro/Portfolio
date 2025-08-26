import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-pulse-500">Education</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>

          {/* Education Card */}
          <Card className="hover:shadow-elegant transition-all duration-300 animate-on-scroll">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left: Education Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pulse-400 to-pulse-600 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Bachelor of Arts</h3>
                      <p className="text-lg text-pulse-600 font-semibold">Sociology</p>
                      <p className="text-gray-600">Annamalai University</p>
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
                      <span>2019 - 2022</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Completed Bachelor of Arts in Sociology, developing strong analytical and 
                      research skills. This academic background provided valuable insights into 
                      human behavior and social systems, which enhances my approach to user 
                      experience design and software development.
                    </p>

                    {/* Key Learning Areas */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Learning Areas:</h4>
                      <ul className="space-y-2">
                        {[
                          "Critical thinking and analytical reasoning",
                          "Research methodology and data analysis",
                          "Communication and presentation skills",
                          "Understanding of human behavior and social dynamics",
                          "Problem-solving and logical thinking"
                        ].map((area, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-600">
                            <span className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: Additional Info */}
                <div className="lg:w-80">
                  <div className="bg-pulse-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-6 h-6 text-pulse-600" />
                      <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Beyond formal education, I'm committed to continuous learning in technology. 
                      I've completed various online courses and tutorials in web development, 
                      staying updated with the latest trends and best practices in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Self-Learning Journey */}
          <div className="mt-12 animate-on-scroll">
            <Card className="bg-gradient-to-r from-pulse-50 to-pulse-100 border-pulse-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Self-Driven Learning Journey
                </h3>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  My passion for technology led me to pursue web development through self-study 
                  and hands-on projects. Over the past year, I've dedicated myself to mastering 
                  the MERN stack through practical application, online resources, and real-world 
                  project development.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {[
                    "Self-taught Developer",
                    "Online Courses",
                    "Project-based Learning",
                    "Community Engagement"
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-pulse-700 rounded-full text-sm font-medium shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;