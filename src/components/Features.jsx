import React from 'react';
import { Users, Award, Clock, Star } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Star,
            title: "Expert Instructors",
            description: "Learn from industry professionals with real-world experience and proven expertise."
        },
        {
            icon: Users,
            title: "Interactive Community",
            description: "Connect with fellow learners, share knowledge, and grow together in our vibrant community."
        },
        {
            icon: Award,
            title: "Verified Certificates",
            description: "Earn recognized certificates upon completion to showcase your new skills to employers."
        },
        {
            icon: Clock,
            title: "Learn at Your Pace",
            description: "Flexible scheduling allows you to learn whenever and wherever works best for you."
        }
    ];

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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-lg shadow-md hover:bg-slate-50 transition-colors group"
                        >
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                                <feature.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;