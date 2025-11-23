"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  // Google Form URL for booking services
  const bookingFormUrl = "https://forms.gle/kAAdjqfRY2qaafqb9";

  const handleBookNowClick = () => {
    window.open(bookingFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full bg-[#0b0b0b] py-20 px-6">
      {/* Mobile layout: sequential content */}
      <div className="md:hidden space-y-8">
        {/* Main Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="text-yellow-400 font-extrabold leading-tight text-3xl">
            TeamSabadoorFX.store-Elevate Every Event
          </h1>
        </motion.div>

        {/* First Paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            TeamSabadoorFX.store is your trusted source for premium event FX products, crowd-engagement tools, and modern event essentials. As the newest division of EthioSabadoor Trading PLC, we bring innovation, energy, and reliability to the heart of every celebration. From glow gear and wristbands to stage effects, VIP items, and staff tools, we provide everything you need to enhance your event atmosphere and deliver unforgettable experiences.
          </p>
        </motion.div>

        {/* Image 7 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="rounded-xl overflow-hidden shadow-xl h-64"
        >
          <Image
            src="/image7.jpeg"
            alt="TeamsabadorFX Product 2"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Second Paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            Whether you are preparing a festival, club event, corporate function, or private celebration, TeamSabadoorFX.store offers high-quality products designed to brighten, energize, and transform any environment. Our mission is simple: to help your event stand out with creative FX solutions and consistent professional support.
          </p>
        </motion.div>

        {/* Image 3 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="rounded-xl overflow-hidden shadow-xl h-64"
        >
          <Image
            src="/image3.jpg"
            alt="TeamsabadorFX Product 1"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Final paragraph and button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            Explore our wide collection, customize your order, and let us power your vision - one effect at a time.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookNowClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-base"
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop layout: customized as requested */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Top row: Title, First paragraph and image5.jpg */}
        <div className="lg:col-span-2 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Title and First Paragraph */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Main Title */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-yellow-400 font-extrabold leading-tight text-4xl mb-6"
              >
                TeamSabadoorFX.store-Elevate Every Event
              </motion.h1>

              {/* First Paragraph */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-neutral-300 text-xl leading-relaxed"
              >
                TeamSabadoorFX.store is your trusted source for premium event FX products, crowd-engagement tools, and modern event essentials. As the newest division of EthioSabadoor Trading PLC, we bring innovation, energy, and reliability to the heart of every celebration. From glow gear and wristbands to stage effects, VIP items, and staff tools, we provide everything you need to enhance your event atmosphere and deliver unforgettable experiences.
              </motion.p>
            </motion.div>

            {/* Right: image3.jpg (larger) */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-xl w-full h-80" // Full width, fixed height
              >
                <Image
                  src="/image3.jpg"
                  alt="TeamsabadorFX Product 1"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom row: image7.jpeg on left, Second paragraph on right */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: image7.jpeg */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="flex justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-xl w-full h-80" // Full width, fixed height
              >
                <Image
                  src="/image7.jpeg"
                  alt="TeamsabadorFX Product 2"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right: Second paragraph */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-neutral-300 text-xl leading-relaxed h-full flex items-center"
              >
                Whether you are preparing a festival, club event, corporate function, or private celebration, TeamSabadoorFX.store offers high-quality products designed to brighten, energize, and transform any environment. Our mission is simple: to help your event stand out with creative FX solutions and consistent professional support.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Final paragraph and button */}
      <div className="hidden lg:block text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.p
            className="text-neutral-300 text-xl leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Explore our wide collection, customize your order, and let us power your vision - one effect at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookNowClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}