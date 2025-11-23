"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Search, Star, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/navbar';
import HoverFooter from '@/components/ui/hover-footer-demo';

// Sample product data
const products = [
  {
    id: 1,
    name: "Professional Fog Machine",
    price: 250,
    description: "High-output fog machine perfect for large venues",
    category: "SFX Machines",
    rating: 4.8,
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: 2,
    name: "LED Dance Floor Panels",
    price: 120,
    description: "Customizable LED dance floor panels with multiple color options",
    category: "Glow Gears",
    rating: 4.9,
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Paper Wristband",
    price: 300,
    description: "Basic entry and access control wristbands",
    category: "Wristband And Access",
    rating: 4.7,
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: 4,
    name: "Haze Machine",
    price: 180,
    description: "Silent haze machine for consistent atmospheric effects",
    category: "SFX Machines",
    rating: 4.6,
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: 5,
    name: "LED Wristband",
    price: 400,
    description: "Light-up wristbands for special effects",
    category: "Wristband And Access",
    rating: 4.9,
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: 6,
    name: "UV Reactive Decorations",
    price: 75,
    description: "Special decorations that glow under UV light",
    category: "Glow Gears",
    rating: 4.5,
    image: "/placeholder.jpg",
    featured: false
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sfxMachinesDragging, setSfxMachinesDragging] = useState(false);
  const [wristbandDragging, setWristbandDragging] = useState(false);
  const [glowgearDragging, setGlowgearDragging] = useState(false);
  const [sfxMachinesPaused, setSfxMachinesPaused] = useState(false);
  const [wristbandPaused, setWristbandPaused] = useState(false);
  const [glowgearPaused, setGlowgearPaused] = useState(false);

  // Get unique categories (excluding Laser System, adding Wristband And Access, with Glow Gears last)
  const categories = ['All', 'SFX Machines', 'Wristband And Access', 'Glow Gears', 'Staff Essentials & VIP Experience'];

  // Filter products based on category only
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navbar />

      {/* Category Filter Section */}
      <div className="py-6 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    // First update the selected category
                    setSelectedCategory(category);
                    // Then scroll to the corresponding section after a brief delay with proper offset
                    setTimeout(() => {
                      let element;
                      if (category === 'SFX Machines') {
                        element = document.getElementById('sfx-machines-section');
                      } else if (category === 'Wristband And Access') {
                        element = document.getElementById('wristband-section');
                      } else if (category === 'Glow Gears') {
                        element = document.getElementById('glowgear-section');
                      } else if (category === 'Staff Essentials & VIP Experience') {
                        element = document.getElementById('staff-vip-section');
                      }

                      if (element) {
                        const offsetTop = element.offsetTop - 100; // Subtract 100px to account for navbar and ensure title is visible
                        window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                        });
                      } else if (category === 'All') {
                        // For 'All', scroll to top
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }, 100); // Small delay to ensure the state updates first
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SFX Machines Section */}
      <div className="py-2 px-6" id="sfx-machines-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white">
            Stage Effect Machine
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Professional SFX equipment for concerts, festivals, and live productions. Engineered for
            reliability and performance, our machines deliver stunning stage visuals and crowd effects
            used by top production teams.
          </p>
          <div className="mt-6">
            <a
              href="https://forms.gle/kAAdjqfRY2qaafqb9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Rotating Feature Images Section - Marquee Style */}
      <div className="py-0 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-4"
              drag="x"
              dragElastic={0.2}
              dragMomentum={false}
              onDragStart={() => {
                setSfxMachinesDragging(true);
                setSfxMachinesPaused(true);
              }}
              onDragEnd={(event, info) => {
                setSfxMachinesDragging(false);
                // Restart the auto-rotation after a delay to allow user to see the dragged position
                setTimeout(() => {
                  setSfxMachinesPaused(false);
                }, 3000); // Resume auto-rotation after 3 seconds of no drag
              }}
              animate={{
                x: sfxMachinesPaused ? 0 : ["-100%", "0%"],
                transition: {
                  ease: "linear",
                  duration: sfxMachinesPaused ? 0 : (typeof window !== 'undefined' && window.innerWidth <= 768 ? 15 : 30),
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              {[
                "/co2image.jpg",
                "/coldsparkimage.jpg",
                "/conffetiimage.jpg",
                "/flameimage.jpg",
                "/image1.jpg",
                "/image2.jpg",
                "/image3.jpg",
                "/image4.jpg",
                "/image13.jpg",
                "/image14.jpg",
                "/image15.jpg",
                "/image16.jpg",
                "/image17.jpg",
                "/co2image.jpg",
                "/coldsparkimage.jpg",
                "/conffetiimage.jpg",
                "/flameimage.jpg",
                "/image1.jpg",
                "/image2.jpg",
                "/image3.jpg",
                "/image4.jpg",
                "/image13.jpg",
                "/image14.jpg",
                "/image15.jpg",
                "/image16.jpg",
                "/image17.jpg"
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                  style={{
                    rotate: `${(index % 2 === 0 ? -1 : 2)}deg`,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Stage Effect ${index + 1}`}
                    fill
                    className="object-cover rounded-xl"
                    priority={false}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* SFX Machines Section */}
      <div className="py-0 px-6 -mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column with requested machines */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">CO2 JET MACHINE</h3>
                <p className="text-sm text-neutral-300">Dramatic low-lying fog effects</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">CONFETTI MACHINE</h3>
                <p className="text-sm text-neutral-300">Perfect for celebrations</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">FOG MACHINE</h3>
                <p className="text-sm text-neutral-300">Classic atmospheric effects</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">SNOW MACHINE</h3>
                <p className="text-sm text-neutral-300">Realistic snow effects</p>
              </div>
            </div>
            {/* Right Column with specified machines in order */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">FLAME MACHINE</h3>
                <p className="text-sm text-neutral-300">Realistic fire effects safely contained</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">COLD SPARK MACHINE</h3>
                <p className="text-sm text-neutral-300">Safe, cool sparks up to 3 meters</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">BUBBLE MACHINE</h3>
                <p className="text-sm text-neutral-300">Create dreamy bubble effects</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">SFX CONTROLLER &amp; ACCESSORIES</h3>
                <p className="text-sm text-neutral-300">Wireless control systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wristband And Access Section */}
      <div className="py-2 px-6" id="wristband-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Wristband And Access
          </h2>
          <p className="text-center text-neutral-300 mb-4 max-w-3xl mx-auto">
            Event control and identification essentials. Efficient, stylish, and customizable solutions for
            access management and branding.
          </p>
          <div className="text-center mb-8">
            <a
              href="https://forms.gle/nnDPgzBXpArdtKvu7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Order Now
            </a>
          </div>

          {/* Rotating Wristband Images Section - Marquee Style */}
          <div className="py-0 px-6">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-xl [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                className="flex gap-4"
                drag="x"
                dragElastic={0.2}
                dragMomentum={false}
                onDragStart={() => {
                  setWristbandDragging(true);
                  setWristbandPaused(true);
                }}
                onDragEnd={() => {
                  setWristbandDragging(false);
                  // Restart the auto-rotation after a delay to allow user to see the dragged position
                  setTimeout(() => {
                    setWristbandPaused(false);
                  }, 3000); // Resume auto-rotation after 3 seconds of no drag
                }}
                animate={{
                  x: wristbandPaused ? 0 : ["-100%", "0%"],
                  transition: {
                    ease: "linear",
                    duration: wristbandPaused ? 0 : (typeof window !== 'undefined' && window.innerWidth <= 768 ? 15 : 30),
                    repeat: Infinity,
                  },
                }}
              >
                {[
                  "/band1.jpg",
                  "/wristband.jpg",
                  "/band3.jpg",
                  "/ledbadge.jpg",
                  "/band2.jpg",
                  "/eventbands2.jpg",
                  "/band4.jpg",
                  "/wristband2.jpg",
                  "/band1.jpg",
                  "/wristband.jpg",
                  "/band3.jpg",
                  "/ledbadge.jpg",
                  "/band2.jpg",
                  "/eventbands2.jpg",
                  "/band4.jpg",
                  "/wristband2.jpg"
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                    style={{
                      rotate: `${(index % 2 === 0 ? -1 : 2)}deg`,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Wristband ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      priority={false}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Wristband Accessories Section */}
      <div className="py-0 px-6 -mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column with specified wristband items */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">PAPER WRISTBAND</h3>
                <p className="text-sm text-neutral-300">Basic entry and access control</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LED WRISTBAND</h3>
                <p className="text-sm text-neutral-300">Light-up for special effects</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">CUSTOM LANYARD</h3>
                <p className="text-sm text-neutral-300">Branded identification solutions</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">NAME TAGS</h3>
                <p className="text-sm text-neutral-300">Professional identification</p>
              </div>
            </div>
            {/* Right Column with remaining wristband items */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">FABRIC / SILICON WRISTBAND</h3>
                <p className="text-sm text-neutral-300">Durable and comfortable</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">RFID WRISTBAND</h3>
                <p className="text-sm text-neutral-300">Contactless access technology</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">UV-REACTION WRISTBAND</h3>
                <p className="text-sm text-neutral-300">Glow under blacklight</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LED BADGE</h3>
                <p className="text-sm text-neutral-300">Customizable light-up tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GlowGear Section */}
      <div className="py-2 px-6 bg-black" id="glowgear-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              GlowGear
            </h2>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Part of the performance with glowing, flashing, and reactive items designed for music-driven environment.
              Fun, crowd-lighting accessories perfect for night events and festivals. Turn your audience into an
              immersive experience.
            </p>
            <div className="mt-6">
              <a
                href="https://forms.gle/nnDPgzBXpArdtKvu7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Rotating GlowGear Images Section - Marquee Style */}
          <div className="py-0">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-xl [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                className="flex gap-4"
                drag="x"
                dragElastic={0.2}
                dragMomentum={false}
                onDragStart={() => {
                  setGlowgearDragging(true);
                  setGlowgearPaused(true);
                }}
                onDragEnd={() => {
                  setGlowgearDragging(false);
                  // Restart the auto-rotation after a delay to allow user to see the dragged position
                  setTimeout(() => {
                    setGlowgearPaused(false);
                  }, 3000); // Resume auto-rotation after 3 seconds of no drag
                }}
                animate={{
                  x: glowgearPaused ? 0 : ["-100%", "0%"],
                  transition: {
                    ease: "linear",
                    duration: glowgearPaused ? 0 : (typeof window !== 'undefined' && window.innerWidth <= 768 ? 15 : 30),
                    repeat: Infinity,
                  },
                }}
              >
                {[
                  "/bodypaint.jpg",
                  "/glasses.jpg",
                  "/glowpaint.jpg",
                  "/glowshoelace.jpg",
                  "/glowstick.jpg",
                  "/bodypaint.jpg",
                  "/glasses.jpg",
                  "/glowpaint.jpg"
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                    style={{
                      rotate: `${(index % 2 === 0 ? -1 : 2)}deg`,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`GlowGear ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      priority={false}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* GlowGear Categories */}
          <div className="py-0 -mt-4">
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column with specified glow gear items */}
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">LED GLOW STICK</h3>
                  <p className="text-sm text-neutral-300">Classic light-up party accessories</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">LED FOAM BATONS</h3>
                  <p className="text-sm text-neutral-300">Safe glow sticks for dancing</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">LED NECKLACE</h3>
                  <p className="text-sm text-neutral-300">Fashionable light-up jewelry</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">LED FLOWER CROWNS</h3>
                  <p className="text-sm text-neutral-300">Enchanting illuminated headwear</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">LED GLASSES / SHADES</h3>
                  <p className="text-sm text-neutral-300">Light-up eyewear for night events</p>
                </div>
              </div>
              {/* Right Column with remaining glow gear items */}
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">GLOW PAINT / BODY PAINT</h3>
                  <p className="text-sm text-neutral-300">UV reactive body art materials</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">GLOW BRACELETS & RINGS</h3>
                  <p className="text-sm text-neutral-300">Light-up accessories for hands</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">GLOW SHOELACES</h3>
                  <p className="text-sm text-neutral-300">Illuminated footwear accessories</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">LED EARRING / JEWELRY</h3>
                  <p className="text-sm text-neutral-300">Light-up accessories</p>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">MORE......</h3>
                  <p className="text-sm text-neutral-300">Additional glow items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Essentials AND VIP Experience Section */}
      <div className="py-2 px-6 bg-gradient-to-b from-black to-gray-900" id="staff-vip-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Staff Essentials & VIP Experience
          </h2>
          <p className="text-xl text-neutral-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
            Our Staff Essentials ensure event crews and security personnel are equipped with dependable, visibility-focused
            tools for seamless operations, while our VIP & Experience selection adds a touch of sophistication through
            premium, light-enhanced accessories designed to create unforgettable moments for high-tier guests and exclusive
            areas.
          </p>
          <div className="text-center mb-8">
            <a
              href="https://forms.gle/nnDPgzBXpArdtKvu7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Order Now
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column with specified items */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">CUSTOM LANYARD</h3>
                <p className="text-sm text-neutral-300">Professional identification accessories</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LIGHT UP BADGES / CLIP PINS</h3>
                <p className="text-sm text-neutral-300">Illuminated identification for events</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">MINI FLASH LIGHT</h3>
                <p className="text-sm text-neutral-300">Compact lighting solutions</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">MINI HAND FANS</h3>
                <p className="text-sm text-neutral-300">Personal cooling accessories</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">KEYCHAINS / ACCESS TAGS</h3>
                <p className="text-sm text-neutral-300">Personalized identification accessories</p>
              </div>
            </div>
            {/* Right Column with specified items */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LED CUP / BOTTLES</h3>
                <p className="text-sm text-neutral-300">Illuminated beverage accessories</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">GLOW IN THE DARK GIFT BAG</h3>
                <p className="text-sm text-neutral-300">Luminous packaging solutions</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LIGHT UP NECK TAGS</h3>
                <p className="text-sm text-neutral-300">Illuminated identification tags</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">SMALL LED DECOR (FOR TABLE & LOUNGE)</h3>
                <p className="text-sm text-neutral-300">Ambient lighting for premium areas</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">MORE......</h3>
                <p className="text-sm text-neutral-300">Additional premium items</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HoverFooter />
    </div>
  );
}