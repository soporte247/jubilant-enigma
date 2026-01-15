import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import SubscribeForm from '@/components/contact/SubscribeForm';
import { motion } from 'framer-motion';

export default function Inicio() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <MissionSection />
      
      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para proteger tu vida digital?
            </h2>
            <p className="text-slate-400 text-lg">
              Únete a los primeros usuarios que confiarán en DataShark
            </p>
          </motion.div>
          <SubscribeForm />
        </div>
      </section>
    </div>
  );
}