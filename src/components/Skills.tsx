import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "C++", "HTML", "CSS"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Libraries & Frameworks",
      skills: ["React", "Express", "Node.js", "Bootstrap", "Tailwind CSS"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Tools & Platforms",
      skills: ["Socket.IO", "Postman", "Render", "Git", "VSCode"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Concepts",
      skills: ["Clean Architecture", "MVC Architecture", "RESTful APIs", "Real-time Communication"],
      color: "bg-pink-100 text-pink-800"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="text-pulse-500">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${category.color} transition-transform hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="mt-16 animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { skill: "JavaScript", level: 90 },
                { skill: "React", level: 85 },
                { skill: "Node.js", level: 80 },
                { skill: "MongoDB", level: 75 }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 font-semibold text-gray-800">{item.skill}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-pulse-400 to-pulse-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{item.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;