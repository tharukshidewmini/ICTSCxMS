import React from "react";
import { BookOpen, MapPin, MessageCircle, Mail, Phone, Github, Linkedin, Facebook, Twitter } from "lucide-react";

const TechnologyPortal = () => {
    const featuredPrograms = [
        {
            title: 'Azure Cloud Computing Certificate',
            department: 'Information & Communication Technology',
            location: 'Online/On-Campus',
            duration: '6 months',
            type: 'Certificate'
        },
        {
            title: 'Azure AI Solutions Development',
            department: 'Information & Communication Technology',
            location: 'On-Campus',
            duration: '3 months',
            type: 'Short Course'
        },
        {
            title: 'DevOps with Azure Pipeline',
            department: 'Engineering Technology',
            location: 'Hybrid',
            duration: '4 months',
            type: 'Certificate'
        }
    ];

    const navigateToChatbot = () => {
        // This would typically navigate to the chatbot page
        alert("Navigating to AI Chatbot...");
        // In a real application, you would use router.push() or window.location
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            {/* Hero Section */}
            <div className="relative bg-indigo-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="/api/placeholder/1200/600"
                        alt="University campus"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Faculty of Technology | University of Ruhuna
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Azure, Azure AI, and Azure DevOps Certification Programs
                        </p>
                        <p className="text-md mb-4 text-gray-300">
                            Karagoda Uyangoda, Matara | 041-2294750 | dean@tec.ruh.ac.lk
                        </p>
                    </div>
                </div>
            </div>

            {/* AI Chatbot Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">Need assistance with your application?</h2>
                            <p className="text-white text-opacity-90">
                                Our AI assistant can answer all your questions about our Azure certification programs
                            </p>
                        </div>
                        <button 
                            onClick={navigateToChatbot}
                            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-opacity-90 transition-colors shadow-lg"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Chat with our AI Assistant
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Programs Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Featured Azure Programs</h2>
                    <p className="text-gray-600">Explore specialized Microsoft Azure certification opportunities</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPrograms.map((program, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <img
                                    src="/api/placeholder/120/120"
                                    alt={program.department}
                                    className="w-16 h-16 rounded-lg"
                                />
                                <button className="border border-gray-200 px-3 py-1 rounded text-sm">
                                    {program.type}
                                </button>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                            <p className="text-gray-600 mb-4">{program.department}</p>
                            <div className="flex items-center text-gray-500 mb-4">
                                <MapPin className="w-4 h-4 mr-2" />
                                {program.location}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-indigo-600 font-semibold">{program.duration}</span>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded transition-colors"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">About Faculty of Technology</h2>
                            <p className="text-gray-600 mb-4">
                                The Faculty of Technology at University of Ruhuna is committed to providing world-class education in technological disciplines, preparing students for the challenges of the digital world.
                            </p>
                            <p className="text-gray-600 mb-4">
                                As a Microsoft Azure certified training partner, we offer cutting-edge programs designed to equip students with the skills and knowledge required in the rapidly evolving cloud computing industry.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Our programs are developed in collaboration with industry partners to ensure that graduates are job-ready and can make immediate contributions to their organizations.
                            </p>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Industry Partnerships</h3>
                                    <p className="text-gray-600">Collaborations with leading tech companies</p>
                                </div>
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Modern Facilities</h3>
                                    <p className="text-gray-600">State-of-the-art labs and learning spaces</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 flex justify-center items-center">
                            <img
                                src="/api/placeholder/500/400"
                                alt="Faculty of Technology"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-xl font-bold mb-4">Faculty of Technology</h3>
                            <p className="text-gray-300 mb-4">
                                University of Ruhuna<br />
                                Karagoda Uyangoda, Matara<br />
                                Sri Lanka
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Programs</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Azure Cloud Computing</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Azure AI Solutions</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">DevOps with Azure</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Data Analysis</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Academic Calendar</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Student Handbook</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Library</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Career Services</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <span>041-2294750</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span>dean@tec.ruh.ac.lk</span>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span>Karagoda Uyangoda, Matara</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-indigo-800 mt-12 pt-8 text-center">
                        <p className="text-gray-300">© {new Date().getFullYear()} Faculty of Technology, University of Ruhuna. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TechnologyPortal;