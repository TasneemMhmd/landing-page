import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-6">

                <div className="grid md:grid-cols-4 gap-8 mb-4">

                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-indigo-600 p-2 rounded-lg">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <p className="text-slate-300 mb-6 max-w-md">
                            Explore our collection of high-quality courses and learn at your own pace with top instructors.
                        </p>

                        <div className="flex space-x-4">
                            <a href="#" className="bg-slate-700 hover:bg-indigo-600 p-2 rounded-lg transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-slate-700 hover:bg-indigo-600 p-2 rounded-lg transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-slate-700 hover:bg-indigo-600 p-2 rounded-lg transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-slate-700 hover:bg-indigo-600 p-2 rounded-lg transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-slate-300 hover:text-indigo-400 transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-slate-300 hover:text-indigo-400 transition-colors">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-slate-300 hover:text-indigo-400 transition-colors">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Bottom Footer */}
                <div className="border-t border-slate-700 pt-4">
                    <div className="md:text-center">
                        <p className="text-slate-400 text-sm">
                            © 2025 Tasneem. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;