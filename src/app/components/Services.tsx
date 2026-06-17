'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    name: 'ERP Solutions',
    description: 'Business systems and process automation.',
    image: '/images/erp.png',
    href: '#',
  },
  {
    name: 'Web Applications',
    description: 'Custom web platforms built around your business.',
    image: '/images/services/web-applications.jpg',
    href: '#',
  },
  {
    name: 'Mobile Apps',
    description: 'Cross-platform mobile development.',
    image: '/images/services/mobile-apps.jpg',
    href: '#',
  },
  {
    name: 'Business Tools',
    description: 'Internal tools and dashboards for daily operations.',
    image: '/images/services/business-tools.jpg',
    href: '#',
  },
  {
    name: 'Technical Support',
    description: 'Maintenance and support services you can rely on.',
    image: '/images/services/technical-support.jpg',
    href: '#',
  },
  {
    name: 'System Maintenance',
    description: 'Ongoing system reliability and uptime.',
    image: '/images/services/system-maintenance.jpg',
    href: '#',
  },
];

export default function Services() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  // Background pattern component
  const BackgroundPattern = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute right-0 top-16 h-full w-1/2 opacity-5" viewBox="0 0 500 500">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#DB3246" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="absolute -left-24 top-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#DB3246] to-pink-500 opacity-5 blur-3xl"></div>
      <div className="absolute -right-24 bottom-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-[#DB3246] to-orange-400 opacity-5 blur-3xl"></div>
    </div>
  );

  return (
    <div className="relative bg-white pb-12 overflow-hidden">
      <BackgroundPattern />

      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <motion.div
          className="mx-auto max-w-4xl lg:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block text-md font-medium tracking-widest text-[#DB3246] uppercase"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Our Services
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={itemVariants}
        >
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative border border-gray-200 bg-white transition-colors duration-300 hover:border-gray-300"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />

                {/* Dimmed overlay, hidden until hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Overlay content: fades in and slides up on hover */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-lg font-semibold text-white">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {service.description}
                    </p>
                    <a
                      href={service.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-white"
                    >
                      Learn more
                      <ArrowUpRight className="ml-1 size-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-3">
                <h3 className="text-sm font-medium text-gray-900">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}