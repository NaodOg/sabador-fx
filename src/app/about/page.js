"use client";

import { motion } from "framer-motion";
import {
  Building,
  Shield,
  Tag,
  Scale
} from "lucide-react";
import Image from "next/image";
import React from "react";
import MainNavbar from '@/components/navbar'
import HoverFooter from '@/components/ui/hover-footer-demo'

// Feature Cards Component
const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="bg-neutral-800 rounded-2xl p-6 shadow-lg flex items-start gap-4"
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.15  // Stagger the animation based on index
    }}
  >
    <div className="bg-neutral-700 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const FeatureCardsList = () => {
  const features = [
    {
      icon: Building,
      title: "Backed by experience",
      description: "Supported by Sabadoor Events and EthioSabadoor Security Service."
    },
    {
      icon: Shield,
      title: "Quality first",
      description: "All items are tested for safety, performance, and durability."
    },
    {
      icon: Tag,
      title: "Branding options",
      description: "Custom wristbands, glow items, and VIP accessories."
    },
    {
      icon: Scale,
      title: "Scalable solutions",
      description: "Ideal for small events, clubs, concerts, and festivals."
    }
  ];

  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 overflow-x-hidden">
      <MainNavbar />
      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: "WHO WE ARE" heading */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-center">Who We Are</h1>
              <div className="mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </motion.div>

            {/* Column 2: Large image + Descriptive paragraph */}
            <div>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                className="mb-6"
              >
                <Image
                  src="/image7.jpg?v=1"
                  alt="Descriptive image"
                  width={300}
                  height={80}
                  className="w-full h-auto rounded-lg object-cover max-w-full"
                />
              </motion.div>

              <p className="text-white">
                A Division of EthioSabadoor Trading PLC, supplies premium stage effect machines, glow accessories, and event essentials that amplify audience energy and visual performance quality. We work directly with event organizers, stage designers, and production teams to ensure every show, concert, or festival delivers unforgettable moments of light, sound, and excitement.
              </p>
            </div>

            {/* Column 3: Qualifications paragraph + Image */}
            <div>
              <p className="text-white mb-6">
                Our inventory ranges from professional grade SFX machines to interactive glow products, offering everything needed to bring creative event visions to life. We combine cutting-edge technology with years of industry experience to create memorable experiences that exceed expectations.
              </p>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                className="mt-6"
              >
                <Image
                  src="/image9.jpg?v=1"
                  alt="Qualifications image"
                  width={300}
                  height={80}
                  className="w-full h-auto rounded-lg object-cover max-w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-20 px-4 md:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            {/* Left Column */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-wide text-yellow-500">About Us</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">Why Choose TeamSabadоorFX.Store</h2>
              <p className="text-white">
                TeamSabadоorFX.store is a new FX division under EthioSabadoor Trading PLC, created to deliver modern, reliable, and creative event solutions.
              </p>
            </motion.div>

            {/* Right Column - Feature Cards */}
            <div className="w-full lg:w-1/2">
              <FeatureCardsList />
            </div>
          </motion.div>
        </div>
      </div>

      <HoverFooter />
    </div>
  );
}

