"use client";

import { motion } from "framer-motion";
import Navbar from '@/components/navbar';
import HoverFooter from '@/components/ui/hover-footer-demo';

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navbar />
      
      {/* Upcoming Events Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
              Stay tuned for exciting events and announcements
            </p>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-12 max-w-md w-full">
              <div className="text-center">
                <div className="text-5xl mb-4">⏳</div>
                <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
                <p className="text-neutral-300">
                  Our upcoming events section will be live shortly with exciting announcements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <HoverFooter />
    </div>
  );
}