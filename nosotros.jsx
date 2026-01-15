import React from 'react';
import TeamSection from '@/components/about/TeamSection';
import SubscribeForm from '@/components/contact/SubscribeForm';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function Nosotros() {
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
              <Users className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre nosotros
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Conoce al equipo detrás de DataShark y nuestra misión de democratizar la ciberseguridad.
            </p>
          </motion.div>
        </div>
      </section>

      <TeamSection />

      {/* Timeline */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestra historia
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-slate-800" />

            {[
              {
                date: '2024',
                title: 'El inicio',
                description: 'Nace la idea de DataShark: crear una plataforma de ciberseguridad accesible para todos.'
              },
              {
                date: 'Ahora',
                title: 'En desarrollo',
                description: 'Estamos construyendo la plataforma, definiendo características y preparando el lanzamiento.'
              },
              {
                date: 'Próximamente',
                title: 'Lanzamiento',
                description: 'Plan gratuito disponible para todos los usuarios de nuestra lista de espera.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <span className="text-blue-400 font-medium text-sm">{item.date}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              ¿Quieres ser parte de esta historia?
            </h3>
            <p className="text-slate-400">
              Únete a nuestra comunidad desde el principio
            </p>
          </motion.div>
          <SubscribeForm compact />
        </div>
      </section>
    </div>
  );
}