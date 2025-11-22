"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Music2 } from "lucide-react";
import Navbar from '@/components/navbar';
import HoverFooter from '@/components/ui/hover-footer-demo';

import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants for form elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const formObject = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      // Using Formspree form handling service
      // Your Formspree URL
      const response = await fetch('https://formspree.io/f/xzzweqrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
        e.target.reset(); // Reset the form after successful submission
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 overflow-x-hidden">
      <Navbar />
      {/* Contact Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* LEFT COLUMN - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#111111] p-10 lg:p-14 rounded-xl"
            >
              <h1 className="text-white text-4xl font-bold text-center mb-10">
                Get In Touch
              </h1>

              <motion.form
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label className="text-white text-sm block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:border-white"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label className="text-white text-sm block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:border-white"
                    placeholder="Your email"
                    required
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div variants={itemVariants}>
                  <label className="text-white text-sm block mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:border-white"
                    placeholder="Subject"
                    required
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label className="text-white text-sm block mb-2">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    className="w-full bg-transparent border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:border-white"
                    placeholder="Your message"
                    required
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  className="bg-white text-black font-semibold rounded-md py-3 w-full hover:bg-gray-200 transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* RIGHT COLUMN - Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              {/* Top Row - Phone and Email */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                {/* Phone Number */}
                <div className="text-center">
                  <Phone className="w-14 h-14 text-white mx-auto mb-3" />
                  <h3 className="text-white text-2xl font-semibold mt-6 mb-2 text-center">
                    Phone Number
                  </h3>
                  <p className="text-neutral-300 text-center">
                    +251 991259465
                  </p>
                </div>

                {/* Email Address */}
                <div className="text-center">
                  <Mail className="w-14 h-14 text-white mx-auto mb-3" />
                  <h3 className="text-white text-2xl font-semibold mt-6 mb-2 text-center">
                    Email Address
                  </h3>
                  <p className="text-neutral-300 text-center">
                    teamsabadoorfx@gmail.com
                  </p>
                </div>
              </div>

              {/* Bottom Row - WhatsApp and Office */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                {/* WhatsApp */}
                <div className="text-center">
                  <MessageCircle className="w-14 h-14 text-white mx-auto mb-3" />
                  <h3 className="text-white text-2xl font-semibold mt-6 mb-2 text-center">
                    WhatsApp
                  </h3>
                  <p className="text-neutral-300 text-center">
                    +251 991259465
                  </p>
                </div>

                {/* Office Location */}
                <div className="text-center">
                  <MapPin className="w-14 h-14 text-white mx-auto mb-3" />
                  <h3 className="text-white text-2xl font-semibold mt-6 mb-2 text-center">
                    Our Office
                  </h3>
                  <p className="text-neutral-300 text-center">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-white text-2xl font-bold text-center">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4 justify-center mt-6">
                  <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-md w-12 h-12 flex items-center justify-center text-white transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-md w-12 h-12 flex items-center justify-center text-white transition">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-md w-12 h-12 flex items-center justify-center text-white transition">
                    <Music2 className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <HoverFooter />
    </div>
  );
}