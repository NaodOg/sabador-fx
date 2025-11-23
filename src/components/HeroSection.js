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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* LEFT SIDE - TEXT CONTENT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-yellow-400 font-extrabold leading-tight text-3xl md:text-4xl lg:text-5xl mb-6"
          >
            TeamSabadoorFX.store-Elevate Every Event
          </motion.h1>

          {/* Paragraph 1 */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-neutral-300 text-base md:text-xl leading-relaxed mb-4 max-w-xl"
          >
            TeamSabadoorFX.store is your trusted source for premium event FX products, crowd-engagement tools, and modern event essentials. As the newest division of EthioSabadoor Trading PLC, we bring innovation, energy, and reliability to the heart of every celebration. From glow gear and wristbands to stage effects, VIP items, and staff tools, we provide everything you need to enhance your event atmosphere and deliver unforgettable experiences.
          </motion.p>

          {/* Mobile: Images appear here */}
          <div className="lg:hidden mb-6 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src="/image3.jpg"
                alt="TeamsabadorFX Product 1"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src="/image7.jpeg"
                alt="TeamsabadorFX Product 2"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-neutral-300 text-base md:text-xl leading-relaxed mb-4 max-w-xl"
          >
            Whether you are preparing a festival, club event, corporate function, or private celebration, TeamSabadoorFX.store offers high-quality products designed to brighten, energize, and transform any environment. Our mission is simple: to help your event stand out with creative FX solutions and consistent professional support.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-neutral-300 text-base md:text-xl leading-relaxed mb-8 max-w-xl"
          >
            Explore our wide collection, customize your order, and let us power your vision - one effect at a time.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookNowClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-base md:text-lg"
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - IMAGES (Desktop only) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src="/image3.jpg"
                alt="TeamsabadorFX Product 1"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src="/image7.jpeg"
                alt="TeamsabadorFX Product 2"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}