import React from 'react';
import SubscribeForm from '@/components/contact/SubscribeForm';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Users } from 'lucide-react';

export default function Registro() {
  const benefits = [
    {
      icon: Rocket,
      title: 'Acceso anticipado',
      description: 'Sé de los primeros en probar DataShark'
    },
    {
      icon: Shield,
      title: 'Plan gratuito garantizado',
      description: 'Reserva tu lugar en nuestro plan sin costo'
    },
    {
      icon: Zap,
      title: 'Actualizaciones exclusivas',
      description: 'Entérate antes que nadie de las novedades'
    },
    {
      icon: Users,
      title: 'Comunidad fundadora',
      description: 'Forma parte de nuestra comunidad desde el inicio'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Lista de espera</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Únete a la revolución de la
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> seguridad digital</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10">
              DataShark está casi listo. Registra tu correo para ser notificado en el momento del lanzamiento 
              y asegurar tu acceso al plan gratuito.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{benefit.title}</h3>
                    <p className="text-slate-500 text-xs">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SubscribeForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}