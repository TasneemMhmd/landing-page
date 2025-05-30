import React from "react";
import {
    BookOpen,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    ArrowUp,
    Phone,
} from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5" />
            <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
                    <div className="sm:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-shadow duration-300">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    Transform Your Future
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                                    Join thousands of students advancing their skills with our comprehensive learning platform.
                                </p>
                                <p className="text-indigo-300 text-xs mt-2 font-medium">Learn • Grow • Succeed</p>
                            </div>
                        </div>
                        <div className="flex space-x-3 mt-6">
                            {[
                                { icon: Facebook, color: "hover:bg-blue-600" },
                                { icon: Twitter, color: "hover:bg-sky-500" },
                                { icon: Instagram, color: "hover:bg-pink-600" },
                                { icon: Linkedin, color: "hover:bg-blue-700" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`bg-slate-700/50 ${social.color} p-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {["Home", "Features", "Pricing", "Contact"].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-sm block py-1 hover:translate-x-1"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                        <ul className="space-y-2">
                            {[
                                "Help Center",
                                "Course Catalog",
                                "Terms of Service",
                                "Privacy Policy",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-slate-300 hover:text-purple-400 transition-colors duration-300 text-sm block py-1 hover:translate-x-1"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-6 border border-slate-700/30 hover:border-indigo-500/30 transition-colors duration-300">
                    <div className="text-center mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Get In Touch</h3>
                        <p className="text-slate-400 text-sm">Ready to start your learning journey? Let's connect!</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a 
                            href="mailto:tassnemm70@gmail.com"
                            className="group flex items-center space-x-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-5 py-3 hover:border-indigo-400/40 hover:bg-indigo-500/20 transition-all duration-300"
                        >
                            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:shadow-lg group-hover:shadow-indigo-500/25 transition-shadow duration-300">
                                <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                                tassnemm70@gmail.com
                            </span>
                        </a>
                        
                        <a 
                            href="tel:+201066587314"
                            className="group flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-5 py-3 hover:border-purple-400/40 hover:bg-purple-500/20 transition-all duration-300"
                        >
                            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-shadow duration-300">
                                <Phone className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                                +201066587314
                            </span>
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-700/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm text-center sm:text-left">
                        © 2025 <span className="text-indigo-400 font-medium">Tasneem</span>.
                        All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 p-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center space-x-2 text-sm"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                        <span className="sm:inline hidden">Back to Top</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;