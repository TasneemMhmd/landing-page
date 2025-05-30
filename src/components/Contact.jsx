import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, X, Loader2 } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = "Subject must be at least 3 characters";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const showAlert = (type, message) => {
        setAlert({ show: true, type, message });
        setTimeout(() => {
            setAlert({ show: false, type: '', message: '' });
        }, 5000);
    };

    const closeAlert = () => {
        setAlert({ show: false, type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            showAlert('error', 'Please fill the form');
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const isSuccess = Math.random() > 0.3;
            
            if (isSuccess) {
                showAlert('success', 'Message sent successfully! We\'ll get back to you soon.');
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            showAlert('error', 'Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const AlertComponent = ({ alert, onClose }) => {
        if (!alert.show) return null;

        const isSuccess = alert.type === 'success';
        const bgColor = isSuccess ? 'bg-green-50' : 'bg-red-50';
        const borderColor = isSuccess ? 'border-green-200' : 'border-red-200';
        const textColor = isSuccess ? 'text-green-800' : 'text-red-800';
        const iconColor = isSuccess ? 'text-green-500' : 'text-red-500';
        const Icon = isSuccess ? CheckCircle : AlertCircle;

        return (
            <div className={`${bgColor} ${borderColor} border rounded-lg p-4 mb-6 relative`}>
                <div className="flex items-start">
                    <Icon className={`${iconColor} w-5 h-5 mt-0.5 mr-3 flex-shrink-0`} />
                    <p className={`${textColor} text-sm font-medium flex-1`}>
                        {alert.message}
                    </p>
                    <button
                        onClick={onClose}
                        className={`${textColor} hover:opacity-70 ml-2 flex-shrink-0`}
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <section id="contact" className="bg-slate-50 py-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-slate-600">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                    <AlertComponent alert={alert} onClose={closeAlert} />
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-slate-700 mb-2"
                            >
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                    errors.name 
                                        ? 'border-red-300 bg-red-50' 
                                        : 'border-slate-300'
                                }`}
                                placeholder="Enter your full name"
                                disabled={isSubmitting}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-700 mb-2"
                            >
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                    errors.email 
                                        ? 'border-red-300 bg-red-50' 
                                        : 'border-slate-300'
                                }`}
                                placeholder="Enter your email address"
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-slate-700 mb-2"
                            >
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                    errors.subject 
                                        ? 'border-red-300 bg-red-50' 
                                        : 'border-slate-300'
                                }`}
                                placeholder="What's this about?"
                                disabled={isSubmitting}
                            />
                            {errors.subject && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.subject}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-slate-700 mb-2"
                            >
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none ${
                                    errors.message 
                                        ? 'border-red-300 bg-red-50' 
                                        : 'border-slate-300'
                                }`}
                                placeholder="Tell us more about your inquiry..."
                                disabled={isSubmitting}
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.message}
                                </p>
                            )}
                            <p className="mt-1 text-sm text-slate-500">
                                {formData.message.length}/500 characters
                            </p>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg ${
                                    isSubmitting
                                        ? 'bg-indigo-400 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700'
                                } text-white`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;