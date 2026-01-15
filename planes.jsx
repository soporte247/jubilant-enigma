import React from 'react';
import PlansSection from '@/components/plans/PlansSection';
import SubscribeForm from '@/components/contact/SubscribeForm';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Planes() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 mb-6">
              <Shield className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Planes de protección
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Estamos diseñando opciones flexibles para que todos puedan acceder a la ciberseguridad que necesitan.
            </p>
          </motion.div>
        </div>
      </section>

      <PlansSection />

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              ¿Tienes preguntas sobre los planes?
            </h3>
            <p className="text-slate-400">
              Déjanos tu correo y te contactaremos personalmente
            </p>
          </motion.div>
          <SubscribeForm compact />
        </div>
      </section>
    </div>
  );
}