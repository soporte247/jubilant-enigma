import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', page: 'Inicio' },
    { name: 'Planes', page: 'Planes' },
    { name: 'Nosotros', page: 'Nosotros' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Inicio')} className="flex items-center gap-2 group">
              <Shield className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-xl font-bold">
                <span className="text-white">Data</span>
                <span className="text-blue-400">Shark</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPageName === link.page
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to={createPageUrl('Registro')}>
                <Button 
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-6"
                >
                  Únete
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium transition-colors ${
                      currentPageName === link.page
                        ? 'text-blue-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to={createPageUrl('Registro')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
                  >
                    Únete a la lista de espera
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">
                  <span className="text-white">Data</span>
                  <span className="text-blue-400">Shark</span>
                </span>
              </div>
              <p className="text-slate-400 mb-4 max-w-sm">
                Protección digital de próxima generación. Estamos construyendo el futuro de la ciberseguridad accesible.
              </p>
              <div className="flex items-center gap-2 text-slate-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                <span className="text-sm">En construcción</span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to={createPageUrl('Registro')}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Registro
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:info@datashark.com" 
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@datashark.com
                </a>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} DataShark. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                Términos de uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}