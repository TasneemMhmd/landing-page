import React, { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-50 shadow-lg border-b border-slate-200 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <BookOpen className="h-6 w-6 text-white" />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <a
                                href="#home"
                                className="text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-slate-100"
                            >
                                Home
                            </a>
                            <a
                                href="#features"
                                className="text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-slate-100"
                            >
                                Features
                            </a>
                            <a
                                href="#pricing"
                                className="text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-slate-100"
                            >
                                Pricing
                            </a>
                            <a
                                href="#contact"
                                className="text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-slate-100"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-700 hover:text-indigo-600 p-2 rounded-md transition-colors duration-200"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border border-slate-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#home"
                                className="text-slate-700 hover:text-indigo-600 hover:bg-slate-50 block text-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="#features"
                                className="text-slate-700 hover:text-indigo-600 hover:bg-slate-50 block text-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#pricing"
                                className="text-slate-700 hover:text-indigo-600 hover:bg-slate-50 block text-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Pricing
                            </a>
                            <a
                                href="#contact"
                                className="text-slate-700 hover:text-indigo-600 hover:bg-slate-50 block text-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;