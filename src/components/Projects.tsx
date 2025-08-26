import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, MessageSquare, ShoppingCart, Users, FileText, Globe, Layout } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blogging and Chat App",
      description: "A visually interactive blogging platform with role-based authentication and real-time communication features.",
      tech: ["Node.js", "EJS", "Socket.IO", "MongoDB"],
      features: [
        "Role-based authentication and authorization",
        "Real-time chat system with Socket.io",
        "Full CRUD operations for blog management",
        "MVC architecture for maintainability",
        "Personalized user roles (Admin, Editor, Viewer)"
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      deployment: "Deployed on Render"
    },
    {
      title: "E-Commerce Web Application",
      description: "A full-featured e-commerce platform with secure authentication and dynamic product interactions.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      features: [
        "Responsive UI with React and Bootstrap",
        "Product listings with search and filters",
        "Real-time cart updates",
        "JWT-based authentication",
        "Admin panel for product management",
        "Order confirmation with billing details"
      ],
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      liveLink: true
    },
    {
      title: "Employee Management System",
      description: "A dynamic system for managing employee records with an interactive user interface.",
      tech: ["JavaScript", "HTML", "CSS"],
      features: [
        "Add, edit, delete employee records",
        "Display employee data dynamically",
        "Interactive user interface",
        "Efficient data management"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Static Responsive Webpage",
      description: "A fully responsive static webpage ensuring compatibility across different devices.",
      tech: ["HTML", "CSS"],
      features: [
        "Fully responsive design",
        "Cross-device compatibility",
        "Clean and modern design principles",
        "Intuitive user experience"
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Bootstrap Form",
      description: "A responsive form built with Bootstrap framework featuring validation and user-friendly inputs.",
      tech: ["HTML", "CSS", "Bootstrap"],
      features: [
        "Fully responsive form design",
        "Input validation",
        "Bootstrap grid system",
        "Mobile-friendly design"
      ],
      icon: <Layout className="w-8 h-8" />,
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-pulse-500">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my work demonstrating full-stack development capabilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-on-scroll overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-pulse-100 text-pulse-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deployment Info */}
                  {project.deployment && (
                    <div className="text-sm text-pulse-600 font-medium">
                      {project.deployment}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {project.liveLink && (
                      <Button
                        size="sm"
                        className="flex-1 bg-pulse-500 hover:bg-pulse-600 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12 animate-on-scroll">
            <Button
              variant="outline"
              size="lg"
              className="border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;