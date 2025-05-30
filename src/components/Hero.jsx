import React from "react";
import { ArrowRight, Star, Phone } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <div className="text-center lg:text-left order-1 lg:order-1">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                            <Star className="w-4 h-4 mr-1 animate-spin text-indigo-700" style={{ animationDuration: '3s' }} />

                            #1 Learning Platform 2025
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 sm:mb-6 leading-tight">
                            Upgrade Your Skills. Build Your Future.
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
                            Explore our collection of high-quality courses and learn at your
                            own pace with top instructors.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0">
                            <a href="#pricing" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
                                    Start Learning Free
                                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                            <a href="#contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 border-2 border-slate-200 hover:border-indigo-300 flex items-center justify-center group shadow-md">
                                    <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                                    Contact us
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-1 mb-8 lg:mb-0">
                        <div className="relative">
<img
  src="/images/hero.png"
  alt="Students learning online"
  width="800"
  height="600"
  className="..."
  loading="eager"
  decoding="async"
/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;