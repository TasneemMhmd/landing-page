import React from "react";
import { Check, Star, Sparkles } from "lucide-react";

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "/month",
            description: "Perfect for getting started",
            features: [
                "Access to 5+ courses",
                "Basic community access",
                "Course completion certificates",
                "Mobile app access",
            ],
            buttonText: "Start Free",
            popular: false,
        },
        {
            name: "Pro",
            price: "$29",
            period: "/month",
            description: "Most popular for serious learners",
            features: [
                "Access to 100+ courses",
                "Priority community support",
                "Verified certificates",
                "Offline course downloads",
                "1-on-1 mentorship sessions",
                "Advanced progress tracking",
            ],
            buttonText: "Start Pro",
            popular: true,
        },
        {
            name: "Enterprise",
            price: "$99",
            period: "/month",
            description: "For teams and organizations",
            features: [
                "Unlimited course access",
                "Team management dashboard",
                "Custom learning paths",
                "Advanced analytics",
                "Dedicated account manager",
                "Priority technical support",
                "Custom integrations",
            ],
            buttonText: "Start Enterprise",
            popular: false,
        },
    ];

    return (
        <section 
            id="pricing"
            className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Choose Your Plan
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent">
                        Choose Your Learning Path
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Start free or upgrade to unlock premium features and accelerate your learning
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 border border-white/20 group ${
                                plan.popular 
                                    ? "ring-2 ring-indigo-400 transform scale-105 bg-gradient-to-br from-white to-indigo-50/50" 
                                    : ""
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                                        <Star
                                            className="w-4 h-4 mr-1 animate-spin"
                                            style={{ animationDuration: "3s" }}
                                        />
                                        Most Popular
                                    </div>
                                </div>
                            )}
                            <div className="relative z-10">

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                                        {plan.name}
                                    </h3>
                                    <p className="text-slate-600 mb-6">{plan.description}</p>
                                    <div className="flex items-baseline justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-5xl font-bold text-slate-800">
                                            {plan.price}
                                        </span>
                                        <span className="text-slate-600 ml-1">{plan.period}</span>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start hover:translate-x-2 transition-all duration-500">
                                                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5 ">
                                                    <Check className="w-3 h-3 text-indigo-600" />
                                                </div>
                                                <span className="text-slate-600 group-hover:text-slate-700 transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button
                                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden ${
                                        plan.popular
                                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl"
                                            : "bg-slate-100 hover:bg-slate-200 text-slate-800 hover:shadow-lg border border-slate-200 hover:border-indigo-300"
                                    }`}
                                >
                                    <span className="relative z-10">{plan.buttonText}</span>
                                    {plan.popular && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity"></div>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className={`text-center mt-16 transform transition-all duration-1000 delay-1000 }
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-lg border border-white/20">
                        <div className="inline-flex items-center text-slate-600 mb-2">

                            <Sparkles className="w-4 h-4 mr-2 text-indigo-700 " />
                            All plans include 30-day money-back guarantee
                        </div>
                        <p className="text-slate-500 text-sm">
                            Questions?
                            <a
                                href="#contact"
                                className="text-indigo-600 hover:text-indigo-700 ml-1 font-semibold hover:underline transition-all"
                            >
                                Contact our team →
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;