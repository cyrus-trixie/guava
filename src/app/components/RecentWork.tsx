'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
  title: string;
  tag: string;
  image: string;
  width: number;
  height: number;
  href: string;
};

const PROJECTS = [
  {
    title: "Vend Grid",
    tag: "Point of Sale System",
    image: "/images/pos.png",
    width: 1500,
    height: 1229,
    href: "https://vend-grid-main.vercel.app/",
  },
  {
    title: "ClientOps",
    tag: "client management system",
    image: "/images/clientOps.png",
    width: 1500,
    height: 1393,
    href: "https://clientops.vercel.app/",
  },
  {
    title: "Harambee Ledger",
    tag: "Finance Dashboard",
    image: "/images/harambee-ledger.png",
    width: 1500,
    height: 1000,
    href: "#",
  },
  {
    title: "Seen Heard Elevated",
    tag: "Therapist Booking Platform",
    image: "/images/she.png",
    width: 1500,
    height: 1125,
    href: "https://seenheardelevated.com/",
  },
  {
    title: "Nuru CRM",
    tag: "Custom Software",
    image: "/images/nuru-crm.png",
    width: 1500,
    height: 1300,
    href: "#",
  },
  {
    title: "Bahari Hotels",
    tag: "Booking Platform",
    image: "/images/bahari-hotels.png",
    width: 1500,
    height: 1050,
    href: "#",
  },
];

// Cards rise into focus rather than just fading — a slight blur clears as
// they settle, like a photo developing. Fits a photography-led portfolio
// grid better than a plain fade, without adding any extra motion noise.
const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    // break-inside-avoid keeps each card intact instead of splitting
    // across columns; mb-6 is the only spacing needed, columns-* below
    // handles everything else.
    <motion.article
      className="mb-6 break-inside-avoid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={cardVariants}
      transition={{ duration: 0.7, ease: easeOut, delay: index * 0.08 }}
    >
      <a href={project.href} className="group block" target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden  bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            width={project.width}
            height={project.height}
            className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Dark scrim + centered arrow button, both hidden until hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
            <span className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="#DB3246"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Title and category sit below the image in normal flow,
            not overlaid on it — matches the Tuwele reference. */}
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          {project.title}
        </h3>
        <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wider text-[#DB3246]">
          {project.tag}
        </span>
      </a>
    </motion.article>
  );
}

export default function RecentWork() {
  return (
    <section className="bg-[#1A1A1A] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Recent Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mt-6 max-w-2xl text-lg/8 text-white/60"
        >
          Here are some of the projects we have been working on lately.
        </motion.p>

        {/* White panel holding the grid, sitting on the dark section */}
        <div className="mt-12 rounded-3xl bg-white p-6 sm:p-10 lg:p-12">
          {/* True masonry via CSS multi-column instead of a manual split:
              each card just flows into whichever column has room next,
              so column heights are uneven on their own — no JS, no fixed
              offsets, same effect as Tuwele's packery grid. */}
          <div className="columns-1 gap-6 md:columns-2 md:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}