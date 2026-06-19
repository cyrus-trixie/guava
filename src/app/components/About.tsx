'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, Variants, Easing } from 'framer-motion';
import { Rocket, ShieldCheck, Database, ChevronRight } from 'lucide-react';


const customEase: Easing = [0.25, 0.1, 0.25, 1.0];

// Background pattern - subtle dot grid
const BackgroundPattern = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#DB3246" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotGrid)" />
            </svg>
        </div>
    </div>
);

export default function AboutNuruTekSolutions() {
    const [isInView, setIsInView] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsInView(true);
    }, []);

    // Only play the video while it's actually visible on screen
    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoEl.play().catch(() => {});
                } else {
                    videoEl.pause();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(videoEl);
        return () => observer.disconnect();
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

  
    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { 
                duration: 0.8, 
                ease: customEase
            }
        }
    };


    const videoVariants: Variants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { 
                duration: 1.2, 
                ease: customEase
            }
        }
    };

    return (
        <div className="relative bg-white overflow-hidden px-6 py-16 lg:px-0">
            <BackgroundPattern />

            {/* Accent line */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-1 bg-[#DB3246]"
            />

            <div className="mx-auto max-w-6xl">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center">
                        <motion.h1
                            variants={itemVariants}
                            className="mt-3 font-bold tracking-tight text-gray-900 text-5xl flex gap-2 items-baseline"
                        >
                            <span>NuruTek</span>
                            <span className="text-[#DB3246]">Solutions</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="mt-6 text-lg text-gray-700 leading-relaxed"
                        >
                            NuruTek Solutions is a software development company based in Kenya, building custom software systems for modern businesses.
                            We specialize in ERP solutions, web applications, mobile apps, and business tools that streamline operations and improve efficiency.

                            We also provide ongoing technical support and system maintenance to keep everything running smoothly.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mt-10"
                        >
                            <motion.a
                                href="/work"
                                className="group inline-flex items-center px-6 py-2 bg-[#DB3246] text-white font-medium rounded-full overflow-hidden relative"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">See Our Work</span>
                                <motion.span
                                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.5 }}
                                />
                                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Column: Video with Animation */}
                    <motion.div
                        className="relative lg:sticky lg:top-24 flex items-center justify-center"
                        variants={videoVariants}
                    >
                        <motion.div
                            className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="aspect-w-16 aspect-h-9 bg-[#DB3246]/10 shadow-sm rotate-3 rounded-2xl overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <video
                                    ref={videoRef}
                                    className="w-full h-full bg-[#DB3246]/30 object-cover"
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="/heroVideo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Accent lines */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-1 rounded-full bg-[#DB3246] opacity-70"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                />
                                <motion.div
                                    className="absolute bottom-0 right-0 w-full rounded-full h-2 bg-[#DB3246] opacity-70"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: 1.4 }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                variants={itemVariants}
                className="mt-12 bg-[#1a1a1a] max-w-6xl mx-auto rounded-xl p-8 sm:p-12 shadow-md"
            >
                <h2 className="text-center text-4xl font-bold text-white mb-8">What Sets Us Apart</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="p-3 bg-[#DB3246] rounded-full">
                            <Rocket className="h-10 w-10 text-white" />
                        </div>
                        <p className="mt-4 text-lg font-semibold text-white">Fast Delivery</p>
                        <p className="mt-2 text-sm text-white">
                            We move quickly from idea to implementation, delivering solutions that create value without unnecessary delays.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-3 bg-[#DB3246] rounded-full">
                            <ShieldCheck className="h-10 w-10 text-white" />
                        </div>
                        <p className="mt-4 text-lg font-semibold text-white">Reliable Support</p>
                        <p className="mt-2 text-sm text-white">
                            From deployment to maintenance, we provide ongoing technical support to keep systems running smoothly.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-3 bg-[#DB3246] rounded-full">
                            <Database className="h-10 w-10 text-white" />
                        </div>
                        <p className="mt-4 text-lg font-semibold text-white">Scalable Systems</p>
                        <p className="mt-2 text-sm text-white">
                            We build software and business tools designed to grow with your operations and adapt to changing needs.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}