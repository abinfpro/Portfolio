import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_YOUR_SERVICE_ID,   // from EmailJS dashboard
        import.meta.env.VITE_YOUR_TEMPLATE_ID,  // from EmailJS dashboard
        formData,
        import.meta.env.VITE_YOUR_PUBLIC_KEY    // from EmailJS account
      );

      console.log("✅ Success:", result.text);
      alert("Message sent successfully!");

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error:", error.text || error);
      alert("Failed to send message. Please try again.");
    }

  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "abinkummil@gmail.com",
      href: "https://mail.google.com/mail/u/1/#inbox?compose=new",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7356384946",
      href: "tel:+917356384946",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Trivandrum, Kerala",
      href: "#",
      color: "from-purple-400 to-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      href: "https://github.com/abinfpro",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/abin-f-709b8132a/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="text-pulse-500">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Let's collaborate and build something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div className="space-y-8 animate-on-scroll">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities, 
                  exciting projects, or just having a chat about technology. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <button onClick={()=>window.open("https://www.linkedin.com/in/abin-f-709b8132a/")} className="hover:text-gray-900 p-3 bg-white rounded-lg shadow-sm text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md" ><Linkedin className="w-6 h-6" /></button>
                  <button onClick={()=>window.open("https://github.com/abinfpro")} className="hover:text-gray-900 p-3 bg-white rounded-lg shadow-sm text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md" ><Github className="w-6 h-6" /></button>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <Card className="animate-on-scroll hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="focus:ring-pulse-500 focus:border-pulse-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="focus:ring-pulse-500 focus:border-pulse-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="focus:ring-pulse-500 focus:border-pulse-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      className="focus:ring-pulse-500 focus:border-pulse-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-pulse-500 hover:bg-pulse-600 text-white shadow-elegant hover:shadow-elegant-hover transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-on-scroll">
            <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-pulse-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <Button
              onClick={()=>window.open("https://mail.google.com/mail/u/1/#inbox?compose=new")}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-pulse-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;