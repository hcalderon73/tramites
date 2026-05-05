'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Shield, FileText, GraduationCap, Briefcase, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

const services = [
  { 
    name: 'Acta de Nacimiento', 
    href: '/servicios/acta-nacimiento',
    icon: FileText,
    description: '100% online, envío a cualquier país'
  },
  { 
    name: 'Antecedentes Penales', 
    href: '/servicios/antecedentes-penales',
    icon: Shield,
    description: '100% online, envío internacional'
  },
  { 
    name: 'Título Universitario', 
    href: '/servicios/titulo-universitario',
    icon: GraduationCap,
    description: '100% online para el extranjero'
  },
  { 
    name: 'Certificado de Soltería', 
    href: '/servicios/carta-solteria',
    icon: Briefcase,
    description: '100% online, matrimonio en el exterior'
  },
  { 
    name: 'Pasaporte', 
    href: '/servicios/pasaporte',
    icon: Globe,
    description: 'Asesoría 100% online'
  },
  { 
    name: 'Apostilla La Haya', 
    href: '/servicios/apostilla-haya',
    icon: FileText,
    description: 'Cualquier documento, envío mundial'
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Trámites Legales
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Inicio
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors flex items-center">
                Servicios
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 mt-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <service.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {service.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
                    <Link
                      href="/servicios"
                      className="block px-4 py-2 text-sm text-blue-600 dark:text-blue-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Ver todos los servicios →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contacto"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Contacto
            </Link>

            <Link href="/contacto" className="ml-4">
              <Button variant="primary" size="sm">
                Solicitar Presupuesto
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
            <p className="px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Servicios
            </p>
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <service.icon className="w-4 h-4 mr-3 text-blue-600" />
                {service.name}
              </Link>
            ))}
            <Link
              href="/servicios"
              className="block px-3 py-2 text-blue-600 dark:text-blue-400 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ver todos los servicios →
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
            <Link
              href="/contacto"
              className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="primary" className="w-full">
                Solicitar Presupuesto
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
