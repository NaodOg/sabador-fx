'use client';

import { buttonVariants } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { MobileNav } from '@/components/ui/navbar'
import Link from 'next/link'
import Image from 'next/image'
import HoverFooter from '@/components/ui/hover-footer-demo'
import AnimatedHeroDemo from '@/components/ui/hero-3-demo'
import HeroSection from '@/components/HeroSection'
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar'
import { motion } from "framer-motion";
import { Calendar, MonitorSpeaker, Settings } from 'lucide-react';


export default function Home() {
    const [showIntro, setShowIntro] = useState(true); // Show intro by default on first render
    const [hasSeenIntro, setHasSeenIntro] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [introTextVisible, setIntroTextVisible] = useState(false);

    useEffect(() => {
        // Check if we're on the client side
        if (typeof window !== 'undefined') {
            setIsClient(true);

            // Check if the user has already seen the intro in this session
            const hasSeen = sessionStorage.getItem('hasSeenIntro');

            if (hasSeen) {
                // User has already seen the intro in this session, hide it immediately
                setShowIntro(false);
                setHasSeenIntro(true);
            } else {
                // User hasn't seen the intro, the intro is already showing
                // First show the logo, then start the typing animation after a delay
                setTimeout(() => {
                    setIntroTextVisible(true);
                }, 1500); // Delay before starting the text animation

                // Set timer to hide the intro after 6 seconds to allow all animations to complete
                const timer = setTimeout(() => {
                    setShowIntro(false);
                    // Mark that the user has seen the intro in this session
                    sessionStorage.setItem('hasSeenIntro', 'true');
                    setHasSeenIntro(true);
                }, 6000);

                // Clean up the timer when component unmounts
                return () => clearTimeout(timer);
            }
        }
    }, []); // Run only once after component mounts

    // Show the intro if it's set to show (either first visit or client hasn't checked session storage yet)
    if (showIntro) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                    {/* Animated particles */}
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-yellow-500"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 10 + 2}px`,
                                height: `${Math.random() * 10 + 2}px`,
                                opacity: `${Math.random() * 0.5 + 0.1}`,
                                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`
                            }}
                        />
                    ))}
                </div>

                {/* Main content */}
                <div className="relative z-10 text-center px-4">
                    {/* Logo with entrance animation */}
                    <div className="animate-logo-appear">
                        <img
                            src="/FX LOGO.png"
                            alt="Sabador FX Logo"
                            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain mx-auto"
                        />
                    </div>

                    {/* Main quote with JavaScript-based typing animation */}
                    <div className="mt-4 sm:mt-6 md:mt-10 text-center" style={{ opacity: introTextVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                        <div className="mb-4">
                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#C76F1A] tracking-tight drop-shadow-lg whitespace-pre">
                                {introTextVisible && "WE DON'T JUST SUPPLY EFFECTS".split('').map((char, index) => (
                                    <span
                                        key={`line1-${index}`}
                                        className="inline-block opacity-0"
                                        style={{
                                            animation: `fadeInUp 0.3s forwards`,
                                            animationDelay: `${index * 0.08 + 0.2}s`
                                        }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#E3F4E9] tracking-tight drop-shadow-lg whitespace-pre">
                                {introTextVisible && "WE CREATE ATMOSPHERES".split('').map((char, index) => (
                                    <span
                                        key={`line2-${index}`}
                                        className="inline-block opacity-0"
                                        style={{
                                            animation: `fadeInUp 0.3s forwards`,
                                            animationDelay: `${(index * 0.08) + 2.5}s` // Delay second line
                                        }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transition overlay that will fade in before transitioning */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in ${showIntro ? 'opacity-0' : 'opacity-100'}`}
                    style={{ transitionDelay: showIntro ? '0ms' : '500ms' }}
                />

                {/* Custom CSS for animations */}
                <style jsx>{`
                    @keyframes float {
                        0% { transform: translate(0, 0) rotate(0deg); opacity: 0.1; }
                        25% { transform: translate(20px, -30px) rotate(90deg); opacity: 0.3; }
                        50% { transform: translate(-20px, 30px) rotate(180deg); opacity: 0.5; }
                        75% { transform: translate(10px, -15px) rotate(270deg); opacity: 0.3; }
                        100% { transform: translate(0, 0) rotate(360deg); opacity: 0.1; }
                    }

                    @keyframes logo-appear {
                        0% { opacity: 0; transform: scale(0.8) translateY(20px); }
                        70% { opacity: 1; transform: scale(1.05) translateY(-10px); }
                        100% { opacity: 1; transform: scale(1) translateY(0); }
                    }

                    .animate-logo-appear {
                        animation: logo-appear 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
                    }
                    .animate-char-opacity {
                        animation: char-opacity 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
                    }

                    #intro-text-container {
                        animation: container-fade-in 0.1s 1.8s forwards;
                    }

                    @keyframes container-fade-in {
                        to { opacity: 1; }
                    }

                    @keyframes char-opacity {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fade-in-out {
                        animation: fadeInOut 12s infinite ease-in-out;
                    }

                    @keyframes fadeInOut {
                        0%, 25% { opacity: 1; }
                        30%, 100% { opacity: 0; }
                    }

                    .animate-fade-in-out:nth-child(2) {
                        animation-delay: 3s;
                    }

                    .animate-fade-in-out:nth-child(3) {
                        animation-delay: 6s;
                    }

                    .animate-fade-in-out:nth-child(4) {
                        animation-delay: 9s;
                    }
                `}</style>
            </div>
        );
    }

    // Show main content when intro is done or has been seen before
    return (
        <>
        <div
            className="min-h-screen bg-black pt-24 overflow-x-hidden"
        >
            <Navbar />

            {/* Hero Section */}
            <AnimatedHeroDemo />

            {/* Services Section */}
            <div className="py-20 px-6 lg:px-16 bg-black overflow-x-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="flex flex-col lg:flex-row"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                    >
                        {/* Column 1 - No border on mobile or desktop */}
                        <motion.div
                            className="flex-1 flex flex-col items-center px-4 py-4"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <Calendar className="w-16 h-16 text-white" />
                            <h3 className="text-white text-xl font-semibold mt-6 mb-2 text-center">Event Production</h3>
                            <p className="text-neutral-300 text-center text-base max-w-xs mx-auto">
                                Full-scale management for corporate and private events.
                            </p>
                        </motion.div>

                        {/* Column 2 - Has left border only on desktop */}
                        <motion.div
                            className="flex-1 flex flex-col items-center border-l border-neutral-700 px-4 py-4"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <MonitorSpeaker className="w-16 h-16 text-white" />
                            <h3 className="text-white text-xl font-semibold mt-6 mb-2 text-center">Equipment Rental</h3>
                            <p className="text-neutral-300 text-center text-base max-w-xs mx-auto">
                                SFX machines, laser systems, and glow gears available for rent.
                            </p>
                        </motion.div>

                        {/* Column 3 - Has left border only on desktop */}
                        <motion.div
                            className="flex-1 flex flex-col items-center border-l border-neutral-700 px-4 py-4"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <Settings className="w-16 h-16 text-white" />
                            <h3 className="text-white text-xl font-semibold mt-6 mb-2 text-center">Technical Support</h3>
                            <p className="text-neutral-300 text-center text-base max-w-xs mx-auto">
                                Skilled technicians for setup and maintenance.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Additional Hero Section */}
            <HeroSection />

            <HoverFooter />
        </div>
        </>
    )
}