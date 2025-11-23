import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            TeamSabadoorFX.store-Elevate Every Event
          </h1>
        </motion.div>

        {/* Main Content with Image for Mobile and Creative Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              TeamSabadoorFX.store is your trusted source for premium event FX products, crowd-engagement tools, and modern event essentials. As the newest division of EthioSabadoor Trading PLC, we bring innovation, energy, and reliability to the heart of every celebration. From glow gear and wristbands to stage effects, VIP items, and staff tools, we provide everything you need to enhance your event atmosphere and deliver unforgettable experiences.
            </p>

            {/* Mobile: Image appears here */}
            <div className="lg:hidden mb-6 rounded-xl overflow-hidden">
              <Image
                src="/image3.jpg"
                alt="Team Sabadoor FX Products"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you are preparing a festival, club event, corporate function, or private celebration, TeamSabadoorFX.store offers high-quality products designed to brighten, energize, and transform any environment. Our mission is simple: to help your event stand out with creative FX solutions and consistent professional support.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Explore our wide collection, customize your order, and let us power your vision - one effect at a time.
            </p>
          </motion.div>

          {/* Desktop: Image on the right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block rounded-xl overflow-hidden"
          >
            <Image
              src="/image3.jpg"
              alt="Team Sabadoor FX Products"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
