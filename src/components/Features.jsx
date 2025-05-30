import React from "react";
import { Users, Award, Clock, Star } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Star,
            title: "Expert Instructors",
            description:
                "Learn from industry professionals with real-world experience and proven expertise.",
            color: "violet",
            gradient: "from-violet-500 to-purple-600"
        },
        {
            icon: Users,
            title: "Interactive Community",
            description:
                "Connect with fellow learners, share knowledge, and grow together in our vibrant community.",
            color: "cyan",
            gradient: "from-cyan-500 to-blue-600"
        },
        {
            icon: Award,
            title: "Verified Certificates",
            description:
                "Earn recognized certificates upon completion to showcase your new skills to employers.",
            color: "emerald",
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            icon: Clock,
            title: "Learn at Your Pace",
            description:
                "Flexible scheduling allows you to learn whenever and wherever works best for you.",
            color: "rose",
            gradient: "from-rose-500 to-pink-600"
        },
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            violet: {
                bg: "bg-gradient-to-br from-violet-100 to-purple-100",
                hoverBg: "bg-gradient-to-br from-violet-600 to-purple-700",
                icon: "text-violet-600",
                hoverIcon: "text-white",
                ring: "ring-violet-200",
                shapeColor: "bg-gradient-to-br from-violet-200/20 to-purple-300/20"
            },
            cyan: {
                bg: "bg-gradient-to-br from-cyan-100 to-blue-100",
                hoverBg: "bg-gradient-to-br from-cyan-600 to-blue-700",
                icon: "text-cyan-600",
                hoverIcon: "text-white",
                ring: "ring-cyan-200",
                shapeColor: "bg-gradient-to-br from-cyan-200/20 to-blue-300/20"
            },
            emerald: {
                bg: "bg-gradient-to-br from-emerald-100 to-teal-100",
                hoverBg: "bg-gradient-to-br from-emerald-600 to-teal-700",
                icon: "text-emerald-600",
                hoverIcon: "text-white",
                ring: "ring-emerald-200",
                shapeColor: "bg-gradient-to-br from-emerald-200/20 to-teal-300/20"
            },
            rose: {
                bg: "bg-gradient-to-br from-rose-100 to-pink-100",
                hoverBg: "bg-gradient-to-br from-rose-600 to-pink-700",
                icon: "text-rose-600",
                hoverIcon: "text-white",
                ring: "ring-rose-200",
                shapeColor: "bg-gradient-to-br from-rose-200/20 to-pink-300/20"
            }
        };
        return colorMap[color];
    };

    return (
        <section id="features" className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">
                        Why Choose Our Platform
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Everything you need to advance your career and master new skills
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const colors = getColorClasses(feature.color);

                        return (
                            <div
                                key={index}
                                className="relative text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gray-100 hover:from-white hover:via-white hover:to-slate-50 transform hover:-translate-y-2 border border-slate-200/50 hover:border-white"
                            >
                                <div className={`absolute -top-2 -right-2 w-12 h-12 ${colors.shapeColor} rounded-full opacity-60`}></div>
                                <div className={`absolute -bottom-1 -left-1 w-8 h-8 ${colors.shapeColor} rounded-full opacity-40`}></div>
                                <div className={`absolute top-1/3 -right-1 w-6 h-6 ${colors.shapeColor} rotate-45 opacity-50`}></div>
                                <div className={`absolute top-4 left-4 w-3 h-3 ${colors.shapeColor} rounded-full opacity-30`}></div>
                                <div className={`absolute bottom-4 right-4 w-4 h-4 ${colors.shapeColor} opacity-35 rotate-45`}></div>
                                <div className={`${colors.bg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:${colors.hoverBg} transition-all duration-500 shadow-lg group-hover:shadow-xl ring-4 ${colors.ring} group-hover:ring-white/50 group-hover:scale-110`}>
                                    <feature.icon
                                        className={`w-10 h-10 ${colors.icon} group-hover:${colors.hoverIcon} transition-all duration-500 group-hover:scale-110`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;