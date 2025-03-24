import React from "react";
import { BookOpen, MapPin, MessageCircle, Mail, Phone, Github, Linkedin, Facebook, Twitter } from "lucide-react";

const TechnologyPortal = () => {
    const featuredPrograms = [
        {
            title: 'Azure Cloud Azure 101',
            location: 'On-Campus',
            duration: '1 Hour',
            type: 'Workshop'
        },
        {
            title: 'Azure AI Solutions Development',
            location: 'On-Campus',
            duration: '1 Hour',
            type: 'Workshop'
        },
        {
            title: 'DevOps with Azure Pipeline',
            location: 'On-Campus',
            duration: '1 Hour',
            type: 'Workshop'
        }
    ];

    const speakers = [
        {
            name: "Dr. Sarah Johnson",
            title: "Cloud Solutions Architect, Microsoft",
            bio: "Dr. Johnson has over 15 years of experience developing cloud architectures and is a certified Azure expert. She specializes in enterprise cloud migrations and optimization.",
            image: "/api/placeholder/150/150"
        },
        {
            name: "Michael Patel",
            title: "AI Research Lead, Tech Innovations",
            bio: "Michael leads AI research initiatives and has published numerous papers on machine learning applications in cloud environments. He's been working with Azure AI services since their inception.",
            image: "/api/placeholder/150/150"
        },
        {
            name: "Jessica Wong",
            title: "Senior DevOps Engineer, CloudScale",
            bio: "Jessica is a DevOps specialist with expertise in CI/CD pipelines and infrastructure automation. She has helped dozens of organizations implement Azure DevOps solutions.",
            image: "/api/placeholder/150/150"
        },
        {
            name: "David Muriuki",
            title: "Microsoft Student Ambassador",
            bio: "David is a passionate advocate for cloud technologies and leads workshops on Azure fundamentals. He has been recognized as a top Microsoft Student Ambassador in the region.",
            image: "/api/placeholder/150/150"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            {/* Hero Section */}
            <div className="relative bg-indigo-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="/img/landing.jpg"
                        alt="University campus"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Ms Club UWU X ICTSC
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Azure, Azure AI, and Azure DevOps Workshop
                        </p>
                    </div>
                </div>
            </div>

            {/* AI Chatbot Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">Need assistance?</h2>
                            <p className="text-white text-opacity-90">
                                Our AI assistant can answer all your questions about our Azure workshop programs
                            </p>
                        </div>
                        <button
                            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-opacity-90 transition-colors shadow-lg"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Chat with our AI Assistant
                        </button>
                    </div>
                </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Register Now</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Scan the QR code below to register for our upcoming Azure workshops. Don't miss this opportunity to enhance your cloud computing skills!
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-xl shadow-md">
                            <img
                                src="/api/placeholder/250/250"
                                alt="Registration QR Code"
                                className="w-64 h-64"
                            />
                        </div>
                        <p className="mt-6 text-gray-700 font-medium">
                            Registration deadline: April 10, 2025
                        </p>
                        <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md">
                            Register Manually
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Programs Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4"> Azure, Azure AI, and Azure DevOps Sessions</h2>
                    <p className="text-gray-600">Unlock the Future of Cloud Computing and Artificial Intelligence</p>
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

            {/* Speakers Section */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Meet Our Speakers</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Learn from industry experts and thought leaders in the fields of cloud computing, artificial intelligence, and DevOps
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <div className="p-1 bg-gradient-to-r from-indigo-500 to-blue-500">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                                    <p className="text-indigo-600 text-sm mb-3">{speaker.title}</p>
                                    <p className="text-gray-600 text-sm">{speaker.bio}</p>
                                    <div className="mt-4 flex space-x-3">
                                        <a href="#" className="text-gray-500 hover:text-indigo-600">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-indigo-600">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">About MS Club of Uva Wellassa University</h2>
                            <p className="text-gray-600 mb-4">
                                The MS Club of Uva Wellassa University (UWU) is a student-run organization that fosters collaboration, innovation, and knowledge-sharing in the field of technology and software development.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We aim to bridge the gap between academia and industry by organizing workshops, events, and activities that enhance the skills of our members in emerging technologies such as cloud computing, DevOps, and full-stack development.
                            </p>
                            <p className="text-gray-600 mb-4">
                                The club serves as a platform for students to learn, collaborate, and grow together while also gaining real-world insights through industry partnerships and networking opportunities.
                            </p>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Skill Development</h3>
                                    <p className="text-gray-600">Workshops and events to enhance technical skills</p>
                                </div>
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Networking Opportunities</h3>
                                    <p className="text-gray-600">Connecting students with industry experts</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 flex justify-center items-center">
                            <img
                                src="/api/placeholder/500/400"
                                alt="MS Club of UWU"
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
                            <h3 className="text-xl font-bold mb-4">MS Club of Uva Wellassa University</h3>
                            <p className="text-gray-300 mb-4">
                                Uva Wellassa University,<br />
                                Badulla, Sri Lanka
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
                            <h3 className="text-lg font-semibold mb-4">Club Programs</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Tech Workshops</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Hackathons</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Networking Events</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Technical Trainings</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Event Calendar</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Club Handbook</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Career Resources</a></li>
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
                                    <span>msclub@uwu.ac.lk</span>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span>Uva Wellassa University, Badulla</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-indigo-800 mt-12 pt-8 text-center">
                        <p className="text-gray-300">© {new Date().getFullYear()} MS Club of Uva Wellassa University. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TechnologyPortal;