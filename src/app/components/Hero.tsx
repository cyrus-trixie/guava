'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-4 lg:px-8">
        {/* Hero content */}
        <div className="mx-auto max-w-2xl py-32">
          <motion.div 
            className="hidden sm:mb-8 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          
          </motion.div>
          
          <div className="text-center">
          <motion.h1 
              className="text-5xl font-semibold tracking-tight text-balance text-white"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We design and build software systems for modern businesses.
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Custom software, mobile apps, and internal tools that simplify operations, reduce manual work, and improve how your business runs.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#"
                className="rounded-full bg-[#DB3246] px-7 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#DB3246] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Build with NuruTek
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm/6 font-semibold text-white"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                See our work <span aria-hidden="true">→</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}